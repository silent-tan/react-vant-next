import type React from "react";

export function getZIndexStyle(zIndex?: string | number) {
  const style: React.CSSProperties = {};
  if (zIndex !== undefined) {
    style.zIndex = +zIndex;
  }
  return style;
}
