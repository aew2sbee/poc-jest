const fetchDataWithCallback = (callback: (data: string) => void) => {
  setTimeout(() => {
    callback("Hello, Callback!");
  }, 100);
};

describe("Callbackの評価", () => {
  test("Hello, Callback!が返されることを確認する", (done) => {
    fetchDataWithCallback((data) => {
      expect(data).toBe("Hello, Callback!");
      done(); // テストの終了を宣言
    });
  });
});
