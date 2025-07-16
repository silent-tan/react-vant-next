import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toast } from "@react-vant-next/ui";
import { useState } from "react";
import { Search } from "../index";

const meta: Meta<typeof Search> = {
  id: "biz-search",
  title: "Biz/Search",
  component: Search,
  parameters: {
    docs: {
      description: {
        component: "用于搜索场景的输入框组件。Search 组件提供了 `onSearch` 和 `onCancel` 事件，可以满足各种搜索场景需求。",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    // 基础
    style: {
      description: "自定义样式",
      table: {
        category: "基础",
        type: { summary: "CSSProperties" },
      },
    },
    className: {
      description: "自定义类名",
      table: {
        category: "基础",
        type: { summary: "string" },
      },
    },
    // 基础
    value: {
      description: "当前输入的值",
      table: {
        category: "基础",
        type: { summary: "string" },
      },
      control: "text",
    },
    placeholder: {
      description: "占位提示文字",
      table: {
        category: "基础",
        type: { summary: "string" },
      },
      control: "text",
    },
    maxLength: {
      description: "输入的最大字符数",
      table: {
        category: "基础",
        type: { summary: "number | string" },
      },
      control: "number",
    },

    // 状态
    disabled: {
      description: "是否禁用输入框",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    readOnly: {
      description: "是否将输入框设为只读",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    error: {
      description: "是否将输入内容标红",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    clearable: {
      description: "是否启用清除图标",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    clearTrigger: {
      description: "显示清除图标的时机",
      table: {
        category: "状态",
        type: { summary: "string" },
        defaultValue: { summary: "focus" },
      },
      control: "select",
      options: ["always", "focus"],
    },

    // 外观
    label: {
      description: "搜索框左侧文本",
      table: {
        category: "外观",
        type: { summary: "ReactNode" },
      },
      control: "text",
    },
    shape: {
      description: "搜索框形状",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "square" },
      },
      control: "select",
      options: ["square", "round"],
    },
    background: {
      description: "搜索框外部背景色",
      table: {
        category: "外观",
        type: { summary: "string" },
      },
      control: "color",
    },
    leftIcon: {
      description: "左侧图标",
      table: {
        category: "外观",
        type: { summary: "ReactNode" },
        defaultValue: { summary: "search" },
      },
    },
    rightIcon: {
      description: "右侧图标",
      table: {
        category: "外观",
        type: { summary: "ReactNode" },
      },
    },
    clearIcon: {
      description: "清除图标",
      table: {
        category: "外观",
        type: { summary: "ReactNode" },
        defaultValue: { summary: "clear" },
      },
    },
    align: {
      description: "输入框内容对齐方式",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "left" },
      },
      control: "select",
      options: ["left", "center", "right"],
    },

    // 操作相关
    showAction: {
      description: "是否在搜索框右侧显示取消按钮",
      table: {
        category: "操作相关",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    actionText: {
      description: "取消按钮文字",
      table: {
        category: "操作相关",
        type: { summary: "ReactNode" },
        defaultValue: { summary: "取消" },
      },
      control: "text",
    },
    action: {
      description: "自定义右侧操作内容",
      table: {
        category: "操作相关",
        type: { summary: "ReactNode" },
      },
    },

    // 事件
    onChange: {
      description: "输入框内容变化时触发",
      table: {
        category: "事件",
        type: { summary: "(value: string) => void" },
      },
    },
    onSearch: {
      description: "确定搜索时触发",
      table: {
        category: "事件",
        type: { summary: "(value: string) => void" },
      },
    },
    onFocus: {
      description: "输入框获得焦点时触发",
      table: {
        category: "事件",
        type: { summary: "(event: Event) => void" },
      },
    },
    onBlur: {
      description: "输入框失去焦点时触发",
      table: {
        category: "事件",
        type: { summary: "(event: Event) => void" },
      },
    },
    onClickInput: {
      description: "点击输入区域时触发",
      table: {
        category: "事件",
        type: { summary: "(event: MouseEvent) => void" },
      },
    },
    onClear: {
      description: "点击清除按钮后触发",
      table: {
        category: "事件",
        type: { summary: "(event: MouseEvent) => void" },
      },
    },
    onCancel: {
      description: "点击取消按钮时触发",
      table: {
        category: "事件",
        type: { summary: "() => void" },
      },
    },
  },
} satisfies Meta<typeof Search>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Story = {
  name: "基础用法",
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Search value={value} onChange={setValue} clearable placeholder="请输入搜索关键词" />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "`value` 用于控制搜索框中的文字，`background` 可以自定义搜索框外部背景色。",
      },
      source: {
        language: "tsx",
        code: `
import { Search } from "@react-vant-next/ui";
import React, { useState } from "react";

export default () => {
  const [value, setValue] = useState("");
  return <Search value={value} onChange={setValue} clearable placeholder="请输入搜索关键词" />;
};`,
      },
    },
  },
};

// 事件监听
export const EventListener: Story = {
  name: "事件监听",
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Search
        value={value}
        onChange={setValue}
        placeholder="请输入搜索关键词"
        showAction
        onSearch={(val) => {
          console.log("搜索", val);
        }}
        onCancel={() => {
          console.log("取消");
          setValue("");
        }}
        onClear={() => {
          console.log("清除");
          setValue("");
        }}
        onClickInput={() => {
          console.log("点击输入区域时触发");
        }}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Search 组件提供了 `onSearch` 和 `onCancel` 事件，`onSearch` 事件在点击键盘上的搜索/回车按钮后触发，`onCancel` 事件在点击搜索框右侧取消按钮时触发。",
      },
      source: {
        language: "tsx",
        code: `
import { Search, Toast } from "@react-vant-next/ui";
import React, { useState } from "react";

export default () => {
  const [value, setValue] = useState("");
  return (
    <Search
      value={value}
      onChange={setValue}
      placeholder="请输入搜索关键词"
      showAction
      onSearch={(val) => {
        Toast(val);
        setValue(val);
      }}
      onCancel={() => {
        Toast("取消");
        setValue("");
      }}
      onClear={() => {
        Toast("清除");
        setValue("");
      }}
      onClickInput={() => {
        Toast("点击输入区域时触发\t");
      }}
    />
  );
};`,
      },
    },
  },
};

// 搜索框内容对齐
export const Align: Story = {
  name: "搜索框内容对齐",
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Search value={value} onChange={setValue} align="center" placeholder="请输入搜索关键词" />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `align` 属性设置搜索框内容的对齐方式，可选值为 `center`、`right`。",
      },
      source: {
        language: "tsx",
        code: `
import { Search } from "@react-vant-next/ui";
import React, { useState } from "react";

export default () => {
  const [value, setValue] = useState("");
  return (
    <Search value={value} onChange={setValue} align="center" placeholder="请输入搜索关键词" />
  );
};`,
      },
    },
  },
};

// 禁用搜索框
export const Disabled: Story = {
  name: "禁用搜索框",
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Search disabled value={value} onChange={setValue} placeholder="请输入搜索关键词" />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `disabled` 属性禁用搜索框。",
      },
      source: {
        language: "tsx",
        code: `
import { Search } from "@react-vant-next/ui";
import React, { useState } from "react";

export default () => {
  const [value, setValue] = useState("");
  return <Search disabled value={value} onChange={setValue} placeholder="请输入搜索关键词" />;
};`,
      },
    },
  },
};

// 自定义背景色
export const CustomStyle: Story = {
  name: "自定义背景色",
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Search
        value={value}
        onChange={setValue}
        placeholder="请输入搜索关键词"
        background="#4fc08d"
        shape="round"
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `background` 属性可以设置搜索框外部的背景色，通过 `shape` 属性设置搜索框的形状，可选值为 `round`。",
      },
      source: {
        language: "tsx",
        code: `
import { Search } from "@react-vant-next/ui";
import React, { useState } from "react";

export default () => {
  const [value, setValue] = useState("");
  return (
    <Search
      shape="round"
      background="#4fc08d"
      value={value}
      onChange={setValue}
      placeholder="请输入搜索关键词"
    />
  );
};`,
      },
    },
  },
};

// 自定义按钮
export const CustomButton: Story = {
  name: "自定义按钮",
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Search
        showAction
        label="地址"
        actionText={<div onClick={() => Toast.info(value)}>搜索</div>}
        value={value}
        onChange={setValue}
        placeholder="请输入搜索关键词"
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "使用 `actionText` 属性可以自定义右侧按钮的内容。使用后，`onCancel` 事件将不再触发。",
      },
      source: {
        language: "tsx",
        code: `
import { Search, Toast } from "@react-vant-next/ui";
import React, { useState } from "react";

export default () => {
  const [value, setValue] = useState("");
  return (
    <Search
      showAction
      label="地址"
      actionText={<div onClick={() => Toast.info(value)}>搜索</div>}
      value={value}
      onChange={setValue}
      placeholder="请输入搜索关键词"
    />
  );
};`,
      },
    },
  },
};
