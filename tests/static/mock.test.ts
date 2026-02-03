describe("モックオブジェクトの評価", () => {
  test("jest.fn().mockImplementationで掛け算が可能か確認する", () => {
    const mockFunction = jest.fn().mockImplementation((x: number) => x * 2);
    expect(mockFunction(2)).toBe(4);
  });
  test("jest.fn().mockImplementationOnceで呼び出し回数に応じた結果が返ってくるか確認する", () => {
    const mockFunction = jest
      .fn()
      .mockImplementationOnce(() => "1回目")
      .mockImplementationOnce(() => "2回目");
    expect(mockFunction()).toBe("1回目");
    expect(mockFunction()).toBe("2回目");
    expect(mockFunction()).toBe(undefined);
  });
});
