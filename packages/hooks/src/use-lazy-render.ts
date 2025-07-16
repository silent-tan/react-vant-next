import type { ReactNode } from "react";
import type React from "react";
import { useEffect, useState } from "react";

export function useLazyRender(
  show: boolean,
): (render: () => React.ReactNode) => () => ReactNode {
  const [inited, setInited] = useState<boolean>(false);

  useEffect(() => {
    if (show) {
      setInited(show);
    }
  }, [show]);

  return render => () => inited ? render() : null;
}
