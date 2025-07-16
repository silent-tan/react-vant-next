import type { LoadingProps } from "./PropsType";
import { addUnit, createNamespace, getSizeStyle } from "@react-vant-next/utils";
import clsx from "clsx";
import React, { useMemo } from "react";

function SpinIcon({ bem }) {
  return (
    <>
      {Array.from({ length: 12 })
        .fill(null)

        .map((_, index) => (
          <i key={index} className={clsx(bem("line", String(index + 1)))} />
        ))}
    </>
  );
}

function CircularIcon({ bem }) {
  return (
    <svg className={clsx(bem("circular"))} viewBox="25 25 50 50">
      <circle cx="50" cy="50" r="20" fill="none" />
    </svg>
  );
}

function BallIcon({ bem }) {
  return (
    <div className={clsx(bem("ball"))}>
      <div />
      <div />
      <div />
    </div>
  );
}

function Icon(bem) {
  return {
    spinner: <SpinIcon bem={bem} />,
    circular: <CircularIcon bem={bem} />,
    ball: <BallIcon bem={bem} />,
  };
}

const [bem] = createNamespace("loading");

const Loading: React.FC<LoadingProps> = (props) => {
  const {
    className,
    type = "circular",
    vertical,
    color,
    size,
    textColor,
    children,
    textSize,
  } = props;

  const spinnerStyle = useMemo(
    () => ({
      color,
      ...getSizeStyle(size),
    }),
    [color, size],
  );

  const renderText = () => {
    if (children) {
      return (
        <span
          className={clsx(bem("text"))}
          style={{
            fontSize: addUnit(textSize),
            color: textColor ?? color,
          }}
        >
          {children}
        </span>
      );
    }
    return null;
  };

  return (
    <div
      className={clsx(className, bem([type, { vertical }]))}
      style={props.style}
    >
      <span className={clsx(bem("spinner", type))} style={spinnerStyle}>
        {Icon(bem)[type]}
      </span>
      {renderText()}
    </div>
  );
};

export default Loading;
