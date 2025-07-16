import type { RadioProps, RadioValueType } from "./PropsType";

import { createNamespace } from "@react-vant-next/utils";
import React, { use, useMemo } from "react";

import Checker from "../checkbox/Checker";
import RadioContext from "./RadioContext";

const [bem] = createNamespace("radio");

function Radio<T = RadioValueType>(props: RadioProps<T>) {
  const { parent, ...context } = use(RadioContext);

  const checked = useMemo(() => {
    return parent ? context.checked === props.name : props.checked;
  }, [context.checked]);

  const toggle = () => {
    const emitter = parent ? context.toggle : () => {};
    emitter(props.name);
  };

  return (
    <Checker
      {...props}
      bem={bem}
      role="radio"
      parent={parent}
      checked={checked}
      onToggle={toggle}
    />
  );
}

export default Radio;
