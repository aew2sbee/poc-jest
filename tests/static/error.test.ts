const ERROR_MESSAGE_SHORT_PASSWORD = "passwordが8文字未満です";

class User {
  name: string;
  password: string;

  constructor(name: string, password: string) {
    if (password.length < 8) {
      throw new Error(ERROR_MESSAGE_SHORT_PASSWORD);
    }
    if (!this.validatePassword(password)) {
      throw new Error("Password validation failed during user creation");
    }
    this.name = name;
    this.password = password;
  }
  validatePassword(inputPassword: string): boolean {
    if (inputPassword === this.password) {
      return true;
    } else {
      throw new Error("Invalid password");
    }
  }
}

describe("Errorの評価", () => {
  test("passwordが8文字未満の場合にエラーを投げる", () => {
    expect(() => {
      new User("testuser", "short");
    }).toThrow(ERROR_MESSAGE_SHORT_PASSWORD);
  });
});
