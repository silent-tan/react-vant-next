import type { RadioGroupProps, RadioValueType } from "./PropsType";
import type { RadioContextState } from "./RadioContext";
import { useMergedState } from "@react-vant-next/hooks";
import { createNamespace } from "@react-vant-next/utils";
import clsx from "clsx";
import RadioContext from "./RadioContext";

const [bem] = createNamespace("radio-group");

function RadioGroup<T = RadioValueType>(props: RadioGroupProps<T>) {
  const [checked, setChecked] = useMergedState({
    value: props.value,
    defaultValue: props.defaultValue,
  });

  const toggle = (name: T) => {
    setChecked(name);
    props.onChange?.(name);
  };

  return (
    <RadioContext
      value={{ parent: { props }, toggle, checked } as RadioContextState<any>}
    >
      <div
        className={clsx(props.className, bem([props.direction]))}
        style={props.style}
        role="radiogroup"
      >
        {props.children}
      </div>
    </RadioContext>
  );
}

export default RadioGroup;
