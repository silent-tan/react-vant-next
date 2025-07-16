import type { ListInstance, ListProps } from "./PropsType";
import { mergeProps } from "@react-vant-next/utils";
import clsx from "clsx";
import React from "react";
import LoadMore from "./LoadMore";

function List({ ref, ...p }: ListProps & { ref?: React.RefObject<ListInstance | null> }) {
  const props = mergeProps(p, {
    offset: 300,
  });
  return (
    <LoadMore
      ref={ref}
      className={clsx(props.className)}
      style={props.style}
      onLoad={props.onLoad}
      threshold={props.offset}
      finished={props.finished}
      finishedText={props.finishedText}
      loadingText={props.loadingText}
      errorText={props.errorText}
    >
      {props.children}
    </LoadMore>
  );
}

export default List;
