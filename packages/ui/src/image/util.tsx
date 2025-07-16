import type { BEM } from "@react-vant-next/utils";
import { Photo } from "@react-vant-next/icons";
import clsx from "clsx";

export function getLazyImagePlaceholder(bem: BEM): React.ReactNode {
  return (
    <div className={clsx(bem("loading"))}>
      <Photo className={clsx(bem("loading-icon"))} />
    </div>
  );
}
