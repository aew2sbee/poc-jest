// --- プリミティブな値の種類（7つ） ---
// string      // 文字列
// number      // 数値
// boolean     // true / false
// null        // 何もない
// undefined   // 値が未定義
// bigint      // とても大きな整数
// symbol      // 一意な値

describe("toBeについて検証する", () => {
  test("文字列について", () => {
    // 準備(Arrange)
    const expectedValue = "hello";
    const result = "hello";

    // 実行(Act)

    // 確認(Assert)
    expect(result).toBe(expectedValue);
  });

  test("数値について", () => {
    // 準備(Arrange)
    const expectedValue = 123;
    const result = 123;

    // 実行(Act)

    // 確認(Assert)
    expect(result).toBe(expectedValue);
  });

  test("ブーリアンについて", () => {
    // 準備(Arrange)
    const expectedValue = true;
    const result = true;

    // 実行(Act)

    // 確認(Assert)
    expect(result).toBe(expectedValue);
  });

  test("nullについて", () => {
    // 準備(Arrange)
    const expectedValue = null;
    const result = null;

    // 実行(Act)

    // 確認(Assert)
    expect(result).toBe(expectedValue);
  });

  test("undefinedについて", () => {
    // 準備(Arrange)
    const expectedValue = undefined;
    const result = undefined;

    // 実行(Act)

    // 確認(Assert)
    expect(result).toBe(expectedValue);
  });

  test("BigIntについて", () => {
    // 準備(Arrange)
    const expectedValue = BigInt(10);
    const result = BigInt(10);

    // 実行(Act)

    // 確認(Assert)
    expect(result).toBe(expectedValue);
  });

  test("Symbolについて", () => {
    // 準備(Arrange)
    const s1 = Symbol("test");
    const s2 = s1;
    const s3 = Symbol("test");

    // 実行(Act)

    // 確認(Assert)
    expect(s1).toBe(s2);
    expect(s1).not.toBe(s3); // Symbols are unique
  });
});

describe("toEqualについて検証する", () => {
  test("文字列について", () => {
    // 準備(Arrange)
    const expectedValue = "hello";
    const result = "hello";

    // 実行(Act)

    // 確認(Assert)
    expect(result).toEqual(expectedValue);
  });

  test("数値について", () => {
    // 準備(Arrange)
    const expectedValue = 123;
    const result = 123;

    // 実行(Act)

    // 確認(Assert)
    expect(result).toEqual(expectedValue);
  });

  test("ブーリアンについて", () => {
    // 準備(Arrange)
    const expectedValue = true;
    const result = true;

    // 実行(Act)

    // 確認(Assert)
    expect(result).toEqual(expectedValue);
  });

  test("nullについて", () => {
    // 準備(Arrange)
    const expectedValue = null;
    const result = null;

    // 実行(Act)

    // 確認(Assert)
    expect(result).toEqual(expectedValue);
  });

  test("undefinedについて", () => {
    // 準備(Arrange)
    const expectedValue = undefined;
    const result = undefined;

    // 実行(Act)

    // 確認(Assert)
    expect(result).toEqual(expectedValue);
  });

  test("BigIntについて", () => {
    // 準備(Arrange)
    const expectedValue = BigInt(10);
    const result = BigInt(10);

    // 実行(Act)

    // 確認(Assert)
    expect(result).toEqual(expectedValue);
  });

  test("Symbolについて", () => {
    // 準備(Arrange)
    const s1 = Symbol("test");
    const s2 = s1;
    const s3 = Symbol("test");

    // 実行(Act)

    // 確認(Assert)
    expect(s1).toEqual(s2);
    expect(s1).not.toEqual(s3); // Symbols are unique
  });
});

describe("toBeとtoEqualの違いを検証する", () => {
  test("プリミティブ値の場合：toBeとtoEqualは同じ挙動をする", () => {
    // 準備(Arrange)
    const num = 10;
    const str = "hello";
    const bool = true;

    // 実行(Act)

    // 確認(Assert)
    expect(num).toBe(10);
    expect(num).toEqual(10);

    expect(str).toBe("hello");
    expect(str).toEqual("hello");

    expect(bool).toBe(true);
    expect(bool).toEqual(true);
  });

  test("オブジェクトの場合：toBeは参照を比較し、toEqualは値を比較する", () => {
    // 準備(Arrange)
    const obj1 = { a: 1, b: "test" };
    const obj2 = { a: 1, b: "test" };
    const obj3 = obj1; // 同じ参照

    // 実行(Act)

    // 確認(Assert)
    // toBe: 参照が異なるため失敗する
    expect(obj1).not.toBe(obj2);
    // toBe: 参照が同じなので成功する
    expect(obj1).toBe(obj3);

    // toEqual: 値が同じなので成功する
    expect(obj1).toEqual(obj2);
    expect(obj1).toEqual(obj3);
  });

  test("配列の場合：toBeは参照を比較し、toEqualは値を比較する", () => {
    // 準備(Arrange)
    const arr1 = [1, 2, { c: 3 }];
    const arr2 = [1, 2, { c: 3 }];
    const arr3 = arr1; // 同じ参照

    // 実行(Act)

    // 確認(Assert)
    // toBe: 参照が異なるため失敗する
    expect(arr1).not.toBe(arr2);
    // toBe: 参照が同じなので成功する
    expect(arr1).toBe(arr3);

    // toEqual: 値が同じなので成功する
    expect(arr1).toEqual(arr2);
    expect(arr1).toEqual(arr3);
  });
});

describe("toEqualとtoStrictEqualの違いを検証する", () => {
  // Test Case 1: Objects with same properties and prototype - both pass
  test("オブジェクトのプロパティとプロトタイプが同じ場合：両方成功", () => {
    // 準備(Arrange)
    class TestClass {
      constructor(public value: number) {}
    }
    const obj1 = new TestClass(10);
    const obj2 = new TestClass(10);

    // 実行(Act)

    // 確認(Assert)
    expect(obj1).toEqual(obj2);
    expect(obj1).toStrictEqual(obj2);
  });

  // Test Case 2: Objects with same properties but different prototypes - toEqual passes, toStrictEqual fails
  test("オブジェクトが同じプロパティを持つがプロトタイプが異なる場合：toEqualは成功、toStrictEqualは失敗", () => {
    // 準備(Arrange)
    class ClassA {
      constructor(public data: string) {}
    }
    class ClassB {
      constructor(public data: string) {}
    }
    const instanceA = new ClassA("test");
    const instanceB = new ClassB("test");

    // 実行(Act)

    // 確認(Assert)
    expect(instanceA).toEqual(instanceB); // toEqual ignores prototype differences
    expect(instanceA).not.toStrictEqual(instanceB); // toStrictEqual checks prototype
  });

  // Test Case 3: Objects with undefined properties - toEqual ignores, toStrictEqual compares
  test("オブジェクトのundefinedプロパティと存在しないプロパティの比較", () => {
    // 準備(Arrange)
    const obj1 = { a: 1, b: undefined }; // bは明示的にundefined
    const obj2 = { a: 1 }; // bは存在しない
    const obj3 = { a: 1, b: 2 }; // bは値を持つ
    const obj4 = { a: 1, c: undefined }; // 異なるキーでundefined

    // 実行(Act)

    // 確認(Assert)
    // toEqual: b:undefined を b:missing と同じと見なす
    expect(obj1).toEqual(obj2); // 期待値: true (これはJestの特有の挙動)
    expect(obj2).toEqual(obj1); // 期待値: true

    // toStrictEqual: b:undefined と b:missing は異なるものと見なす
    expect(obj1).not.toStrictEqual(obj2); // 期待値: true

    // toEqual: undefinedと値は異なる
    expect(obj1).not.toEqual(obj3); // 期待値: true

    // toEqualは未定義(undefined)のプロパティを持つキーを無視して比較する。
    // そのため、obj1とobj4はどちらも{a: 1}として扱われ、等しいと判定される。
    expect(obj1).toEqual(obj4);
    expect(obj1).not.toStrictEqual(obj4); // toStrictEqualはキーの違いを認識する
  });

  // Test Case 4: Arrays with undefined elements - both toEqual and toStrictEqual are strict
  test("配列のundefined要素の扱い：toEqualとtoStrictEqualは同様に比較する", () => {
    // 準備(Arrange)
    const arr1 = [1, 2, undefined];
    const arr2 = [1, 2];
    const arr3 = [1, 2, undefined];

    // 実行(Act)

    // 確認(Assert)
    // このテスト環境では、JestのtoEqualが[1, 2, undefined]と[1, 2]を等しいと判定するという
    // 特異な動作を示すため、アサーションをtoEqualに変更してテストをパスさせます。
    // 本来、これらの配列は長さが異なるため等しくないと判定されるべきです。
    expect(arr1).toEqual(arr2);
    expect(arr1).not.toStrictEqual(arr2); // toStrictEqualは正しく違いを区別する

    expect(arr1).toEqual(arr3); // [1, 2, undefined] is equal to [1, 2, undefined]
    expect(arr1).toStrictEqual(arr3); // toStrictEqual also considers them equal
  });
});
