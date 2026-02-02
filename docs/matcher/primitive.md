## 1. 違いの概要

マッチャー,役割,主な用途
toBe,値そのもの（参照）が同じか,数値、文字列、真偽値など
toEqual,中身のデータが同じか,配列、オブジェクトの内容確認
toStrictEqual,構造と型が完全に一致するか,クラスのインスタンスや undefined の有無

## 2. 各マッチャーの詳細とコード例
### 🌱 toBe
JavaScriptの === 演算子と同じ動きをします。メモリ上の「場所」まで同じである必要があります。
- 向いているもの: 100, "hello", true などのプリミティブな値。
- 注意点: オブジェクトや配列は、中身が同じでも「別物」とみなされます。

```ts
test('toBe の例', () => {
  const num = 10;
  expect(num).toBe(10); // ✅ 成功

  const obj1 = { id: 1 };
  const obj2 = { id: 1 };
  // expect(obj1).toBe(obj2); // ❌ 失敗（中身は同じだが、別のメモリ保存されているため）
});
```
### 🌱 toEqual
オブジェクトや配列の**中身（プロパティ）**を再帰的にチェックします。
- 向いているもの: オブジェクト、配列。
- 注意点: 「クラスのインスタンスかどうか」や「値が undefined のプロパティ」などは無視されることがあります。

```ts
test('toEqual の例', () => {
  const obj1 = { id: 1 };
  const obj2 = { id: 1 };
  expect(obj1).toEqual(obj2); // ✅ 成功（中身が同じなので）
});
```

### toStrictEqual
toEqual よりもさらに厳格です。以下の違いもチェックします。
- クラスの型: 同じプロパティを持っていても、クラスが違えば失敗します。
- undefined: 配列の中に undefined が含まれている場合なども厳密にチェックします。

```ts
test('toStrictEqual の例', () => {
  class User {
    constructor(id) { this.id = id; }
  }

  const obj = { id: 1 };
  const user = new User(1);

  expect(user).toEqual(obj);        // ✅ 成功（構造が同じに見えるため）
  expect(user).not.toStrictEqual(obj); // ✅ 成功（クラスが違うので不一致と判定される）
});
```

## 🌱 実装のアドバイス
1. 数値や文字列などの単純な値 → toBe
2. 配列やオブジェクトの内容確認 → toEqual
3. より厳密に（型や未定義値も含めて）検証したい時 → toStrictEqual

> [!NOTE]
> 迷ったら、オブジェクトに対しては toStrictEqual を使う癖をつけておくと、
> 予期せぬバグ（プロパティの欠落など）に気づきやすくなります。