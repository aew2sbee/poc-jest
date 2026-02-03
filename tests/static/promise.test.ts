const MESSAGE = "success";
const ERROR_MESSAGE = "error";
const TIMEOUT = 100;

const fetchDataWithPromiseResolve = () =>
  new Promise<string>((resolve) => {
    setTimeout(resolve, TIMEOUT, MESSAGE);
  });

const fetchDataWithPromiseReject = () =>
  new Promise<string>((resolve, reject) => {
    setTimeout(reject, TIMEOUT, ERROR_MESSAGE);
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
  test("rejectでerrorで受け取る", () => {
    return fetchDataWithPromiseReject().catch((error) => {
      expect(error).toBe(ERROR_MESSAGE);
    });
  });
  test("doneを使ってrejectでerrorで受け取る", (done) => {
    fetchDataWithPromiseReject().catch((error) => {
      expect(error).toBe(ERROR_MESSAGE);
      done(); // テストの終了を宣言
    });
  });
  test("async/awaitでerrorで受け取る", async () => {
    try {
      await fetchDataWithPromiseReject();
    } catch (error) {
      expect(error).toBe(ERROR_MESSAGE);
    }
  });
});
