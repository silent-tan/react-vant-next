import type { FlexProps } from "./PropsType";
import { createNamespace } from "@react-vant-next/utils";
import clsx from "clsx";
import React, { useMemo } from "react";
import FlexContext from "./FlexContext";

const [bem] = createNamespace("flexbox");

const Flex: React.FC<FlexProps> = (props) => {
  const {
    direction,
    wrap = "wrap",
    justify,
    align,
    gutter = 0,
    style,
    className,
    children,
    ...rest
  } = props;
  const getGutter: [number, number] = useMemo(
    () => {
      return Array.isArray(gutter) ? gutter : [gutter, gutter];
    },
    [gutter],
  );

  const rowStyle = {
    ...(getGutter[0]! > 0
      ? {
          marginLeft: getGutter[0]! / -2,
          marginRight: getGutter[0]! / -2,
        }
      : {}),
    ...(getGutter[1]! > 0
      ? {
          marginTop: getGutter[1]! / -2,
          marginBottom: getGutter[1]! / -2,
        }
      : {}),
    ...style,
  };

  const wrapCls = clsx(
    className,
    bem([
      direction,
      wrap,
      justify ? `justify-${justify}` : false,
      align ? `align-${align}` : false,
    ]),
  );

  const contextValue = useMemo(() => ({ gutter: getGutter }), [getGutter]);

  return (
    <FlexContext value={contextValue}>
      <div className={wrapCls} style={rowStyle} {...rest}>
        {children}
      </div>
    </FlexContext>
  );
};

export default Flex;
