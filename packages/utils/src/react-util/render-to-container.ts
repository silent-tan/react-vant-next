import type { ReactElement } from "react";

import { createPortal } from "react-dom";

import { canUseDom } from "../dom/can-use-dom";
import { resolveContainer } from "../dom/get-container";

export type GetContainer = HTMLElement | (() => HTMLElement) | null;

export function renderToContainer(
  getContainer: GetContainer,
  node: ReactElement,
): ReactElement {
  if (canUseDom() && getContainer) {
    const container = resolveContainer(getContainer);
    return createPortal(node, container);
  }
  return node;
}
