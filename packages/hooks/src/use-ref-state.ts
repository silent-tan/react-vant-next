import type { Dispatch, RefObject, SetStateAction } from "react";
import { isFunction } from "@react-vant-next/utils";
import { useCallback, useRef, useState } from "react";

type StateType<T> = T | (() => T);

export function useRefState<T>(
  initialState: StateType<T>,
): [T, Dispatch<SetStateAction<T>>, RefObject<T>] {
  const [state, setState] = useState<T>(initialState);
  const ref = useRef(state);
  const setRafState = useCallback(
    (patch) => {
      setState((prevState) => {
        return (ref.current = isFunction(patch) ? patch(prevState) : patch);
      });
    },
    [state],
  );
  return [state, setRafState, ref];
}
