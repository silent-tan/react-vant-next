import type { Context } from "react";
import type React from "react";
import type { TabsProps } from "./PropsType";
import { createContext } from "react";

export interface TabsContextState {
  props?: React.PropsWithChildren<TabsProps>;
  currentName?: string | number;
  scrollIntoView?: (immediate?: boolean) => void;
}

const TabsContext: Context<TabsContextState> = createContext({});

export default TabsContext;
