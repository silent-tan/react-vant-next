import type { CSSProperties } from "react";
import type { SwitchProps } from "./PropsType";
import { useMergedState } from "@react-vant-next/hooks";

import { addUnit, createNamespace, mergeProps } from "@react-vant-next/utils";
import clsx from "clsx";

import React, { useMemo } from "react";
import Loading from "../loading";

const [bem] = createNamespace("switch");

const Swtich: React.FC<SwitchProps> = (p) => {
  const props = mergeProps(p, {
    activeValue: true,
    inactiveValue: false,
  });
  const { loading, disabled, size, activeColor, inactiveColor } = props;

  const [checked, setChecked] = useMergedState({
    value: props.checked,
    defaultValue: props.defaultChecked,
  });

  const isChecked = useMemo(
    () => checked === props.activeValue,
    [checked, props.activeValue],
  );

  const style: CSSProperties = {
    fontSize: addUnit(size),
    backgroundColor: isChecked ? activeColor : inactiveColor,
    ...props.style,
  };

  const onClick = (e) => {
    if (!props.disabled) {
      props.onClick?.(e);
    }
    if (!props.disabled && !props.loading) {
      const newValue = isChecked ? props.inactiveValue : props.activeValue;

      setChecked(newValue);
      props.onChange?.(newValue);
    }
  };

  const renderLoading = () => {
    if (props.loading) {
      const color = isChecked ? props.activeColor : props.inactiveColor;
      return <Loading className={clsx(bem("loading"))} color={color} />;
    }
    return null;
  };

  return (
    <div
      role="switch"
      tabIndex={0}
      className={clsx(
        props.className,
        bem({
          on: isChecked,
          loading,
          disabled,
        }),
      )}
      style={style}
      aria-checked={isChecked}
      onClick={onClick}
    >
      <div className={clsx(bem("node"))}>{renderLoading()}</div>
    </div>
  );
};

export default Swtich;
