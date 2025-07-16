import type React from "react";
import { isFunction } from "@react-vant-next/utils";
import { useCallback } from "react";
import { useRefState } from "./use-ref-state";
import { useUnmountedRef } from "./use-unmounted-ref";

export function useSetState<T extends object>(initialState: T = {} as T): [
  T,
  (patch: Partial<T> | ((prevState: T) => Partial<T>)) => void,
  React.RefObject<T>,
] {
  const unmountedRef = useUnmountedRef();
  const [state, setState, ref] = useRefState<T>(initialState);

  const setMergeState = useCallback((patch: Partial<T> | ((prevState: T) => Partial<T>)) => {
    if (unmountedRef.current)
      return;
    setState(prevState => ({
      ...prevState,
      ...(isFunction(patch) ? patch(prevState) : patch),
    }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [state, setMergeState, ref];
}
