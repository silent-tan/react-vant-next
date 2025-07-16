import { isDef, isObject } from "../validate/is";

type ObjectIndex = Record<string, any>;

function assignKey(to: ObjectIndex, from: ObjectIndex, key: string) {
  const val = from[key];

  if (!isDef(val)) {
    return;
  }

  if (!Object.prototype.hasOwnProperty.call(to, key) || !isObject(val)) {
    to[key] = val;
  }
  else {
    to[key] = deepAssign(new Object(to[key]), from[key]);
  }
}

export function deepAssign(to: ObjectIndex, from: ObjectIndex): ObjectIndex {
  Object.keys(from).forEach((key) => {
    assignKey(to, from, key);
  });

  return to;
}
