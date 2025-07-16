export function isNumeric(val: string): boolean {
  // eslint-disable-next-line regexp/no-unused-capturing-group
  return /^\d+(\.\d+)?$/.test(val);
}

export function isNaN(val: number): val is typeof Number.NaN {
  if (Number.isNaN) {
    return Number.isNaN(val);
  }

  // eslint-disable-next-line no-self-compare
  return val !== val;
}
