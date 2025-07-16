import type { Context } from "react";
import { createContext } from "react";

export interface FloatingBallItemState {
  close?: () => void;
}

const FloatingBallItem: Context<FloatingBallItemState> = createContext({});

export default FloatingBallItem;
