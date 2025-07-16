import type { ReactElement } from "react";
import type { CollapseProps } from "./PropsType";
import { useUpdateEffect } from "@react-vant-next/hooks";

import { createNamespace, devWarning, mergeProps } from "@react-vant-next/utils";

import clsx from "clsx";
import React, { useRef, useState } from "react";
import { BORDER_TOP_BOTTOM } from "../constants";
import CollapseContext from "./CollapseContext";

function validateModelValue(
  modelValue: string | number | Array<string | number>,
  accordion: boolean,
) {
  if (accordion && Array.isArray(modelValue)) {
    devWarning("Collapse", "\"value\" should not be Array in accordion mode");
    return false;
  }
  if (!accordion && !Array.isArray(modelValue)) {
    devWarning("Collapse", "\"value\" should be Array in non-accordion mode");
    return false;
  }
  return true;
}

const [bem] = createNamespace("collapse");

const Collapse: React.FC<CollapseProps> = (p) => {
  const props = mergeProps(p, {
    border: true,
  });
  const { accordion } = props;
  const { initExpanded = accordion ? "" : [] } = props;
  const innerEffect = useRef(false);
  const [expanded, setExpanded] = useState<
    string | number | Array<number | string>
  >(() => props.value ?? initExpanded);
  const updateName = (name: number | string | Array<number | string>) => {
    innerEffect.current = true;
    setExpanded(name);
    props.onChange?.(name);
  };

  const toggle = (name, isExpanded: boolean) => {
    if (accordion) {
      if (name === expanded) {
        name = "";
      }
    }
    else if (isExpanded) {
      name = (expanded as []).concat(name);
    }
    else {
      name = (expanded as []).filter(activeName => activeName !== name);
    }
    updateName(name);
  };

  const isExpanded = (name: string | number): boolean => {
    if (

      process.env.NODE_ENV !== "production"
      && !validateModelValue(expanded, accordion)
    ) {
      return false;
    }

    return accordion
      ? expanded === name
      : (expanded as Array<number | string>).includes(name);
  };

  useUpdateEffect(() => {
    if (innerEffect.current) {
      innerEffect.current = false;
      return;
    }
    if (props.value === undefined)
      return;
    setExpanded(props.value);
  }, [props.value]);

  return (
    <CollapseContext value={{ isExpanded, toggle }}>
      <div
        style={props.style}
        ref={props.nativeRef}
        className={clsx(bem(), props.className, {
          [BORDER_TOP_BOTTOM]: props.border,
        })}
      >
        {React.Children.toArray(props.children)
          .filter(Boolean)
          .map((child: ReactElement, index: number) =>
            React.cloneElement<any>(child, {
              index,
            }),
          )}
      </div>
    </CollapseContext>
  );
};

export default Collapse;
