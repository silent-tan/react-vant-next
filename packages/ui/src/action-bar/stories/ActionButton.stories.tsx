import type { Meta, StoryObj } from "@storybook/react-vite";
import { CartO } from "@react-vant-next/icons";

import Flex from "../../flex";
import ActionBar from "../index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  id: "components-action-bar-button",
  title: "Biz/ActionBar/ActionBar.Button",
  component: ActionBar.Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "底部导航栏中的 Button",
      },
    },
  },
  argTypes: {
    className: {
      control: "text",
      description: "自定义 CSS 类名",
      table: {
        type: { summary: "string" },
        category: "基础",
      },
    },
    style: {
      control: "object",
      description: "自定义内联样式",
      table: {
        type: { summary: "React.CSSProperties" },
        category: "基础",
      },
    },
    children: {
      table: {
        type: { summary: "React.ReactNode" },
        category: "基础",
      },
    },
    text: {
      control: "text",
      description: "按钮文字",
      table: {
        type: { summary: "React.ReactNode" },
        category: "外观",
      },
    },
    type: {
      control: "select",
      description: "按钮类型",
      table: {
        type: { summary: "ButtonType" },
        category: "外观",
      },
    },
    color: {
      control: "text",
      description: "按钮颜色，支持传入 linear-gradient 渐变色",
      table: {
        type: { summary: "string" },
        category: "外观",
      },
    },
    disabled: {
      control: "boolean",
      description: "是否禁用按钮",
      table: {
        type: { summary: "boolean" },
        category: "外观",
      },
    },
    loading: {
      control: "boolean",
      description: "是否显示为加载状态",
      table: {
        type: { summary: "boolean" },
        category: "外观",
      },
    },
    icon: {
      control: "object",
      description: "图标内容，可以是字符串、React元素等",
      table: {
        type: { summary: "React.ReactNode" },
        category: "外观",
      },
    },
    onClick: {
      action: "onClick",
      description: "点击图标按钮时的回调函数",
      table: {
        type: { summary: "(event: React.MouseEvent) => void" },
        category: "事件",
      },
    },
  },
} satisfies Meta<typeof ActionBar.Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "默认用法",
  render: args => (
    <Flex>
      <ActionBar.Button {...args} />
    </Flex>
  ),
  args: {
    text: "购物车",
    icon: <CartO />,
  },
  parameters: {
    docs: {
      description: {
        story: "一般不单独使用，而是作为 ActionBar 组件的子组件使用。",
      },
    },
  },
};
