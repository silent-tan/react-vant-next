import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import IconRate from "../demo/icon";
import { Rate } from "../index";

const meta = {
  id: "form-rate",
  title: "Form/Rate",
  component: Rate,
  parameters: {
    docs: {
      description: {
        component: "评分组件，用于对事物进行评级操作。",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    // 基础
    style: {
      description: "自定义样式",
      table: {
        type: { summary: "React.CSSProperties" },
        category: "基础",
      },
    },
    className: {
      description: "自定义类名",
      table: {
        type: { summary: "string" },
        category: "基础",
      },
    },
    children: {
      description: "自定义内容",
      table: {
        type: { summary: "React.ReactNode" },
        category: "基础",
      },
    },
    // 状态
    value: {
      description: "当前分值",
      table: {
        type: { summary: "number" },
        category: "状态",
      },
      control: { type: "number", min: 0, max: 5, step: 0.5 },
    },
    defaultValue: {
      description: "默认分值",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
        category: "状态",
      },
      control: { type: "number", min: 0, max: 5, step: 0.5 },
    },
    allowHalf: {
      description: "是否允许半选",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "状态",
      },
      control: "boolean",
    },
    readOnly: {
      description: "是否为只读状态",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "状态",
      },
      control: "boolean",
    },
    disabled: {
      description: "是否禁用评分",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "状态",
      },
      control: "boolean",
    },
    touchable: {
      description: "是否可以通过滑动手势选择评分",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "状态",
      },
      control: "boolean",
    },
    // 外观
    count: {
      description: "图标总数",
      table: {
        type: { summary: "number | string" },
        defaultValue: { summary: "5" },
        category: "外观",
      },
      control: { type: "number", min: 1, max: 10, step: 1 },
    },
    size: {
      description: "图标大小，默认单位为px",
      table: {
        type: { summary: "number | string" },
        defaultValue: { summary: "20" },
        category: "外观",
      },
      control: { type: "number", min: 10, max: 50, step: 1 },
    },
    gutter: {
      description: "图标间距，默认单位为px",
      table: {
        type: { summary: "number | string" },
        defaultValue: { summary: "4" },
        category: "外观",
      },
      control: { type: "number", min: 0, max: 20, step: 1 },
    },
    color: {
      description: "选中时的颜色",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "#ee0a24" },
        category: "外观",
      },
      control: "color",
    },
    voidColor: {
      description: "未选中时的颜色",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "#c8c9cc" },
        category: "外观",
      },
      control: "color",
    },
    disabledColor: {
      description: "禁用时的颜色",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "#c8c9cc" },
        category: "外观",
      },
      control: "color",
    },
    icon: {
      description: "选中时的图标或图片链接",
      table: {
        type: { summary: "ReactNode" },
        category: "外观",
      },
    },
    voidIcon: {
      description: "未选中时的图标或图片链接",
      table: {
        type: { summary: "ReactNode" },
        category: "外观",
      },
    },
    // 事件
    onChange: {
      description: "当前分值变化时触发的事件",
      table: {
        type: { summary: "(value: number) => void" },
        category: "事件",
      },
      action: "onChange",
    },
  },
} satisfies Meta<typeof Rate>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Default: Story = {
  name: "基础用法",
  render: () => {
    const [value, setValue] = useState(3);
    return <Rate value={value} onChange={setValue} />;
  },
  parameters: {
    docs: {
      description: {
        story: "评分组件可以选择 1-5 个星，通过 `value` 属性控制当前分值。",
      },
      source: {
        language: "tsx",
        code: `
import { Rate } from "@react-vant-next/ui";
import React, { useState } from "react";

export default () => {
  const [value, setValue] = useState(3);
  return <Rate value={value} onChange={setValue} />;
};`,
      },
    },
  },
};

// 自定义图标
export const CustomIcon: Story = {
  name: "自定义图标",
  render: () => <IconRate />,
  parameters: {
    docs: {
      description: {
        story: "通过 `icon` 属性自定义选中时的图标，`voidIcon` 属性自定义未选中时的图标。",
      },
      source: {
        language: "tsx",
        code: `
import { useState } from "react";
import { Rate } from "@react-vant-next/ui";
import { Like, LikeO } from "@react-vant-next/icons";

function CustomIconExample() {
  const [value, setValue] = useState(3);

  return (
    <Rate
      value={value}
      onChange={setValue}
      icon={<Like />}
      voidIcon={<LikeO />}
    />
  );
}`,
      },
    },
  },
};

// 自定义样式
export const CustomStyle: Story = {
  name: "自定义样式",
  render: () => {
    const [value, setValue] = useState(3);
    return <Rate size="32" color="#3f45ff" voidColor="#111" value={value} onChange={setValue} />;
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `color` 属性设置选中时的颜色，`voidColor` 设置未选中时的颜色，`size` 设置图标大小，`gutter` 设置图标间距，`count` 设置图标总数。",
      },
      source: {
        language: "tsx",
        code: `
import { Rate } from "@react-vant-next/ui";
import React, { useState } from "react";

export default () => {
  const [value, setValue] = useState(3);
  return <Rate size="32" color="#3f45ff" voidColor="#111" value={value} onChange={setValue} />;
};`,
      },
    },
  },
};

// 半星
export const HalfStar: Story = {
  name: "半星",
  render: () => {
    const [value, setValue] = useState(3.5);
    return <Rate allowHalf value={value} onChange={setValue} />;
  },
  parameters: {
    docs: {
      description: {
        story: "设置 `allowHalf` 属性后可以选中半星。",
      },
      source: {
        language: "tsx",
        code: `
import { Rate } from "@react-vant-next/ui";
import React, { useState } from "react";

export default () => {
  const [value, setValue] = useState(3.5);
  return <Rate allowHalf value={value} onChange={setValue} />;
};`,
      },
    },
  },
};

// 自定义数量
export const CustomCount: Story = {
  name: "自定义数量",
  render: () => {
    const [value, setValue] = useState(4);
    return <Rate value={value} onChange={setValue} count={8} />;
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `count` 属性设置评分总数。",
      },
      source: {
        language: "tsx",
        code: `
import { Rate } from "@react-vant-next/ui";
import React, { useState } from "react";

export default () => {
  const [value, setValue] = useState(4);
  return <Rate value={value} onChange={setValue} count={8} />;
};`,
      },
    },
  },
};

// 禁用状态
export const Disabled: Story = {
  name: "禁用状态",
  render: () => {
    const [value, setValue] = useState(4);
    return <Rate value={value} onChange={setValue} disabled />;
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `disabled` 属性来禁用评分。",
      },
      source: {
        language: "tsx",
        code: `
import { Rate } from "@react-vant-next/ui";
import React, { useState } from "react";

export default () => {
  const [value, setValue] = useState(4);
  return <Rate value={value} onChange={setValue} disabled />;
};`,
      },
    },
  },
};

// 只读状态显示小数
export const ReadOnly: Story = {
  name: "只读状态显示小数",
  render: () => {
    const [value, setValue] = useState(3.3);
    return <Rate value={value} onChange={setValue} readOnly allowHalf />;
  },
  parameters: {
    docs: {
      description: {
        story: "设置 `readOnly` 和 `allowHalf` 属性后，Rate 组件可以展示任意小数结果。",
      },
      source: {
        language: "tsx",
        code: `
import { Rate } from "@react-vant-next/ui";
import React, { useState } from "react";

export default () => {
  const [value, setValue] = useState(3.3);
  return <Rate value={value} onChange={setValue} readOnly allowHalf />;
};`,
      },
    },
  },
};
