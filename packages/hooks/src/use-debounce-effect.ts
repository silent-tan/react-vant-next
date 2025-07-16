import type { DependencyList, EffectCallback } from "react";
import type { DebounceOptions } from "./use-debounce-fn";
import { useEffect, useState } from "react";
import { useDebounceFn } from "./use-debounce-fn";
import { useUpdateEffect } from "./use-update-effect";

export function useDebounceEffect(
  effect: EffectCallback,
  deps?: DependencyList,
  options?: DebounceOptions,
) {
  const [flag, setFlag] = useState({});

  const { run } = useDebounceFn(() => {
    setFlag({});
  }, options);

  useEffect(() => {
    return run();
  }, deps);

  useUpdateEffect(effect, [flag]);
}
