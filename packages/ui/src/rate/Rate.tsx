import type { ReactElement } from "react";
import type { RateProps } from "./PropsType";
import { useEventListener, useMergedState, useRefs, useTouch } from "@react-vant-next/hooks";
import { Star, StarO } from "@react-vant-next/icons";
import { addUnit, createNamespace, mergeProps, preventDefault } from "@react-vant-next/utils";
import clsx from "clsx";
import React, { useMemo, useRef } from "react";

type RateStatus = "full" | "half" | "void";

interface RateListItem {
  value: number;
  status: RateStatus;
}

function getRateStatus(
  value: number,
  index: number,
  allowHalf: boolean,
  readOnly: boolean,
): RateListItem {
  if (value >= index) {
    return { status: "full", value: 1 };
  }

  if (value + 0.5 >= index && allowHalf && !readOnly) {
    return { status: "half", value: 0.5 };
  }

  if (value + 1 >= index && allowHalf && readOnly) {
    const cardinal = 10 ** 10;
    return {
      status: "half",
      value: Math.round((value - index + 1) * cardinal) / cardinal,
    };
  }

  return { status: "void", value: 0 };
}

const [bem] = createNamespace("rate");

const Rate: React.FC<RateProps> = ({
  count = 5,
  touchable = true,
  onChange,
  ...p
}) => {
  const props = mergeProps(p, {
    size: 20,
    gutter: 4,
    icon: <Star />,
    voidIcon: <StarO />,
  });
  const [value, setValue] = useMergedState({
    value: props.value,
    defaultValue: props.defaultValue,
  });
  const root = useRef<HTMLDivElement>(null);
  const touch = useTouch();
  const [itemRefs, setItemRefs] = useRefs();

  const untouchable = () => props.readOnly || props.disabled || !touchable;

  const list = useMemo<RateListItem[]>(
    () =>
      Array.from({ length: Number(count) }, (_, i) =>
        getRateStatus(value, i + 1, props.allowHalf, props.readOnly)),
    [count, value, props.allowHalf, props.readOnly],
  );

  const ranges = useRef<{ left: number; score: number }[]>(void 0);

  const updateRanges = () => {
    const rects = itemRefs.map(item => item.getBoundingClientRect());

    ranges.current = [];
    rects.forEach((rect, index) => {
      if (props.allowHalf) {
        ranges.current.push(
          { score: index + 0.5, left: rect.left },
          { score: index + 1, left: rect.left + rect.width / 2 },
        );
      }
      else {
        ranges.current.push({ score: index + 1, left: rect.left });
      }
    });
  };

  const getScoreByPosition = (x: number) => {
    for (let i = ranges.current.length - 1; i > 0; i--) {
      if (x > ranges.current[i].left) {
        return ranges.current[i].score;
      }
    }
    return props.allowHalf ? 0.5 : 1;
  };

  const select = (index: number) => {
    if (!props.disabled && !props.readOnly && index !== value) {
      setValue(index);
      onChange?.(index);
    }
  };

  const onTouchStart = (event: React.TouchEvent) => {
    if (untouchable()) {
      return;
    }

    touch.start(event.nativeEvent);
    updateRanges();
  };

  const onTouchMove = (event) => {
    if (untouchable()) {
      return;
    }

    touch.move(event);

    if (touch.isHorizontal()) {
      const { clientX } = event.touches[0];
      preventDefault(event);
      select(getScoreByPosition(clientX));
    }
  };

  const renderStar = (item: RateListItem, index: number) => {
    const {
      icon,
      size,
      color,
      gutter,
      voidIcon,
      disabled,
      voidColor,
      allowHalf,
      disabledColor,
    } = props;
    const score = index + 1;
    const isFull = item.status === "full";
    const isVoid = item.status === "void";

    const renderHalf = allowHalf && item.value > 0 && item.value < 1;

    let style;
    if (gutter && score !== +count) {
      style = {
        marginRight: addUnit(gutter),
      };
    }

    const onClickItem = (event: React.MouseEvent) => {
      updateRanges();
      select(allowHalf ? getScoreByPosition(event.clientX) : score);
    };

    const renderFullOrVoid = () => {
      const iconElement = (isFull ? icon : voidIcon) as ReactElement;

      return (
        <iconElement.type
          {...iconElement.props as any}
          className={clsx((iconElement.props as any)?.className, bem("icon", { disabled, full: isFull }))}
          style={{
            ...(iconElement.props as any)?.className,
            color: disabled ? disabledColor : isFull ? color : voidColor,
            fontSize: size,
          }}
        />
      );
    };

    const renderInnerIcon = () => {
      const iconElement = (isVoid ? voidIcon : icon) as ReactElement;

      return (
        <iconElement.type
          {...iconElement.props as any}
          className={clsx((iconElement.props as any)?.className, bem("icon", { disabled, full: !isVoid }))}
          style={{
            ...(iconElement.props as any)?.style,
            color: disabled ? disabledColor : isVoid ? voidColor : color,
            fontSize: size,
          }}
        />
      );
    };

    return (
      <div
        key={index}
        ref={setItemRefs(index)}
        role="radio"
        style={style}
        className={clsx(bem("item"))}
        tabIndex={0}
        aria-setsize={Number.parseInt(count?.toString(), 10)}
        aria-posinset={score}
        aria-checked={!isVoid}
        onClick={onClickItem}
      >
        {renderFullOrVoid()}
        {renderHalf && (
          <div
            className={clsx(bem("icon", ["half"]))}
            style={{ width: `${item.value * 100}%` }}
          >
            {renderInnerIcon()}
          </div>
        )}
      </div>
    );
  };

  useEventListener("touchmove", onTouchMove as EventListener, {
    target: root.current,
    depends: [touch.deltaY.current],
  });

  return (
    <div
      ref={root}
      role="radiogroup"
      className={clsx(
        bem({
          readOnly: props.readOnly,
          disabled: props.disabled,
        }),
      )}
      tabIndex={0}
      onTouchStart={onTouchStart}
    >
      {list.map(renderStar)}
    </div>
  );
};

export default Rate;
