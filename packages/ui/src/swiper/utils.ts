/**
 * 计算模运算结果，处理负数情况下的模运算
 *
 * 与普通的 % 运算符不同，此函数确保返回值始终为非负数
 * 当被除数为负数时，普通的 % 运算符会返回负数，而此函数会将结果转换为正数
 *
 * @param value - 被除数
 * @param division - 除数
 * @returns 模运算的非负结果
 *
 * @example
 * // 普通模运算
 * modulus(5, 3); // 返回 2
 *
 * // 处理负数情况
 * modulus(-1, 3); // 返回 2，而不是 -1
 * modulus(-4, 3); // 返回 2，而不是 -1
 */
export function modulus(value: number, division: number) {
  const remainder = value % division;
  return remainder < 0 ? remainder + division : remainder;
}

export function isScrollTarget(element: HTMLElement, parent: HTMLElement) {
  if (!parent)
    return false;

  if (
    element.scrollWidth > element.clientWidth
    || element.scrollHeight > element.clientHeight
  ) {
    return true;
  }
  if (element.parentElement && element.parentElement !== parent) {
    return isScrollTarget(element.parentElement, parent);
  }
  return false;
}
