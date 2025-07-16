import { DatetimePicker } from "@react-vant-next/ui";
import React from "react";

export default () => {
  return (
    <DatetimePicker
      type="year-month"
      minDate={new Date(2020, 0, 1)}
      maxDate={new Date(2025, 10, 1)}
      defaultValue={new Date()}
      formatter={(type: string, val: string) => {
        if (type === "year") {
          return `${val}年`;
        }
        if (type === "month") {
          return `${val}月`;
        }
        return val;
      }}
    />
  );
};
