const MESSAGE = "success";

const fetchDataWithPromiseResolve = () =>
  new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(MESSAGE);
    }, 1000);
  });

describe("Promiseの評価", () => {
  test("resolveでsuccessで受け取る", () => {
    return fetchDataWithPromiseResolve().then((data) => {
      expect(data).toBe(MESSAGE);
    });
  });
  test("doneを使ってresolveでsuccessで受け取る", (done) => {
    fetchDataWithPromiseResolve().then((data) => {
      expect(data).toBe(MESSAGE);
      done(); // テストの終了を宣言
    });
  });
  test("async/awaitでsuccessで受け取る", async () => {
    const data = await fetchDataWithPromiseResolve();
    expect(data).toBe(MESSAGE);
  });
});
