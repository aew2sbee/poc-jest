import * as sut from '@/server/validation/user';

const sampleUser = {
  id: '550e8400-e29b-41d4-a716-446655440000',
  name: '山田太郎',
  email: 'taro.yamada@example.com',
  age: 30,
  gender: 'male',
  createdAt: new Date('2023-01-01T00:00:00Z'),
};

describe('Zodライブラリーの評価', () => {
  test('バリデーション内のデータであることを確認する', () => {
    // 準備(Arrange)
    const expectedValue = true;
    const arg = sampleUser;
    // 実行(Act)
    const result = sut.isValidateUser(arg);
    // 確認(Assert)
    expect(result).toBe(expectedValue);
  });
  test('uuidがバリデーションエラーで検知されることを確認する', () => {
    // 準備(Arrange)
    const expectedValue = false;
    const arg = {
      ...sampleUser,
      id: 'invalid-uuid',
    };
    // 実行(Act)
    const result = sut.isValidateUser(arg);
    // 確認(Assert)
    expect(result).toBe(expectedValue);
  });
  test('stringが文字数未満でバリデーションエラーで検知されることを確認する', () => {
    // 準備(Arrange)
    const expectedValue = false;
    const arg = {
      ...sampleUser,
      name: '山田',
    };
    // 実行(Act)
    const result = sut.isValidateUser(arg);
    // 確認(Assert)
    expect(result).toBe(expectedValue);
  });
  test('stringが文字数以上でバリデーションエラーで検知されることを確認する', () => {
    // 準備(Arrange)
    const expectedValue = false;
    const arg = {
      ...sampleUser,
      name: '山田太郎山田太郎山田太郎山田太郎山田太郎山田太郎山田太郎山田太郎山田太郎山田太郎山田太郎山田太郎山田太郎山田太郎山田太郎山田太郎',
    };
    // 実行(Act)
    const result = sut.isValidateUser(arg);
    // 確認(Assert)
    expect(result).toBe(expectedValue);
  });
});
