import type { StepsItemProps } from "./PropsType";
import { createNamespace, devWarning } from "@react-vant-next/utils";
import cls from "clsx";
import React, { useMemo } from "react";
import { BORDER } from "../constants";

const [bem] = createNamespace("step");

const StepsItem: React.FC<StepsItemProps> = ({ children, ...props }) => {
  const { index, parent: parentProps } = props;

  if (!parentProps) {
    if (process.env.NODE_ENV !== "production") {
      devWarning("Steps", "<Steps.Step> must be a child component of <Steps>.");
    }
  }

  const getStatus = () => {
    const active = +parentProps.active;
    if (index < active) {
      return "finish";
    }
    return index === active ? "process" : "waiting";
  };

  const isActive = () => getStatus() === "process";

  const lineStyle = useMemo(
    () => ({
      background:
        getStatus() === "finish"
          ? parentProps.activeColor
          : parentProps.inactiveColor,
    }),
    [
      index,
      parentProps.active,
      parentProps.activeColor,
      parentProps.inactiveColor,
    ],
  );

  const titleStyle = useMemo(() => {
    if (isActive()) {
      return { color: parentProps.activeColor };
    }
    if (!getStatus()) {
      return { color: parentProps.inactiveColor };
    }
    return {};
  }, [
    index,
    parentProps.active,
    parentProps.activeColor,
    parentProps.inactiveColor,
  ]);

  const onClickStep = () => {
    if (parentProps.onClickStep)
      parentProps.onClickStep(index);
  };

  const renderCircle = () => {
    const { activeColor } = parentProps;

    const finishIcon = props.finishIcon ?? parentProps.finishIcon;
    const activeIcon = props.activeIcon ?? parentProps.activeIcon;
    const inactiveIcon = props.inactiveIcon ?? parentProps.inactiveIcon;

    if (isActive()) {
      if (activeIcon) {
        return React.cloneElement<any>(activeIcon as React.ReactElement, {
          className: cls(bem("icon", "active")),
          color: activeColor,
          style: {
            color: activeColor,
          },
        });
      }
    }

    if (getStatus() === "finish" && finishIcon) {
      return React.cloneElement<any>(finishIcon as React.ReactElement, {
        className: cls(bem("icon", "finish")),
        color: activeColor,
        style: {
          color: activeColor,
        },
      });
    }

    if (inactiveIcon) {
      return React.cloneElement<any>(inactiveIcon as React.ReactElement, {
        className: cls(bem("icon")),
        color: activeColor,
        style: {
          color: activeColor,
        },
      });
    }

    return <i className={cls(bem("circle"))} style={lineStyle} />;
  };

  const status = getStatus();

  return (
    <div
      style={props.style}
      className={cls(
        props.className,
        BORDER,
        bem([parentProps.direction, { [status]: status }]),
      )}
    >
      <div
        className={cls(bem("title", { active: isActive() }))}
        style={titleStyle}
        onClick={onClickStep}
      >
        {children}
      </div>
      <div className={cls(bem("circle-container"))} onClick={onClickStep}>
        {renderCircle()}
      </div>
      <div className={cls(bem("line"))} style={lineStyle} />
    </div>
  );
};

export default StepsItem;
