import type {
  DatePickerProps,
  DateTimePickerInstance,
  DateTimePickerProps,
  TimePickerProps,
} from "./PropsType";
import { createNamespace } from "@react-vant-next/utils";

import clsx from "clsx";
import React from "react";

import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";

const [bem] = createNamespace("datetime-picker");

function DateTimePicker({ ref, ...props }: DateTimePickerProps & { ref?: React.RefObject<DateTimePickerInstance | null> }) {
  const isTimePicker = props.type === "time";

  if (isTimePicker) {
    return (
      <TimePicker
        ref={ref}
        className={clsx(bem())}
        {...(props as TimePickerProps)}
      />
    );
  }
  return (
    <DatePicker
      ref={ref}
      className={clsx(bem())}
      {...(props as DatePickerProps)}
    />
  );
}

export default DateTimePicker;
export { DateTimePicker };
export type { DateTimePickerProps } from "./PropsType";
