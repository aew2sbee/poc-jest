import * as sut from "../../src/server/lib/calc";

describe("sum関数のテスト", () => {
  test("2つの数値を加算できる", () => {
    // 準備(Arrange)
    const arg01 = 1;
    const arg02 = 2;
    const expectedValue = 3;

    // 実行(Act)
    const result = sut.sum(arg01, arg02);

    // 確認(Assert)
    expect(result).toBe(expectedValue);
  });

  test("負の数どうしを加算できる", () => {
    // 準備(Arrange)
    const arg01 = -1;
    const arg02 = -2;
    const expectedValue = -3;

    // 実行(Act)
    const result = sut.sum(arg01, arg02);

    // 確認(Assert)
    expect(result).toBe(expectedValue);
  });

  test("小数を加算できる（誤差を考慮）", () => {
    // 準備(Arrange)
    const arg01 = 0.1;
    const arg02 = 0.2;

    // 実行(Act)
    const result = sut.sum(arg01, arg02);

    // 確認(Assert)
    expect(result).toBeCloseTo(0.3);
  });
});
