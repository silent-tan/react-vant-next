import { inBrowser } from "@react-vant-next/utils";
import { useEffect, useState } from "react";
import { useEventListener } from "./use-event-listener";

type VisibilityState = "hidden" | "visible";

export function usePageVisibility(): VisibilityState {
  const [visibility, _setVisibility] = useState<VisibilityState>("visible");

  const setVisibility = () => {
    if (inBrowser) {
      _setVisibility(document.hidden ? "hidden" : "visible");
    }
  };

  useEffect(() => {
    setVisibility();
  }, []);

  useEventListener("visibilitychange", setVisibility, { depends: [visibility] });

  return visibility;
}
