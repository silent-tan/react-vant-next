import type {
  CSSProperties,
} from "react";
import type { IndexAnchorInstance, IndexAnchorProps } from "./PropsType";
import { useHeight, useSetState } from "@react-vant-next/hooks";

import { createNamespace, devWarning, getRect as getElementRect, getRootScrollTop, getScrollTop } from "@react-vant-next/utils";
import clsx from "clsx";

import React, {
  use,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";

import { BORDER_BOTTOM, COMPONENT_TYPE_KEY } from "../constants";
import IndexBarContext from "./IndexBarContext";

export const INDEX_ANCHORE_KEY = Symbol("index-anchor");

const [bem] = createNamespace("index-anchor");

const IndexAnchor: React.FC<IndexAnchorProps & {
  ref?: React.RefObject<IndexAnchorInstance | null>;
}> = ({ ref, ...props }) => {
  const root = useRef(void 0);
  const height = useHeight(root);

  const context = use(IndexBarContext);

  if (!context) {
    if (process.env.NODE_ENV !== "production") {
      devWarning(
        "IndexBar",
        "<IndexAnchor> must be a child component of <IndexBar>.",
      );
    }
  }
  const [state, updateState] = useSetState({
    top: 0,
    left: 0,
    rect: { top: 0, height: 0 },
    width: 0,
    active: false,
  });
  const [rect, setRect] = useState({ top: 0, height: 0 });

  const isSticky = useCallback(
    () => state.active && context.sticky,
    [state.active, context.sticky],
  );

  const anchorStyle = useMemo(() => {
    const { zIndex, highlightColor } = context;

    if (isSticky()) {
      return {
        zIndex: `${zIndex}`,
        left: state.left ? `${state.left}px` : null,
        width: state.width ? `${state.width}px` : null,
        transform: state.top ? `translate3d(0, ${state.top}px, 0)` : null,
        color: highlightColor,
      };
    }
    return null;
  }, [isSticky(), state.width, state.left, state.top]);

  const getRect = (scrollParent: Element | Window, scrollParentRect) => {
    const rootRect = getElementRect(root.current);
    const newState = { ...state } as typeof state;
    newState.rect.height = rootRect.height;
    if (scrollParent === window || scrollParent === document.body) {
      newState.rect.top = rootRect.top + getRootScrollTop();
    }
    else {
      newState.rect.top
        = rootRect.top + getScrollTop(scrollParent) - scrollParentRect.top;
    }
    updateState(newState);
    return newState.rect;
  };

  useEffect(() => {
    setRect({ top: rect.top, height });
  }, [height]);

  useImperativeHandle(ref, () => ({
    getRect,
    state,
    updateState,
    root,
  }));

  const sticky = isSticky();
  return (
    <div
      className={props.className}
      ref={root}
      style={{
        ...props.style,
        height: sticky ? `${state.rect.height}px` : undefined,
      }}
    >
      <div
        style={anchorStyle as CSSProperties}
        className={clsx(bem({ sticky }), { [BORDER_BOTTOM]: sticky })}
      >
        {props.children || props.index}
      </div>
    </div>
  );
};

IndexAnchor[COMPONENT_TYPE_KEY] = INDEX_ANCHORE_KEY;

export default IndexAnchor;
