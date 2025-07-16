import type { CountDownInstance, CountDownProps } from "./PropsType";
import { useCountDown } from "@react-vant-next/hooks";
import { createNamespace, mergeProps, noop } from "@react-vant-next/utils";
import cls from "clsx";
import React, {
  useEffect,
  useImperativeHandle,
  useMemo,
} from "react";
import { parseFormat } from "./utils";

const [bem] = createNamespace("count-down");

function CountDown({ ref, ...p }: CountDownProps & { ref?: React.RefObject<CountDownInstance | null> }) {
  const props = mergeProps(p, {
    autoStart: true,
    time: 0,
    format: "HH:mm:ss",
    onChange: noop,
    onFinish: noop,
  });
  const { start, pause, reset, current } = useCountDown({
    time: +props.time,
    millisecond: props.millisecond,
    onChange: props.onChange,
    onFinish: props.onFinish,
  });

  const timeText = useMemo(() => parseFormat(props.format, current), [current]);

  const resetTime = () => {
    reset(+props.time);

    if (props.autoStart) {
      start();
    }
  };

  useEffect(() => {
    resetTime();

    return () => {
      pause();
    };
  }, [props.time]);

  useImperativeHandle(ref, () => ({
    start,
    pause,
    reset: resetTime,
  }));

  return (
    <div className={cls(props.className, bem())} style={props.style}>
      {props.children ? props.children(current) : timeText}
    </div>
  );
}

export default CountDown;
