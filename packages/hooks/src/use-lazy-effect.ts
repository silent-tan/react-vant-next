import { useEffect, useState } from "react";

export const useLazyEffect: typeof useEffect = (effect, deps) => {
  const [c, setC] = useState(0);

  useEffect(() => {
    setC(v => v + 1);
  }, deps);

  useEffect(() => {
    return effect();
  }, [c]);
};
