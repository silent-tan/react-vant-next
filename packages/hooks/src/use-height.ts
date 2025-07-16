import { getRect } from "@react-vant-next/utils";
import { useEffect, useState } from "react";

export function useHeight(element: {
  current: Element | undefined;
}): number {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (element.current) {
      setHeight(getRect(element.current).height);
    }
  }, [element.current]);

  return height;
}
