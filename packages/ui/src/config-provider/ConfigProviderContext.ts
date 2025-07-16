import type { Context } from "react";
import type { ConfigProviderProps } from "./PropsType";
import { createContext } from "react";
import { zhCN as locale } from "../locale";

export const defaultPrefixCls = "rv";
export const defaultIconPrefixCls = "van-icon";

export type ConfigProviderContextState = Pick<ConfigProviderProps, "locale">;

export const INITIAL_STATE = {
  locale,
} as ConfigProviderContextState;

const ConfigProvider: Context<ConfigProviderContextState>
  = createContext(INITIAL_STATE);

export default ConfigProvider;
