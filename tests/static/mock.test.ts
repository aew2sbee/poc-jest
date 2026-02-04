import * as calc from "../../src/server/lib/calc";
import User from "../../src/server/api/axios"; // Import User from axios.ts

// "../../src/server/lib/calc"モジュール全体をモックする
// ポイント: モジュールのパスが必須
jest.mock("../../src/server/lib/calc", () => ({
  // jest.requireActual()を使って、モック対象のモジュールの実際の関数をすべて取得する
  // これにより、isEven以外の関数はそのままの動作を維持する
  ...jest.requireActual("../../src/server/lib/calc"),
  // isEven関数をモックする
  // jest.fn()でモック関数を作成し、モックの実装を定義する
  // このモックされたisEvenは、引数が99の場合にのみtrueを返し、それ以外はfalseを返す
  isEven: jest.fn((num: number) => num === 99),
}));

// "../../src/server/api/axios"モジュール全体をモックする
// searchUserがUserクラスのstaticメソッドなので、そのようにモックする
jest.mock("../../src/server/api/axios", () => ({
  __esModule: true, // ESモジュールとして扱うことを示す
  default: {
    searchUser: jest.fn(() =>
      Promise.resolve({
        id: 1,
        name: "Mock User",
      }),
    ), // searchUserをモックし、解決済みのPromiseを返す
  },
}));

describe("モックオブジェクトの評価", () => {
  let spy: jest.SpyInstance;
  afterEach(() => {
    // 各テストの後にスパイを復元する
    // これにより、他のテストに影響を与えず、元の実装に戻る
    if (spy) spy.mockRestore();
  });

  test("jest.fn().mockImplementationで掛け算が可能か確認する", () => {
    // mockImplementationはモック関数の実装を設定する
    // 役割: 関数が呼ばれたときに、常に同じ動作をします。
    const mockFunction = jest.fn().mockImplementation((x: number) => x * 2);
    expect(mockFunction(2)).toBe(4);
  });

  test("jest.fn().mockImplementationOnceで呼び出し回数に応じた結果が返ってくるか確認する", () => {
    // mockImplementationOnceは1回限りのモック実装を設定する
    // 役割: 呼び出されるたびに異なる動作をさせることができます。
    const mockFunction = jest
      .fn()
      .mockImplementationOnce(() => "1回目")
      .mockImplementationOnce(() => "2回目");
    expect(mockFunction()).toBe("1回目");
    expect(mockFunction()).toBe("2回目");
    expect(mockFunction()).toBe(undefined);
  });

  test("jest.fn()でMath.random()の返り値を強制する", async () => {
    // jest.mock: モジュールすべてもしくは一部をモック化するために使用される
    // jest.spyOn: 既存のオブジェクトの特定の関数をモック化するために使用される
    // jest.spyOn()でモック化した場合、モックオブジェクトのmockRestore()を呼び出すことで、元の実装に戻すことができる
    // 第1引数: モック化したいオブジェクト, 第2引数: そのオブジェクトのメソッド名
    spy = jest.spyOn(Math, "random").mockImplementation(() => 1); // 例としてMath.randomをスパイ

    // スパイが1回呼び出されたことを確認
    expect(Math.random()).toBe(1);
  });
});

describe("内部モジュールのモック化", () => {
  test("isEvenがモックされていることを確認する", () => {
    // モックされたisEvenは、入力が99の場合のみtrueを返す
    expect(calc.isEven(99)).toBe(true);
    expect(calc.isEven(2)).toBe(false);
    expect(calc.isEven).toHaveBeenCalledTimes(2);
  });
});

describe("外部モジュールのモック化", () => {
  // 各テストの前にモックの履歴をリセットする
  // これにより、各テストが他のテストの影響を受けないようにする
  beforeEach(() => {
    (User.searchUser as jest.Mock).mockClear();
    (calc.isEven as jest.Mock).mockClear();
  });

  test("axios.tsのsearchUserがモックされていることを確認する", async () => {
    // jest.mockで定義したデフォルトのモック実装が使われる
    // searchUserを呼び出す
    const user = await User.searchUser();

    // モックされた値が返されることを確認
    expect(user).toEqual({ id: 1, name: "Mock User" });
    // searchUserが1回呼び出されたことを確認
    expect(User.searchUser).toHaveBeenCalledTimes(1);
  });

  test("mockImplementationOnceを使って、初回失敗・2回目成功のシナリオをテストする", async () => {
    // searchUserのモックをこのテストケース用に上書き
    (User.searchUser as jest.Mock)
      .mockImplementationOnce(() => Promise.reject(new Error("API Error")))
      .mockImplementationOnce(() =>
        Promise.resolve({ id: 2, name: "Retry User" }),
      );

    // 1回目の呼び出し（失敗することを期待）
    await expect(User.searchUser()).rejects.toThrow("API Error");

    // 2回目の呼び出し（成功することを期待）
    const user = await User.searchUser();
    expect(user).toEqual({ id: 2, name: "Retry User" });

    // 合計で2回呼び出されたことを確認
    expect(User.searchUser).toHaveBeenCalledTimes(2);
  });
});
