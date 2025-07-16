import type { Instance } from "@vant/popperjs";
import type { PopupInstanceType } from "../popup/PropsType";
import type { PopoverAction, PopoverInstance, PopoverProps } from "./PropsType";
import { useClickAway, useLazyEffect, usePropsValue } from "@react-vant-next/hooks";
import { createNamespace, extend, mergeProps, pick } from "@react-vant-next/utils";
import { createPopper, offsetModifier } from "@vant/popperjs";
import cls from "clsx";
import React, {
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { BORDER_BOTTOM } from "../constants";
import Popup from "../popup";

const popupProps = [
  "overlay",
  "duration",
  "overlayStyle",
  "overlayClass",
  "closeOnClickOverlay",
  "teleport",
  "onClosed",
  "onOpened",
  "onClickOverlay",
] as const;

const [bem] = createNamespace("popover");

function Popover({ ref, children, className, ...p }: PopoverProps & { ref?: React.RefObject<PopoverInstance | null> }) {
  const props = mergeProps(p, {
    overlay: false,
    duration: 300,
    closeOnClickAction: true,
    closeOnClickOverlay: true,
    closeOnClickOutside: true,
    offset: [0, 8] as [number, number],
    theme: "light",
    trigger: "click",
    actions: [],
    placement: "bottom",
  });
  const popper = useRef<Instance>(null);
  const wrapperRef = useRef<HTMLElement>(void 0);
  const popoverRef = useRef<PopupInstanceType>(void 0);

  const onVisibleChange = (visible: boolean) => {
    if (visible) {
      props.onOpen?.();
    }
    else {
      props.onClose?.();
    }
  };
  const [visible, updateShow] = usePropsValue({
    value: props.visible,
    defaultValue: false,
    onChange: onVisibleChange,
  });
  const onInternalOpen = () => updateShow(true);
  const onInternalClose = () => updateShow(false);

  const createPopperInstance = () =>
    createPopper(wrapperRef.current, popoverRef.current.popupRef.current, {
      placement: props.placement,
      modifiers: [
        {
          name: "computeStyles",
          options: {
            adaptive: false,
            gpuAcceleration: false,
          },
        },
        extend({}, offsetModifier, {
          options: {
            offset: props.offset,
          },
        }),
      ],
    });

  const updateLocation = () => {
    if (!visible) {
      return;
    }

    if (!popper.current) {
      popper.current = createPopperInstance();
    }
    else {
      popper.current?.setOptions({
        placement: props.placement,
      });
    }
  };

  const onClickWrapper = () => {
    if (props.trigger === "click") {
      updateShow(!visible);
    }
  };

  const onClickAction = (action: PopoverAction, index: number) => {
    if (action.disabled) {
      return;
    }

    props.onSelect?.(action, index);

    if (props.closeOnClickAction) {
      updateShow(false);
    }
  };

  const onClickAway = () => {
    if (
      props.closeOnClickOutside
      && (!props.overlay || props.closeOnClickOverlay)
    ) {
      updateShow(false);
    }
  };

  const renderAction = (action: PopoverAction, index: number) => {
    const { icon, text, color, disabled, className: actionClassname } = action;
    return (
      <div
        // role="menuitem"
        key={index}
        className={cls(
          bem("action", { disabled, "with-icon": icon }),
          actionClassname,
        )}
        style={{ color }}
        onClick={() => onClickAction(action, index)}
      >
        {icon
          ? React.cloneElement<any>(icon as React.ReactElement, {
              className: cls(bem("action-icon")),
            })
          : null}
        <div className={cls(bem("action-text"), BORDER_BOTTOM)}>{text}</div>
      </div>
    );
  };

  useEffect(() => {
    return () => {
      if (popper.current) {
        popper.current?.destroy();
        popper.current = null;
      }
    };
  }, []);

  useLazyEffect(() => {
    updateLocation();
  }, [visible, props.placement]);

  useEffect(() => {
    let popupTarget;
    const prevent = e => e.stopPropagation();
    if (popoverRef.current && popoverRef.current.popupRef.current) {
      popupTarget = popoverRef.current.popupRef.current;
      popupTarget.addEventListener("touchstart", prevent);
    }
    return () => {
      if (popupTarget)
        popupTarget.removeEventListener("touchstart", prevent);
    };
  }, [popoverRef.current]);

  useImperativeHandle(ref, () => ({
    show: () => {
      if (visible) {
        updateShow(false);
        setTimeout(() => updateShow(true), 0);
        return;
      }
      updateShow(true);
    },
    hide: () => updateShow(false),
  }));

  useClickAway(wrapperRef, onClickAway, "touchstart");

  return (
    <>
      <span
        ref={wrapperRef}
        className={cls(bem("wrapper"))}
        onClick={onClickWrapper}
      >
        {props.reference}
      </span>
      <Popup
        ref={popoverRef}
        visible={visible}
        className={cls(className, bem([props.theme]))}
        position=""
        transition="rv-zoom"
        lockScroll={false}
        onOpen={onInternalOpen}
        onClose={onInternalClose}
        {...pick(props, popupProps)}
      >
        <div className={cls(bem("arrow"))} />
        <div role="menu" className={cls(bem("content"))}>
          {children || props.actions.map(renderAction)}
        </div>
      </Popup>
    </>
  );
}

export default Popover;
