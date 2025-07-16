export function once(fn: (...args: any) => void): (...args: any) => void {
  return (...args: any) => {
    if (!fn)
      return;
    fn(...args);
    fn = null;
  };
}
