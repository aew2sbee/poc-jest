describe("配列の部分一致", () => {
  test("1,2,3,4,5の配列に3が含まれる", () => {
    expect([1, 2, 3, 4, 5]).toContain(3);
  });
  test("オブジェクト配列による部分一致", () => {
    const users = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
    ];
    expect(users).toContainEqual({ id: 2, name: "Bob" });
  });
});
