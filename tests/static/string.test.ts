describe("文字列の部分一致", () => {
  test("123456789に567が含まれる", () => {
    expect("123456789").toContain("567");
  });
  test("正規表現による部分一致", () => {
    expect("hello world").toMatch(/world/);
  });
});
