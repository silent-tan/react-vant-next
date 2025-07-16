import type { BasicTarget } from "@react-vant-next/utils";
import { getTargetElement, inBrowser } from "@react-vant-next/utils";
import { useEffect, useState } from "react";

type ScrollElement = Element | HTMLElement | Window;

const overflowScrollReg = /scroll|auto/i;
const defaultRoot = inBrowser ? window : undefined;

function isElement(node: Element) {
  const ELEMENT_NODE_TYPE = 1;
  return (
    node.tagName !== "HTML"
    && node.tagName !== "BODY"
    && node.nodeType === ELEMENT_NODE_TYPE
  );
}

export function getScrollParent(
  el: Element,
  root: ScrollElement = defaultRoot,
): ScrollElement {
  if (root === undefined) {
    root = window;
  }
  let node = el;
  while (node && node !== root && isElement(node)) {
    const { overflowY } = window.getComputedStyle(node);
    if (overflowScrollReg.test(overflowY)) {
      if (node.tagName !== "BODY") {
        return node;
      }

      const htmlOverflowY = window.getComputedStyle(
        node.parentNode as Element,
      ).overflowY;
      if (overflowScrollReg.test(htmlOverflowY)) {
        return node;
      }
    }
    node = node.parentNode as Element;
  }
  return root;
}

export function useScrollParent(
  el: BasicTarget<HTMLElement | Element | Window | Document>,
): Element | Window {
  const [scrollParent, setScrollParent] = useState<Element | Window>();

  useEffect(() => {
    if (el) {
      const element = getTargetElement(el) as Element;
      setScrollParent(getScrollParent(element));
    }
  }, [el]);

  return scrollParent;
}
