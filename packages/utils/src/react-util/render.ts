import type { Root } from "react-dom/client";

import { createRoot } from "react-dom/client";

// 移植自rc-util: https://github.com/react-component/util/blob/master/src/React/render.ts

const MARK = "__react_vant_next_root__";

// ========================== Render ==========================
// ========================== Render ==========================
type ContainerType = (Element | DocumentFragment) & {
  [MARK]?: Root;
};

export function render(node: React.ReactElement, container: ContainerType) {
  const root = container[MARK] || createRoot(container);

  root.render(node);

  container[MARK] = root;
}

// ========================== Unmount =========================
export async function unmount(container: ContainerType) {
  // Delay to unmount to avoid React 18 sync warning
  return Promise.resolve().then(() => {
    container[MARK]?.unmount();

    delete container[MARK];
  });
}
