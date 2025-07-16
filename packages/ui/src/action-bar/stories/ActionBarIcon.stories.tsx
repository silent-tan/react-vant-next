import type { Meta, StoryObj } from "@storybook/react-vite";
import { CartO } from "@react-vant-next/icons";

import Flex from "../../flex";
import ActionBar from "../index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  id: "components-action-bar-icon",
  title: "Biz/ActionBar/ActionBar.Icon",
  component: ActionBar.Icon,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "底部导航栏中的 Icon",
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
    icon: {
      control: "object",
      description: "图标内容，可以是字符串、React元素等",
      table: {
        type: { summary: "React.ReactNode" },
        category: "外观",
      },
    },
    badge: {
      control: "object",
      description: "图标右上角徽标的配置对象",
      table: {
        type: { summary: "BadgeSettingProps" },
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
} satisfies Meta<typeof ActionBar.Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "默认用法",
  render: args => (
    <Flex>
      <ActionBar.Icon {...args} />
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

export const WithBadge: Story = {
  name: "徽标用法",
  render: args => (
    <Flex>
      <ActionBar.Icon
        icon={<CartO />}
        text="购物车"
        badge={{ dot: true }}
        onClick={() => console.log("chat with dot badge click")}
        {...args}
      />
    </Flex>
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 `badge` 属性，可以为图标按钮添加不同类型的徽标，如红点、数字或文本。",
      },
    },
  },
};
