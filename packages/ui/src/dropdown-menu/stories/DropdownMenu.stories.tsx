import type { Meta, StoryObj } from "@storybook/react-vite";
import BaseDemo from "../demo/base";
import CustomColorExample from "../demo/color";
import CustomContentDemo from "../demo/custom";
import DirectionUpExample from "../demo/direction";
import DisabledExample from "../demo/disabled";

import DropdownMenu from "../DropdownMenu";

const meta = {
  id: "components-dropdown-menu",
  title: "Feedback/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "向下弹出的菜单列表。",
      },
    },
  },
  argTypes: {
    // 基础
    value: {
      control: { type: "object" },
      description: "下拉菜单值",
      table: {
        category: "基础",
        type: { summary: "Record<string, string | number>" },
        required: false,
      },
    },
    defaultValue: {
      control: { type: "object" },
      description: "下拉菜单默认值",
      table: {
        category: "基础",
        type: { summary: "Record<string, string | number>" },
        required: false,
      },
    },
    teleport: {
      description: "指定挂载的节点",
      table: {
        category: "基础",
        type: { summary: "HTMLElement | (() => HTMLElement)" },
        required: false,
      },
    },
    // 外观
    activeColor: {
      control: { type: "color" },
      description: "菜单标题和选项的选中态颜色",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "#ee0a24" },
        required: false,
      },
    },
    activeIcon: {
      control: { type: "object" },
      description: "自定义选项的选中态勾选图标",
      table: {
        category: "外观",
        type: { summary: "ReactNode" },
        required: false,
      },
    },
    direction: {
      control: { type: "select" },
      options: ["up", "down"],
      description: "菜单展开方向，可选值为 up",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "down" },
        required: false,
      },
    },
    zIndex: {
      control: { type: "number" },
      description: "菜单栏 z-index 层级",
      table: {
        category: "外观",
        type: { summary: "number | string" },
        defaultValue: { summary: "10" },
        required: false,
      },
    },
    duration: {
      control: { type: "number" },
      description: "动画时长，单位秒",
      table: {
        category: "外观",
        type: { summary: "number | string" },
        defaultValue: { summary: "0.2" },
        required: false,
      },
    },
    // 状态
    disabled: {
      control: { type: "boolean" },
      description: "是否禁用菜单",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
      },
    },
    overlay: {
      control: { type: "boolean" },
      description: "是否显示遮罩层",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        required: false,
      },
    },
    closeOnClickOverlay: {
      control: { type: "boolean" },
      description: "是否在点击遮罩层后关闭菜单",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        required: false,
      },
    },
    closeOnClickOutside: {
      control: { type: "boolean" },
      description: "是否在点击外部元素后关闭菜单",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        required: false,
      },
    },
    // 事件
    onChange: {
      description: "组件 value 变化时触发",
      table: {
        category: "事件",
        type: { summary: "(v: Record<string, string | number>) => void" },
        required: false,
      },
    },
    onOpen: {
      description: "打开菜单栏时触发",
      table: {
        category: "事件",
        type: { summary: "() => void" },
        required: false,
      },
    },
    onClose: {
      description: "关闭菜单栏时触发",
      table: {
        category: "事件",
        type: { summary: "() => void" },
        required: false,
      },
    },
    onOpened: {
      description: "打开菜单栏且动画结束后触发",
      table: {
        category: "事件",
        type: { summary: "() => void" },
        required: false,
      },
    },
    onClosed: {
      description: "关闭菜单栏且动画结束后触发",
      table: {
        category: "事件",
        type: { summary: "() => void" },
        required: false,
      },
    },
    // 其他
    overlayClass: {
      control: { type: "text" },
      description: "自定义遮罩层类名",
      table: {
        category: "其他",
        type: { summary: "string" },
        required: false,
      },
    },
    overlayStyle: {
      control: { type: "object" },
      description: "自定义遮罩层样式",
      table: {
        category: "其他",
        type: { summary: "React.CSSProperties" },
        required: false,
      },
    },
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Story = {
  name: "基础用法",
  render: (_args) => {
    return BaseDemo();
  },
  parameters: {
    docs: {
      description: {
        story: "DropdownMenu 组件包含多个 DropdownItem 组件，每个 DropdownItem 代表一个菜单项。",
      },
      source: {
        language: "tsx",
        code: `import { DropdownMenu } from "@react-vant-next/ui";
import { useState } from "react";
import { option1, option2 } from "./options";

export default function BaseDemo() {
  const [value, setValue] = useState<Record<string, string | number>>({});

  return (
    <DropdownMenu value={value} onChange={v => setValue(v)}>
      <DropdownMenu.Item name="value1" options={option1} />
      <DropdownMenu.Item name="value2" options={option2} />
    </DropdownMenu>
  );
};
`,
      },
    },
  },
};

// 自定义菜单内容
export const CustomContent: Story = {
  name: "自定义菜单内容",
  render: (_args) => {
    return CustomContentDemo();
  },
  parameters: {
    docs: {
      description: {
        story: "通过 children 可以自定义菜单内容。",
      },
      source: {
        language: "tsx",
        code: `import { Cell, DropdownMenu, Switch } from "@react-vant-next/ui";
import { useState } from "react";
import { option1 } from "./options";

export default function CustomContentDemo() {
  const [value, setValue] = useState<Record<string, string | number>>({});

  return (
    <DropdownMenu value={value} onChange={v => setValue(v)}>
      <DropdownMenu.Item name="value1" options={option1} />
      <DropdownMenu.Item title="筛选" name="value2">
        <Cell center title="包邮" rightIcon={<Switch size={24} />} />
        <Cell center title="团购" rightIcon={<Switch size={24} />} />
      </DropdownMenu.Item>
    </DropdownMenu>
  );
};
`,
      },
    },
  },
};

// 自定义高亮颜色
export const CustomColor: Story = {
  name: "自定义高亮颜色",
  render: (_args) => {
    return CustomColorExample();
  },
  parameters: {
    docs: {
      description: {
        story: "通过 activeColor 属性可以自定义菜单标题和选项的选中态颜色。",
      },
      source: {
        language: "tsx",
        code: `import { DropdownMenu } from "@react-vant-next/ui";
import { useState } from "react";
import { option1, option2 } from "./options";

export default function CustomColorExample() {
  const [value, setValue] = useState<Record<string, string | number>>({});

  return (
    <DropdownMenu
      activeColor="#f44336"
      value={value}
      onChange={v => setValue(v)}
    >
      <DropdownMenu.Item name="value1" options={option1} />
      <DropdownMenu.Item name="value2" options={option2} />
    </DropdownMenu>
  );
};
`,
      },
    },
  },
};

// 向上展开
export const DirectionUp: Story = {
  name: "向上展开",
  render: (_args) => {
    return DirectionUpExample();
  },
  parameters: {
    docs: {
      description: {
        story: "将 direction 属性设置为 up，菜单即可向上展开。",
      },
      source: {
        language: "tsx",
        code: `import { DropdownMenu } from "@react-vant-next/ui";
import { useState } from "react";
import { option1, option2 } from "./options";

export default function DirectionUpExample() {
  const [value, setValue] = useState<Record<string, string | number>>({});
  return (
    <DropdownMenu direction="up" value={value} onChange={v => setValue(v)}>
      <DropdownMenu.Item name="value1" options={option1} />
      <DropdownMenu.Item name="value2" options={option2} />
    </DropdownMenu>
  );
};
`,
      },
    },
  },
};

// 禁用菜单
export const Disabled: Story = {
  name: "禁用菜单",
  render: (_args) => {
    return DisabledExample();
  },
  parameters: {
    docs: {
      description: {
        story: "通过 disabled 属性可以禁用菜单。",
      },
      source: {
        language: "tsx",
        code: `import { DropdownMenu } from "@react-vant-next/ui";
import { useState } from "react";
import { option1, option2 } from "./options";

export default function DisabledExample() {
  const [value, setValue] = useState<Record<string, string | number>>({});
  return (
    <DropdownMenu value={value} onChange={v => setValue(v)}>
      <DropdownMenu.Item disabled name="value1" options={option1} />
      <DropdownMenu.Item disabled name="value2" options={option2} />
    </DropdownMenu>
  );
};
`,
      },
    },
  },
};
