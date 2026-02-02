# tech-jest
[Jest](https://jestjs.io/)について検証する

## GitHub Pages
- 本番環境: https://aew2sbee.github.io/poc-jest/output/html-report/
- 開発環境: https://aew2sbee.github.io/poc-jest/develop/output/html-report/

## 環境構築
Node プロジェクトを初期化
```bash
$ npx create-next-app@latest
Need to install the following packages:
create-next-app@16.1.6
Ok to proceed? (y) y
√ What is your project named? ... .
√ Would you like to use the recommended Next.js defaults? » No, customize settings
√ Would you like to use TypeScript? ... No / Yes
√ Which linter would you like to use? » ESLint
√ Would you like to use React Compiler? ... No / Yes
√ Would you like to use Tailwind CSS? ... No / Yes
√ Would you like your code inside a `src/` directory? ... No / Yes
√ Would you like to use App Router? (recommended) ... No / Yes
√ Would you like to customize the import alias (`@/*` by default)? ... No / Yes
```

必要パッケージをインストール
```bash
npm i --save-dev --save-exact jest typescript ts-jest @types/jest
```

tsconfig を作る
```bash
npx tsc --init

```
```bash
npm run test

```