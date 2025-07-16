import { debounce, devWarning, isFunction } from "@react-vant-next/utils";
import { useMemo } from "react";
import { useLatest } from "./use-latest";
import { useUnmount } from "./use-unmount";

export interface DebounceOptions {
  wait?: number;
  leading?: boolean;
  trailing?: boolean;
  maxWait?: number;
}

type noop = (...args: any) => any;

export function useDebounceFn<T extends noop>(fn: T, options?: DebounceOptions) {
  if (process.env.NODE_ENV === "development") {
    if (!isFunction(fn)) {
      devWarning(
        "useDebounceFn",
        `expected parameter is a function, got ${typeof fn}`,
      );
    }
  }

  const fnRef = useLatest(fn);

  const wait = options?.wait ?? 1000;

  const debounced = useMemo(
    () =>
      debounce(
        (...args: Parameters<T>): ReturnType<T> => {
          return fnRef.current(...(args as any));
        },
        wait,
        options,
      ),
    [],
  );

  useUnmount(() => {
    debounced.cancel();
  });

  return {
    run: debounced,
    cancel: debounced.cancel,
    flush: debounced.flush,
  };
}
