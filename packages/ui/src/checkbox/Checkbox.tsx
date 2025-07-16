import type { CheckboxInstance, CheckboxProps } from "./PropsType";
import { useMergedState } from "@react-vant-next/hooks";
import { createNamespace, mergeProps } from "@react-vant-next/utils";
import React, {
  use,
  useImperativeHandle,
  useMemo,
} from "react";
import CheckBoxContext from "./CheckboxContext";
import Checker from "./Checker";

const [bem] = createNamespace("checkbox");

function CheckBox({ ref, ...p }: CheckboxProps & { ref?: React.RefObject<CheckboxInstance | null> }) {
  const props = mergeProps(p, {
    bindGroup: true,
  });
  const { parent, ...context } = use(CheckBoxContext);
  const [checked, setChecked] = useMergedState<boolean>({
    value: props.checked,
    defaultValue: props.defaultChecked,
  });

  const setParentValue = (isChecked: boolean) => {
    const { name } = props;
    const { max } = parent.props;
    const value = context.checked.slice();
    if (isChecked) {
      const overlimit = max && Number(value.length) >= Number(max);

      if (!overlimit && !value.includes(name)) {
        value.push(name);

        if (props.bindGroup) {
          context.toggle(value);
        }
      }
    }
    else {
      const index = value.indexOf(name);

      if (index !== -1) {
        value.splice(index, 1);

        if (props.bindGroup) {
          context.toggle(value);
        }
      }
    }
  };

  const isChecked = useMemo(() => {
    if (parent && props.bindGroup) {
      return context.checked.includes(props.name as string);
    }
    return checked;
  }, [context.checked, checked]);

  const toggle = (newValue = !isChecked) => {
    if (parent && props.bindGroup) {
      setParentValue(newValue);
    }
    else {
      setChecked(newValue);
      props.onChange?.(newValue);
    }
  };

  useImperativeHandle(ref, () => ({
    toggle,
    checked: isChecked,
    props,
  }));

  return (
    <Checker
      {...props}
      bem={bem}
      role="checkbox"
      parent={parent}
      checked={isChecked}
      className={props.className}
      bindGroup={props.bindGroup}
      onToggle={toggle}
    />
  );
}

CheckBox.displayName = "Checkbox";

export default CheckBox;
