import type { Context } from "react";
import type { TabbarProps } from "./PropsType";
import { createContext } from "react";

export interface TabbarState {
  parent?: TabbarProps;
}

const TabbarContext: Context<TabbarState> = createContext({});

export default TabbarContext;
