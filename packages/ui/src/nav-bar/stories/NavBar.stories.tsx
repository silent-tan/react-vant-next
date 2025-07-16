import type { Meta, StoryObj } from "@storybook/react-vite";
import BaseDemo from "../demo/base";
import CustomDemo from "../demo/custom";
import { NavBar } from "../index";

// 更多关于如何设置故事的信息: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  id: "components-nav-bar",
  title: "Navigate/NavBar",
  component: NavBar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "为页面提供导航功能，常用于页面顶部。",
      },
    },
  },
  argTypes: {
    // 基础
    title: {
      control: { type: "text" },
      description: "标题",
      table: {
        category: "基础",
        type: { summary: "ReactNode" },
        defaultValue: { summary: "''" },
      },
    },
    leftText: {
      control: { type: "text" },
      description: "左侧文案",
      table: {
        category: "基础",
        type: { summary: "ReactNode" },
        defaultValue: { summary: "''" },
      },
    },
    rightText: {
      control: { type: "text" },
      description: "右侧文案",
      table: {
        category: "基础",
        type: { summary: "ReactNode" },
        defaultValue: { summary: "''" },
      },
    },
    leftArrow: {
      control: { type: "boolean" },
      description: "自定义左侧箭头",
      table: {
        category: "基础",
        type: { summary: "boolean | ReactNode" },
        defaultValue: { summary: "false" },
      },
    },
    // 外观
    border: {
      control: { type: "boolean" },
      description: "是否显示下边框",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    fixed: {
      control: { type: "boolean" },
      description: "是否固定在顶部",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    placeholder: {
      control: { type: "boolean" },
      description: "固定在顶部时，是否在标签位置生成一个等高的占位元素",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    zIndex: {
      control: { type: "number" },
      description: "导航栏 z-index",
      table: {
        category: "外观",
        type: { summary: "number | string" },
        defaultValue: { summary: "1" },
      },
    },
    safeAreaInsetTop: {
      control: { type: "boolean" },
      description: "是否开启顶部安全区适配",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    // 事件
    onClickLeft: {
      description: "点击左侧按钮时触发",
      table: {
        category: "事件",
        type: { summary: "(e: React.MouseEvent) => void" },
      },
    },
    onClickRight: {
      description: "点击右侧按钮时触发",
      table: {
        category: "事件",
        type: { summary: "(e: React.MouseEvent) => void" },
      },
    },
    // 其他
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
    children: {
      description: "自定义子元素",
      table: {
        category: "基础",
        type: { summary: "ReactNode" },
      },
    },
  },
} satisfies Meta<typeof NavBar>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Story = {
  name: "基础用法",
  render: () => <BaseDemo />,
  parameters: {
    docs: {
      source: {
        code: `import { NavBar, Toast } from "@react-vant-next/ui";

export default function BaseDemo() {
  return (
    <NavBar
      title="标题"
      leftText="返回"
      rightText="按钮"
      onClickLeft={() => Toast("返回")}
      onClickRight={() => Toast("按钮")}
    />
  );
};
`,
      },
    },
  },
};

// 自定义内容
export const Custom: Story = {
  name: "自定义内容",
  render: () => <CustomDemo />,
  parameters: {
    docs: {
      description: {
        story: "自定义导航栏两侧的内容。",
      },
      source: {
        code: `import { Search } from "@react-vant-next/icons";
import { NavBar, Toast } from "@react-vant-next/ui";

export default function CustomDemo() {
  return (
    <NavBar
      title="标题"
      leftText="返回"
      onClickLeft={() => Toast("返回")}
      rightText={<Search fontSize={20} />}
      onClickRight={() => Toast("按钮")}
    />
  );
};
`,
      },
    },
  },
};
