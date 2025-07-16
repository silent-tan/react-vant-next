import type { TabPaneProps } from "./PropsType";
import { createNamespace } from "@react-vant-next/utils";

import clsx from "clsx";
import React, { use, useMemo, useState } from "react";
import TabsContext from "./TabsContext";

const [bem] = createNamespace("tab");

function TabPane({ ref, ...props }: TabPaneProps & { ref?: React.RefObject<HTMLDivElement | null> }) {
  const parent = use(TabsContext);

  const { animated, swipeable, scrollspy, lazyRender, lazyRenderPlaceholder }
    = parent.props;
  const { index } = props;

  const name = useMemo(() => props.name ?? index, [index, props.name]);

  const active = useMemo(
    () => name === parent.currentName,
    [name, parent.currentName],
  );

  const [inited, setInited] = useState(() => active);

  const init = () => {
    setInited(true);
  };

  const isActive = useMemo(() => {
    if (active && !inited) {
      init();
    }
    return active;
  }, [active, inited]);

  const show = scrollspy || isActive;

  const shouldRender = inited || scrollspy || !lazyRender;
  const Content = shouldRender ? props.children : lazyRenderPlaceholder;

  if (animated || swipeable) {
    return (
      <div ref={ref} role="tabpanel" className={clsx(bem("pane"))}>
        {Content}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      style={{ display: show ? "block" : "none" }}
      role="tabpanel"
      className={clsx(bem("pane"))}
    >
      {Content}
    </div>
  );
}

export default TabPane;
