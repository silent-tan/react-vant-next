import type { Context } from "react";
import type { CheckboxGroupProps } from "./PropsType";
import { createContext } from "react";

export interface CheckboxContextState {
  parent?: { props: CheckboxGroupProps };
  toggle?: (names: Array<string | number>) => void;
  checked?: (string | number)[];
}

const CheckboxContext: Context<CheckboxContextState> = createContext({});

export default CheckboxContext;
