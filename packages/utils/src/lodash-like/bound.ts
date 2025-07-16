/**
 * 将数值约束在指定的最小值和最大值范围内
 *
 * @param position - 需要被约束的数值
 * @param min - 可选的最小值边界，如果未定义则不设置下限
 * @param max - 可选的最大值边界，如果未定义则不设置上限
 *
 * @returns 约束后的数值，保证不小于最小值且不大于最大值
 *
 * @example
 * // 返回 5，因为 5 在 0 和 10 之间
 * bound(5, 0, 10);
 *
 * // 返回 0，因为 -5 小于最小值 0
 * bound(-5, 0, 10);
 *
 * // 返回 10，因为 15 大于最大值 10
 * bound(15, 0, 10);
 *
 * // 返回 5，因为只设置了最小值 0，而 5 大于 0
 * bound(5, 0, undefined);
 */
export function bound(
  position: number,
  min: number | undefined,
  max: number | undefined,
) {
  let ret = position;
  if (min !== undefined) {
    ret = Math.max(position, min);
  }
  if (max !== undefined) {
    ret = Math.min(ret, max);
  }
  return ret;
}
