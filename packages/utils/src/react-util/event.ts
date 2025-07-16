import type { ReactElement } from "react";

import { cloneElement } from "react";

export function stopReactPropagation(event: any): void {
  event.stopPropagation();
}

export function preventReactDefault(
  event: React.TouchEvent | Event,
  isStopPropagation?: boolean,
): void {
  if (typeof event.cancelable !== "boolean" || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    stopReactPropagation(event as Event);
  }
}

export type PropagationEvent = "click";

const eventToPropRecord: Record<PropagationEvent, string> = {
  click: "onClick",
};

// https://github.com/ant-design/ant-design-mobile/blob/master/src/utils/with-stop-propagation.tsx
export function withStopPropagation(events: string[], element: ReactElement) {
  const props: Record<string, any> = { ...element.props as object };
  for (const key of events) {
    const prop = eventToPropRecord[key];
    props[prop] = function (e: Event) {
      e.stopPropagation();
      element.props[prop]?.(e);
    };
  }
  return cloneElement(element, props);
}
