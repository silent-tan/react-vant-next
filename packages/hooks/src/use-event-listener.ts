import type {
  BasicTarget,
  TargetElement,
} from "@react-vant-next/utils";
import { getTargetElement, inBrowser } from "@react-vant-next/utils";
import { useEffect } from "react";

// https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener#使用_passive_改善的滚屏性能
// eslint-disable-next-line import/no-mutable-exports
export let supportsPassive = false;

if (inBrowser) {
  try {
    const opts = {};
    Object.defineProperty(opts, "passive", {
      get() {
        supportsPassive = true;
      },
    });
    window.addEventListener("test-passive", null, opts);
  }
  catch {}
}

type Target = BasicTarget<TargetElement>;

export interface UseEventListenerOptions {
  target?: Target;
  capture?: boolean;
  passive?: boolean;
  depends?: Array<unknown>;
}

export function useEventListener(
  type: string,
  listener: EventListener,
  options: UseEventListenerOptions = {},
): void {
  if (!inBrowser) {
    return;
  }
  const {
    target = window,
    passive = false,
    capture = false,
    depends = [],
  } = options;
  let attached: boolean;

  const add = () => {
    const element = getTargetElement(target);

    if (element && !attached) {
      element.addEventListener(
        type,
        listener,
        supportsPassive ? { capture, passive } : capture,
      );
      attached = true;
    }
  };

  const remove = () => {
    const element = getTargetElement(target);

    if (element && attached) {
      element.removeEventListener(type, listener, capture);
      attached = false;
    }
  };

  // https://stackoverflow.com/questions/55265255/react-usestate-hook-event-handler-using-initial-state
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    add();
    return () => remove();
  }, [target, ...depends]);
}
