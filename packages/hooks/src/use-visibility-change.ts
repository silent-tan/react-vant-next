import type React from "react";
import { inBrowser } from "@react-vant-next/utils";
import { useEffect, useState } from "react";

export function useVisibilityChange(
  target: React.RefObject<Element | undefined>,
  onChange?: (visible: boolean) => void,
) {
  const [state, setState] = useState<boolean>();
  useEffect(() => {
    // compatibility: https://caniuse.com/#feat=intersectionobserver
    if (!(!inBrowser || !window.IntersectionObserver)) {
      const observer = new IntersectionObserver(
        (entries) => {
          // visibility changed
          onChange?.(entries[0].intersectionRatio > 0);
          for (const entry of entries) {
            setState(entry.isIntersecting);
          }
        },
        { root: document.body },
      );

      const observe = () => {
        if (target.current) {
          observer.observe(target.current);
        }
      };

      const unobserve = () => {
        if (target.current) {
          observer.unobserve(target.current);
        }
      };

      observe();
      return unobserve;
    }
  }, [target.current]);

  return [state] as const;
}
