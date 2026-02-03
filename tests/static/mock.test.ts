describe("モックオブジェクトの評価", () => {
  test("jest.fn()呼び出しを確認する", () => {
    const mockFunction = jest.fn().mockImplementation((x: number) => x * 2);
    expect(mockFunction(2)).toBe(4);
  });
});
