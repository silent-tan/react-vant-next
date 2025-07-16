export const inBrowser = typeof window !== "undefined";

export function isWindow(val: unknown): val is Window {
  return val === window;
}
