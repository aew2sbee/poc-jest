# tech-jest
[Jest](https://jestjs.io/)について検証する

## GitHub Pages
- 本番環境: https://aew2sbee.github.io/poc-jest/tests-result/main/
- 開発環境: https://aew2sbee.github.io/poc-jest/tests-result/develop/

## 環境構築

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