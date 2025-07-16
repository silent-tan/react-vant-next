import type { WithDisplayNameReactElement } from "@react-vant-next/utils";

import type {
  CheckboxGroupInstance,
  CheckboxGroupProps,
  CheckboxGroupToggleAllOptions,
  CheckboxInstance,
} from "./PropsType";
import { useMergedState, useRefs } from "@react-vant-next/hooks";
import { createNamespace } from "@react-vant-next/utils";

import clsx from "clsx";
import React, { useImperativeHandle } from "react";
import CheckBoxContext from "./CheckboxContext";

const [bem] = createNamespace("checkbox-group");

function CheckBoxGroup({ ref, ...props }: CheckboxGroupProps & { ref?: React.RefObject<CheckboxGroupInstance | null> }) {
  const [childrenRefs, setChildrenRefs] = useRefs();
  const [checked, setChecked] = useMergedState({
    value: props.value,
    defaultValue: props.defaultValue,
  });

  const toggleAll = (options: CheckboxGroupToggleAllOptions = {}) => {
    if (typeof options === "boolean") {
      options = { checked: options };
    }

    const { checked: isChecked, skipDisabled } = options;

    const checkedChildren = childrenRefs.filter((item: CheckboxInstance) => {
      if (!item.props.bindGroup) {
        return false;
      }
      if (item.props.disabled && skipDisabled) {
        return item.checked;
      }
      return isChecked ?? !item.checked;
    });

    const names = checkedChildren.map(item => item.props.name);
    setChecked(names);
    props.onChange(names);
  };

  const toggle = (name: Array<string | number>) => {
    setChecked(name);
    props.onChange?.(name);
  };

  useImperativeHandle(ref, () => ({
    toggleAll,
  }));

  return (
    <CheckBoxContext
      value={{ parent: { props }, toggle, checked: checked || [] }}
    >
      <div className={clsx(props.className, bem([props.direction]))}>
        {React.Children.toArray(props.children)
          .filter(Boolean)
          .map((child: WithDisplayNameReactElement, index: number) => {
            if (child.type?.displayName !== "Checkbox")
              return child;
            return React.cloneElement<any>(child, { ref: setChildrenRefs(index) });
          })}
      </div>
    </CheckBoxContext>
  );
}

export default CheckBoxGroup;
