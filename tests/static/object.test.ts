const sampleObj = {
  id: 1,
  name: "Test Object",
  details: {
    description: "This is a test object for unit testing.",
    tags: ["test", "object", "jest"],
  },
};

describe("オブジェクトの部分一致", () => {
  test("keyとvalueの一致", () => {
    expect(sampleObj).toHaveProperty("name", "Test Object");
  });
  test("ネストしたkeyとvalueの一致", () => {
    expect(sampleObj).toHaveProperty(
      "details.description",
      "This is a test object for unit testing.",
    );
  });
});
