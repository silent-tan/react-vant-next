import type {
  FC,
} from "react";
import type { PopupInstanceType, PopupProps } from "./PropsType";
import { useEventListener, useIsomorphicLayoutEffect, useLockScroll } from "@react-vant-next/hooks";
import { Cross } from "@react-vant-next/icons";

import { callInterceptor, createNamespace, isDef, mergeProps, renderToContainer, withStopPropagation } from "@react-vant-next/utils";
import clsx from "clsx";
import React, {
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";

import { CSSTransition } from "react-transition-group";
import Overlay from "../overlay";
import PopupContext from "./PopupContext";

let globalZIndex = 2000;

const [bem] = createNamespace("popup");

const defaultTeleport = () => document.body;

const Popup: FC<PopupProps & { ref?: React.RefObject<PopupInstanceType | null> }> = ({ ref, ...p }) => {
  const props = mergeProps(p, {
    duration: 300,
    overlay: true,
    lockScroll: true,
    position: "center",
    closeIcon: <Cross />,
    closeIconPosition: "top-right",
    closeOnClickOverlay: true,
    stopPropagation: ["click"],
    teleport: defaultTeleport,
  });
  const {
    round,
    closeable,
    title,
    description,
    children,
    duration,
    closeIcon,
    position,
  } = props;
  const opened = useRef(false);
  const zIndex = useRef<number>(props.zIndex ?? globalZIndex);
  const popupRef = useRef<HTMLDivElement>(void 0);
  const [visible, setVisible] = useState(props.visible);
  const [animatedVisible, setAnimatedVisible] = useState(visible);

  const style = useMemo(() => {
    const initStyle = {
      zIndex: zIndex.current,
      ...props.style,
    };

    if (isDef(props.duration)) {
      const key
        = props.position === "center" ? "animationDuration" : "transitionDuration";
      initStyle[key] = `${props.duration}ms`;
    }
    return initStyle;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [zIndex.current, props.position, props.style, props.duration]);

  const open = () => {
    if (props.zIndex !== undefined) {
      zIndex.current = +props.zIndex;
    }
    else {
      zIndex.current = globalZIndex++;
    }

    opened.current = true;
    props.onOpen?.();
  };

  const close = () => {
    callInterceptor({
      interceptor: props.beforeClose,
      args: ["close"],
      done: () => {
        opened.current = false;
        props.onClose?.();
      },
    });
  };

  const onClickOverlay = (event: React.MouseEvent) => {
    props.onClickOverlay?.(event);

    if (props.closeOnClickOverlay) {
      close();
    }
  };

  const renderOverlay = () => {
    if (props.overlay) {
      return (
        <Overlay
          visible={visible}
          className={props.overlayClass}
          customStyle={props.overlayStyle}
          zIndex={zIndex.current}
          duration={duration}
          onClick={onClickOverlay}
        />
      );
    }
    return null;
  };

  const onClickCloseIcon = (e: React.MouseEvent) => {
    if (props.onClickCloseIcon) {
      props.onClickCloseIcon(e);
    }
    close();
  };

  const renderCloseIcon = () => {
    if (closeable) {
      const { closeIconPosition } = props;
      if (closeIcon) {
        return (
          <div
            className={clsx(bem("close-icon", closeIconPosition))}
            onClick={onClickCloseIcon}
          >
            {closeIcon}
          </div>
        );
      }
      return null;
    }
    return null;
  };

  const renderTitle = () => {
    if (title) {
      return <div className={clsx(bem("title"))}>{title}</div>;
    }
    return null;
  };

  const renderDescription = () => {
    if (description) {
      return <div className={clsx(bem("description"))}>{description}</div>;
    }
    return null;
  };

  const renderPopup = () => {
    const { safeAreaInsetBottom } = props;
    return withStopPropagation(
      props.stopPropagation,
      <div
        ref={popupRef}
        style={{
          ...style,
          display: !visible && !animatedVisible ? "none" : undefined,
        }}
        className={clsx(
          bem({
            round,
            [position]: position,
          }),
          { "rv-safe-area-bottom": safeAreaInsetBottom },
          props.className,
        )}
        onClick={props.onClick}
      >
        {renderTitle()}
        {renderDescription()}
        {children}
        {renderCloseIcon()}
      </div>,
    );
  };

  const renderTransition = () => {
    const { transition, destroyOnClose, forceRender } = props;
    const name
      = position === "center" ? "rv-fade" : `rv-popup-slide-${position}`;

    return (
      <CSSTransition
        in={visible}
        /**
         * https://github.com/reactjs/react-transition-group/pull/559
         */
        nodeRef={popupRef}
        timeout={duration}
        classNames={transition || name}
        mountOnEnter={!forceRender}
        unmountOnExit={destroyOnClose}
        onEnter={open}
        onEntered={props.onOpened}
        onExited={() => {
          setAnimatedVisible(false);
          props.onClosed?.();
        }}
      >
        {renderPopup()}
      </CSSTransition>
    );
  };

  useEventListener("popstate", () => {
    if (props.closeOnPopstate) {
      close();
    }
  });

  useIsomorphicLayoutEffect(() => {
    if (visible) {
      setAnimatedVisible(true);
    }
  }, [visible]);

  useIsomorphicLayoutEffect(() => {
    setVisible(props.visible);
  }, [props.visible]);

  useLockScroll(popupRef, visible && props.lockScroll);

  useImperativeHandle(ref, () => ({
    popupRef,
  }));

  return renderToContainer(
    props.teleport,
    <PopupContext value={{ visible }}>
      {renderOverlay()}
      {renderTransition()}
    </PopupContext>,
  );
};

export default Popup;
