import type { CSSProperties } from "react";
import type { OverlayProps } from "./PropsType";
import { useEventListener } from "@react-vant-next/hooks";
import {
  createNamespace,
  isDef,
  mergeProps,
  preventDefault,
  withStopPropagation,
} from "@react-vant-next/utils";
import clsx from "clsx";
import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";

const [bem] = createNamespace("overlay");

const Overlay: React.FC<OverlayProps> = (p) => {
  const nodeRef = useRef(null);
  const props = mergeProps(p, {
    stopPropagation: ["click"],
    lockScroll: true,
    duration: 300,
  });
  const { visible, duration } = props;

  const preventTouchMove = (event: TouchEvent) => {
    if (!props.lockScroll)
      return;
    preventDefault(event, true);
  };

  const renderOverlay = () => {
    const style: CSSProperties = {
      zIndex: props.zIndex !== undefined ? +props.zIndex : undefined,
      touchAction: props.lockScroll && "none",
      ...props.style,
      ...props.customStyle,
    };

    if (isDef(duration)) {
      style.animationDuration = `${duration}ms`;
    }

    return withStopPropagation(
      props.stopPropagation,
      <div
        ref={nodeRef}
        style={style}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            props.onClick?.(e);
          }
        }}
        className={clsx(bem(), props.className)}
      >
        {props.children}
      </div>,
    );
  };

  useEventListener("touchmove", preventTouchMove, { target: nodeRef });

  return (
    <CSSTransition
      nodeRef={nodeRef}
      mountOnEnter
      unmountOnExit
      in={visible}
      timeout={duration}
      classNames="rv-fade"
    >
      {renderOverlay()}
    </CSSTransition>
  );
};

export default Overlay;
