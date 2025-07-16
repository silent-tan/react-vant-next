import { DatetimePicker } from "@react-vant-next/ui";
import React from "react";

export default () => {
  return (
    <DatetimePicker
      defaultValue="12:00"
      type="time"
      minHour="10"
      maxHour="20"
    />
  );
};
