import type { PageIndicatorProps } from "./PropsType";
import { createNamespace } from "@react-vant-next/utils";
import clsx from "clsx";
import { memo, useMemo } from "react";

const [bem] = createNamespace("indicator");

const SwiperPagIndicator = memo<PageIndicatorProps>(
  ({ vertical, ...props }) => {
    const { total, current } = props;

    const dots = useMemo(() => {
      const dots: React.ReactElement[] = [];
      for (let i = 0; i < total; i++) {
        dots.push(
          <div
            key={i}
            className={clsx(
              bem("dot", {
                active: current === i,
              }),
            )}
          />,
        );
      }
      return dots;
    }, [total, current]);

    return (
      <div
        className={clsx(props.className, bem({ vertical }))}
        style={props.style}
      >
        {dots}
      </div>
    );
  },
);

export default SwiperPagIndicator;
