import { inBrowser } from "../dom/in-browser";
import { isDef } from "../validate/is";
import { isNumeric } from "../validate/number";

export function addUnit(value?: string | number): string | undefined {
  if (!isDef(value)) {
    return undefined;
  }

  value = String(value);
  return isNumeric(value) ? `${value}px` : value;
}

export function getSizeStyle(originSize?: string | number) {
  if (isDef(originSize)) {
    const size = addUnit(originSize);
    return {
      width: size,
      height: size,
    };
  }
  return {};
}

// cache
let rootFontSize: number;

function getRootFontSize() {
  if (!rootFontSize) {
    const doc = document.documentElement;
    const fontSize = doc.style.fontSize || window.getComputedStyle(doc).fontSize;

    rootFontSize = Number.parseFloat(fontSize);
  }

  return rootFontSize;
}

function convertRem(value: string) {
  value = value.replace(/rem/g, "");
  return +value * getRootFontSize();
}

function convertVw(value: string) {
  value = value.replace(/vw/g, "");
  return (+value * window.innerWidth) / 100;
}

function convertVh(value: string) {
  value = value.replace(/vh/g, "");
  return (+value * window.innerHeight) / 100;
}

export function unitToPx(value: string | number): number {
  if (typeof value === "number") {
    return value;
  }

  if (inBrowser) {
    if (value.includes("rem")) {
      return convertRem(value);
    }
    if (value.includes("vw")) {
      return convertVw(value);
    }
    if (value.includes("vh")) {
      return convertVh(value);
    }
  }

  return Number.parseFloat(value);
}

export function kebabCase(str: string): string {
  return str
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase()
    .replace(/^-/, "");
}
