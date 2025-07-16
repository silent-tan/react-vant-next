import { Calendar, ConfigProvider } from "@react-vant-next/ui";
import React from "react";
import locale from "./enUs";
import "./style.less";

export default () => {
  return (
    <div className="demo-config-prodiver">
      <ConfigProvider locale={locale}>
        <Calendar style={{ height: 420 }} poppable={false} />
      </ConfigProvider>
    </div>
  );
};
