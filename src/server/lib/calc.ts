/**
 * 2つの数値を加算して結果を返します。
 *
 * @param a - 加算する1つ目の数値
 * @param b - 加算する2つ目の数値
 * @returns a と b を加算した結果
 */
export const sum = (a: number, b: number): number => a + b;

/**
 * 数値が偶数であるかを判断します。
 *
 * @param num - 偶数かどうかをチェックする数値
 * @returns 数値が偶数の場合は true、そうでない場合は false
 */
export const isEven = (num: number): boolean => num % 2 === 0;
