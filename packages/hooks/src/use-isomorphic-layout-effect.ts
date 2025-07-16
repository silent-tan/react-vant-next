import { inBrowser } from "@react-vant-next/utils";
import React from "react";
import { createUpdateEffect } from "./create-update-effect";

export const useIsomorphicLayoutEffect = inBrowser
  ? React.useLayoutEffect
  : React.useEffect;

export const useIsomorphicUpdateLayoutEffect = createUpdateEffect(
  useIsomorphicLayoutEffect,
);
