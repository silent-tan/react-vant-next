import type { Context } from "react";
import type React from "react";
import type { DropdownMenuProps } from "./PropsType";
import { createContext } from "react";

export interface DropdownMenuState {
  props?: React.PropsWithChildren<DropdownMenuProps>;
  value?: Record<string, number | string>;
  openedMap?: Record<string, boolean>;
  onChange?: (v) => void;
  close?: () => void;
}

const DropdownMenu: Context<DropdownMenuState> = createContext({});

export default DropdownMenu;
