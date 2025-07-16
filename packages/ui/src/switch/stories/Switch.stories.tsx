import type { Meta, StoryObj } from "@storybook/react-vite";
import { Cell, Dialog } from "@react-vant-next/ui";
import { useState } from "react";
import { Switch } from "../index";

const meta = {
  title: "Form/Switch",
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: "用于在打开和关闭状态之间进行切换。",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    // 基础
    checked: {
      description: "开关选中状态",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "基础",
      },
      control: "boolean",
    },
    defaultChecked: {
      description: "开关默认选中状态",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "基础",
      },
      control: "boolean",
    },
    disabled: {
      description: "是否为禁用状态",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "状态",
      },
      control: "boolean",
    },
    loading: {
      description: "是否为加载状态",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "状态",
      },
      control: "boolean",
    },
    activeValue: {
      description: "打开时对应的值",
      table: {
        type: { summary: "any" },
        category: "基础",
      },
    },
    inactiveValue: {
      description: "关闭时对应的值",
      table: {
        type: { summary: "any" },
        category: "基础",
      },
    },
    style: {
      description: "自定义样式",
      table: {
        type: { summary: "CSSProperties" },
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
    // 外观
    size: {
      description: "开关尺寸，默认单位为px",
      table: {
        type: { summary: "number | string" },
        category: "外观",
      },
      control: { type: "number" },
    },
    activeColor: {
      description: "打开时的背景色",
      table: {
        type: { summary: "string" },
        category: "外观",
      },
      control: "color",
    },
    inactiveColor: {
      description: "关闭时的背景色",
      table: {
        type: { summary: "string" },
        category: "外观",
      },
      control: "color",
    },
    // 事件
    onChange: {
      description: "开关状态切换时触发",
      table: {
        type: { summary: "function" },
        category: "事件",
      },
      action: "onChange",
    },
    onClick: {
      description: "点击开关时触发",
      table: {
        type: { summary: "function" },
        category: "事件",
      },
      action: "onClick",
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Story = {
  name: "基础用法",
  render: _args => <Switch defaultChecked />,
  parameters: {
    docs: {
      description: {
        story: "通过 `defaultChecked` 默认开关的选中状态，`true` 表示开，`false` 表示关。",
      },
    },
  },
};

// 禁用状态
export const Disabled: Story = {
  name: "禁用状态",
  render: _args => <Switch disabled defaultChecked />,
  parameters: {
    docs: {
      description: {
        story: "通过 `disabled` 属性来禁用开关，禁用状态下开关不可点击。",
      },
    },
  },
};

// 加载状态
export const Loading: Story = {
  name: "加载状态",
  render: _args => <Switch loading defaultChecked />,
  parameters: {
    docs: {
      description: {
        story: "通过 `loading` 属性设置开关为加载状态，加载状态下开关不可点击。",
      },
    },
  },
};

// 自定义大小
export const CustomSize: Story = {
  name: "自定义大小",
  render: _args => <Switch size="24px" defaultChecked />,
  parameters: {
    docs: {
      description: {
        story: "通过 `size` 属性自定义开关的大小。",
      },
    },
  },
};

// 自定义颜色
export const CustomColor: Story = {
  name: "自定义颜色",
  render: _args => <Switch activeColor="#ee0a24" inactiveColor="#dcdee0" defaultChecked />,
  parameters: {
    docs: {
      description: {
        story: "`activeColor` 属性表示打开时的背景色，`inactiveColor` 表示关闭时的背景色。",
      },
    },
  },
};

// 异步控制组件
function AsyncControlExample() {
  const [value, setValue] = useState(false);

  const onChange = async (checked: boolean) => {
    try {
      await Dialog.confirm({
        title: "提醒",
        message: "是否切换开关？",
      });
      setValue(checked);
    }
    catch {
      // 取消dialog
    }
  };

  return <Switch checked={value} onChange={onChange} />;
}

// 异步控制
export const AsyncControl: Story = {
  name: "异步控制",
  render: () => <AsyncControlExample />,
  parameters: {
    docs: {
      description: {
        story: "需要异步控制开关时，可以使用 `checked` 属性和 `onChange` 事件代替 `defaultChecked`，并在事件回调函数中手动处理开关状态。",
      },
      source: {
        language: "tsx",
        code: `import { Dialog, Switch } from "@react-vant-next/ui";
import React, { useState } from "react";

export default () => {
  const [value, setValue] = useState(false);
  const onChange = async (checked) => {
    try {
      await Dialog.confirm({
        title: "提醒",
        message: "是否切换开关？",
      });
      setValue(checked);
    }
    catch {
      // 取消dialog
    }
  };
  return <Switch checked={value} onChange={onChange} />;
};`,
      },
    },
  },
};

// 搭配单元格使用
export const CellUsage: Story = {
  name: "搭配单元格使用",
  render: _args => (
    <Cell
      center
      title="标题"
      rightIcon={(
        <Switch
          size={24}
          defaultChecked
          onChange={checked => console.log(`switch to ${checked}`)}
        />
      )}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: "搭配单元格组件使用，可以实现更多场景。",
      },
    },
  },
};
