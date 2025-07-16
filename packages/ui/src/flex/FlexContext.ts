import type { Context } from "react";
import { createContext } from "react";

export interface FlexContextState {
  gutter?: [number, number];
}

const FlexContext: Context<FlexContextState> = createContext({});

export default FlexContext;
