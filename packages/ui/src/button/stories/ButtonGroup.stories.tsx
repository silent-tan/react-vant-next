import type { Meta, StoryObj } from "@storybook/react-vite";
import { Arrow, ArrowLeft, Replay } from "@react-vant-next/icons";

import ButtonGroup from "../ButtonGroup";
import { Button } from "../index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  id: "basic-button-group",
  title: "Basic/Button/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        story: "按钮用于触发一个操作，如提交表单。",
      },
    },
  },
  argTypes: {
    style: {
      control: {
        type: "object",
      },
      table: { type: { summary: "CSSProperties" }, category: "基础" },
    },
    className: {
      control: {
        type: "text",
      },
      table: { type: { summary: "string" }, category: "基础" },
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
      description: "按钮文本内容",
    },
    tag: {
      table: {
        type: {
          summary: "keyof HTMLElementTagNameMap | string",
        },
        defaultValue: { summary: "'button'" },
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
    type: {
      control: { type: "select" },
      options: ["default", "primary", "info", "warning", "danger"],
      description: "按钮类型",
      table: {
        type: { summary: "'default' | 'primary' | 'info' | 'warning' | 'danger'" },
        defaultValue: { summary: "'default'" },
        required: false,
        category: "外观",
      },
    },
    size: {
      control: { type: "select" },
      options: ["large", "normal", "small", "mini"],
      description: "按钮尺寸",
      table: {
        type: { summary: "'large' | 'normal' | 'small' | 'mini'" },
        defaultValue: { summary: "'normal'" },
        required: false,
        category: "外观",
      },
    },

    iconPosition: {
      control: { type: "select" },
      options: ["left", "right"],
      description: "图标展示位置",
      table: {
        type: { summary: "'right' | 'left'" },
        defaultValue: { summary: "'left'" },
        required: false,
        category: "基础",
      },
    },
    block: {
      control: { type: "boolean" },
      description: "是否为块级元素",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
        category: "外观",
      },
    },
    plain: {
      control: { type: "boolean" },
      description: "是否为朴素按钮",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
        category: "外观",
      },
    },
    square: {
      control: { type: "boolean" },
      description: "是否为方形按钮",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
        category: "外观",
      },
    },
    round: {
      control: { type: "boolean" },
      description: "是否为圆形按钮",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
        category: "外观",
      },
    },
    shadow: {
      control: { type: "boolean" },
      description: "是否为阴影按钮",
      table: {
        type: { summary: "boolean | 1 | 2 | 3" },
        defaultValue: { summary: "false" },
        required: false,
        category: "外观",
      },
      type: {
        name: "intersection",
        value: [
          {
            name: "boolean",
          },
          {
            name: "number",
          },
        ],
        required: false,
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "是否禁用按钮",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
        category: "外观",
      },
    },
    nativeType: {
      control: { type: "text" },
      description: "原生 button 标签的 type 属性",
      table: {
        type: { summary: "string" },
        required: false,
        category: "其他",
      },
    },
    onClick: {
      action: "clicked",
      description: "点击按钮时触发",
      table: {
        type: { summary: "(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void" },
        required: false,
        category: "事件",
      },
    },
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

// 按钮组
export const Default: Story = {
  name: "按钮组",
  render: args => (
    <Button.Group {...args}>
      <Button icon={<ArrowLeft />}>上一步</Button>
      <Button icon={<Replay />}>刷新</Button>
      <Button iconPosition="right" icon={<Arrow />}>下一步</Button>
    </Button.Group>
  ),
  args: {
    block: true,
    round: true,
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `Button.Group` 组件可以将多个按钮组合在一起，适合用于多项按钮操作。",
      },
    },
  },
};
