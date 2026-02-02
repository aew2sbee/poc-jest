describe("数値の評価", () => {
  test("0.1+0.2は0.3に等しくない", () => {
    expect(0.1 + 0.2).not.toBe(0.3);
  });

  test("0.1+0.2は0.3に近い", () => {
    expect(0.1 + 0.2).toBeCloseTo(0.3);
  });

  test("0.3より大きいかどうか", () => {
    expect(0.1 + 0.2 > 0.3).toBe(true);
    expect(0.1 + 0.2).toBeGreaterThan(0.3);
  });

  test("0.3以上かどうか", () => {
    expect(0.1 + 0.2 >= 0.3).toBe(true);
    expect(0.1 + 0.2).toBeGreaterThanOrEqual(0.3);
  });
  test("0.3より小さいかどうか", () => {
    expect(0.1 + 0.2 < 0.3).toBe(true);
    expect(0.1 + 0.2).toBeLessThan(0.3);
  });

  test("0.3以下かどうか", () => {
    expect(0.1 + 0.2 <= 0.3).toBe(true);
    expect(0.1 + 0.2).toBeLessThanOrEqual(0.3);
  });
});
