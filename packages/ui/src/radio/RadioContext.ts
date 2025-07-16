import type { Context } from "react";
import type { RadioGroupProps, RadioValueType } from "./PropsType";
import { createContext } from "react";

export interface RadioContextState<T = RadioValueType> {
  parent?: { props: RadioGroupProps<T> };
  toggle?: (name: T) => void;
  checked?: T;
}

const RadioContext: Context<RadioContextState> = createContext({});

export default RadioContext;
