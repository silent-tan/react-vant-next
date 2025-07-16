import type { FlexItemProps, FlexType } from "./PropsType";

import { createNamespace } from "@react-vant-next/utils";
import clsx from "clsx";
import React, { useMemo } from "react";
import { useFlexContext } from "./useFlexContext";

const [bem] = createNamespace("flexitem");

function parseFlex(_flex: FlexType): string {
  if (typeof _flex === "number") {
    return `${_flex} ${_flex} auto`;
  }

  // eslint-disable-next-line regexp/no-unused-capturing-group
  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(_flex)) {
    return `0 0 ${_flex}`;
  }

  return _flex;
}

const FlexItem: React.FC<FlexItemProps> = (props) => {
  const { style, className, span, children, flex, ...others } = props;

  const classes = clsx(bem([span?.toString()]), className);
  const { gutter } = useFlexContext();

  const styles = useMemo(() => {
    let mergedStyle: React.CSSProperties = { ...style };
    if (gutter) {
      const [hGutter, vGutter] = gutter ?? [0, 0];
      mergedStyle = {
        ...(hGutter > 0
          ? {
              paddingLeft: hGutter / 2,
              paddingRight: hGutter / 2,
            }
          : {}),
        ...(vGutter > 0
          ? {
              paddingTop: vGutter / 2,
              paddingBottom: vGutter / 2,
            }
          : {}),
        ...mergedStyle,
      };
    }
    if (flex) {
      mergedStyle.flex = parseFlex(flex);
    }

    return mergedStyle;
  }, [gutter, flex, style]);

  return (
    <div {...others} style={styles} className={classes}>
      {children}
    </div>
  );
};

export default FlexItem;
