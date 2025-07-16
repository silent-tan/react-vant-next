import type { TabbarProps } from "./PropsType";
import { useHeight, useMergedState } from "@react-vant-next/hooks";
import { createNamespace, getZIndexStyle, mergeProps } from "@react-vant-next/utils";
import clsx from "clsx";
import React, { useRef } from "react";
import { BORDER_TOP_BOTTOM } from "../constants";
import TabbarContext from "./TabbarContext";

const [bem] = createNamespace("tabbar");

const Tabbar: React.FC<TabbarProps> = (p) => {
  const props = mergeProps(p, {
    fixed: true,
    border: true,
    defaultValue: 0,
  });
  const [current, setCurrent] = useMergedState({
    value: props.value,
    defaultValue: props.defaultValue,
  });
  const root = useRef<HTMLDivElement>(null);
  const height = useHeight(root);

  const renderPlaceholder = (renderContent) => {
    return (
      <div className={clsx(bem("placeholder"))} style={{ height }}>
        {renderContent()}
      </div>
    );
  };

  // enable safe-area-inset-bottom by default when fixed
  const enableSafeArea = () => props.safeAreaInsetBottom ?? props.fixed;

  const setActive = (active: number | string) => {
    if (active !== props.value) {
      props.onChange?.(active);
      setCurrent(active);
    }
  };

  const renderTabbar = () => {
    const { fixed, zIndex, border } = props;
    return (
      <TabbarContext value={{ parent: { ...props, value: current } }}>
        <div
          ref={root}
          style={{ ...props.style, ...getZIndexStyle(zIndex) }}
          className={clsx(props.className, bem({ fixed }), {
            [BORDER_TOP_BOTTOM]: border,
            "rv-safe-area-bottom": enableSafeArea(),
          })}
        >
          {React.Children.toArray(props.children)
            .filter(Boolean)
            .map((child: React.ReactElement, index) =>
              React.cloneElement<any>(child, {
                setActive,
                index,
              }),
            )}
        </div>
      </TabbarContext>
    );
  };

  if (props.fixed && props.placeholder) {
    return renderPlaceholder(renderTabbar);
  }
  return renderTabbar();
};

export default Tabbar;
