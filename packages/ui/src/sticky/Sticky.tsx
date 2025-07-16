import type { CSSProperties } from "react";
import type { StickyProps } from "./PropsType";
import { useEventListener, useScrollParent, useSetState, useUpdateEffect, useVisibilityChange } from "@react-vant-next/hooks";

import {
  createNamespace,
  extend,
  getRect,
  getScrollTop,
  getZIndexStyle,
  isHidden,
  mergeProps,
  unitToPx,
} from "@react-vant-next/utils";
import clsx from "clsx";

import React, { useCallback, useEffect, useMemo, useRef } from "react";

const [bem] = createNamespace("sticky");

const Sticky: React.FC<StickyProps> = (p) => {
  const props = mergeProps(p, {
    offset: 0,
    position: "top",
  });
  const [state, updateState] = useSetState({
    fixed: false,
    width: 0, // root width
    height: 0, // root height
    transform: 0,
  });

  const root = useRef<HTMLDivElement>(null);
  const scrollParent = useScrollParent(root);
  const emitScrollRef = useRef(props.onScroll);

  useEffect(() => {
    emitScrollRef.current = props.onScroll;
  }, [props.onScroll]);

  const offset = useMemo<number>(
    () => unitToPx(props.offset),
    [props.offset],
  );

  const rootStyle = useMemo<CSSProperties | undefined>(() => {
    if (state.fixed) {
      return {
        width: `${state.width}px`,
        height: `${state.height}px`,
      };
    }
    return null;
  }, [state.fixed, state.height, state.width]);

  const stickyStyle = useMemo<CSSProperties | undefined>(() => {
    if (!state.fixed) {
      return null;
    }

    const style: CSSProperties = extend(getZIndexStyle(props.zIndex), {
      width: `${state.width}px`,
      height: `${state.height}px`,
      [props.position]: `${offset}px`,
    });

    if (state.transform) {
      style.transform = `translate3d(0, ${state.transform}px, 0)`;
    }

    return style;
  }, [
    props.position,
    state.fixed,
    offset,
    state.width,
    state.height,
    state.transform,
    props.zIndex,
  ]);

  const onScroll = useCallback(() => {
    if (!root.current || isHidden(root.current)) {
      return;
    }

    const rootRect = getRect(root.current);
    const scrollTop = getScrollTop(window);

    const newState = {} as typeof state;
    newState.width = rootRect.width;
    newState.height = rootRect.height;

    if (props.position === "top") {
      // The sticky component should be kept inside the container element
      if (props.container) {
        const containerRect = getRect(props.container.current);
        const difference = containerRect.bottom - offset - newState.height;
        newState.fixed = offset > rootRect.top && containerRect.bottom > 0;
        newState.transform = difference < 0 ? difference : 0;
      }
      else {
        newState.fixed = offset > rootRect.top;
      }
    }
    else {
      const { clientHeight } = document.documentElement;
      if (props.container) {
        const containerRect = getRect(props.container.current);
        const difference
          = clientHeight - containerRect.top - offset - newState.height;
        newState.fixed
          = clientHeight - offset < rootRect.bottom
            && clientHeight > containerRect.top;
        newState.transform = difference < 0 ? -difference : 0;
      }
      else {
        newState.fixed = clientHeight - offset < rootRect.bottom;
      }
    }
    updateState(newState);
    emitScrollRef.current?.({
      scrollTop,
      isFixed: newState.fixed,
    });
  }, [offset, props.container, props.position, updateState]);

  useEventListener("scroll", onScroll, {
    target: scrollParent,
    depends: [offset],
  });
  useVisibilityChange(root, onScroll);
  useUpdateEffect(() => {
    props.onChange?.(state.fixed);
  }, [state.fixed]);

  const classes = useMemo(() => {
    return clsx(bem({ fixed: state.fixed }));
  }, [state.fixed]);

  return (
    <div ref={root} style={rootStyle} data-placeholder="sticky">
      <div className={classes} style={stickyStyle}>
        {props.children}
      </div>
    </div>
  );
};

export default Sticky;
