export function isDef<T>(val: T): val is NonNullable<T> {
  return val !== undefined && val !== null;
}

// eslint-disable-next-line ts/no-unsafe-function-type
export function isFunction(val: unknown): val is Function {
  return typeof val === "function";
}

export function isObject(val: unknown): val is Record<any, any> {
  return val !== null && typeof val === "object";
}

export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}
