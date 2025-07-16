import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";

import { Button, Calendar, Field, Rate, Slider } from "../../index";
import ConfigProvider from "../ConfigProvider";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  id: "basic-config-provider",
  title: "Basic/ConfigProvider",
  component: ConfigProvider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "为组件提供统一的全局化配置。",
      },
    },
  },
  argTypes: {
    style: {
      control: {
        type: "object",
      },
      table: {
        type: { summary: "CSSProperties" },
        category: "基础",
      },
    },
    className: {
      control: {
        type: "text",
      },
      table: {
        type: { summary: "string" },
        category: "基础",
      },
    },
    tag: {
      table: {
        type: {
          summary: "keyof HTMLElementTagNameMap | string",
        },
        defaultValue: { summary: "'div'" },
        category: "基础",
      },
      control: {
        type: "text",
      },
      description: "指定渲染的dom标签",
      type: {
        required: false,
        name: "other",
        value: "keyof HTMLElementTagNameMap | string",
      },
    },
    children: {
      control: {
        type: "text",
      },
      table: {
        type: { summary: "React.ReactNode" },
        required: false,
        category: "基础",
      },
      description: "子元素",
    },
    themeVars: {
      control: { type: "object" },
      description: "主题变量",
      table: {
        type: { summary: "Record<string, string | number>" },
        required: false,
        category: "主题",
      },
    },
    locale: {
      control: { type: "object" },
      description: "国际化配置",
      table: {
        type: { summary: "Locale" },
        required: false,
        category: "国际化",
      },
    },
  },
} satisfies Meta<typeof ConfigProvider>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Default: Story = {
  name: "基础用法",
  render: (args) => {
    const DemoComponent = () => {
      const [rate, updateRate] = useState(4);
      const [slider, updateSlider] = useState(50);
      return (
        <div style={{ padding: "16px" }}>
          <Field label="评分">
            <Rate value={rate} onChange={updateRate} />
          </Field>
          <Field label="滑块">
            <Slider value={slider} onChange={updateSlider} />
          </Field>
          <div style={{ margin: "16px 0" }}>
            <Button block round type="primary">
              提交
            </Button>
          </div>
        </div>
      );
    };

    return (
      <ConfigProvider {...args}>
        <DemoComponent />
      </ConfigProvider>
    );
  },
  args: {
    themeVars: {
      rateIconFullColor: "#ffcc56",
      sliderBarHeight: "4px",
      sliderButtonWidth: "20px",
      sliderButtonHeight: "20px",
      sliderActiveBackgroundColor: "#951fff",
      buttonPrimaryBorderColor: "#951fff",
      buttonPrimaryBackgroundColor: "#951fff",
    },
  },
  parameters: {
    docs: {
      description: {
        story: "ConfigProvider 通过 `themeVars` 属性可以定制主题变量，影响全局组件样式。",
      },
    },
  },
};

// 国际化
export const Locale: Story = {
  name: "国际化",
  args: {
    locale: {
      name: "Name",
      tel: "Phone",
      save: "Save",
      confirm: "Confirm",
      cancel: "Cancel",
      delete: "Delete",
      loading: "Loading...",
      noCoupon: "No coupons",
      nameEmpty: "Please fill in the name",
      telInvalid: "Malformed phone number",
      vanCalendar: {
        end: "End",
        start: "Start",
        confirm: "Confirm",
        title: "Calendar",
        startEnd: "Start/End",
        weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        monthTitle: (year: number, month: number) => `${year}/${month}`,
        rangePrompt: (maxRange: number) => `Choose no more than ${maxRange} days`,
      },
    },
  },
  render: (args) => {
    return (
      <ConfigProvider locale={args.locale}>
        <div style={{ padding: "16px" }}>
          <Calendar style={{ height: 420 }} poppable={false} />
        </div>
      </ConfigProvider>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "ConfigProvider 通过 `locale` 属性可以配置国际化文案。",
      },
    },
  },
};
