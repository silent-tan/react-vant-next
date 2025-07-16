import type { Meta, StoryObj } from "@storybook/react-vite";
import { Plus } from "@react-vant-next/icons";

import Button from "../index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  id: "basic-button",
  title: "Basic/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "按钮用于触发一个操作，如提交表单。",
        story: "按钮用于触发一个操作，如提交表单。",
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
    text: {
      control: {
        type: "text",
      },
      table: {
        type: { summary: "string" },
        category: "基础",
      },
      description: "按钮文本内容, 业务内建议使用children代替",
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
    icon: {
      control: { type: "object" },
      description: "按钮图标",
      table: {
        type: { summary: "ReactNode" },
        required: false,
        category: "基础",
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
    color: {
      control: { type: "text" },
      description: "按钮颜色",
      table: {
        type: { summary: "string" },
        required: false,
        category: "外观",
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
    hairline: {
      control: { type: "boolean" },
      description: "是否使用细边框",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
        category: "外观",
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
    loading: {
      control: { type: "boolean" },
      description: "是否显示加载状态",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
        category: "外观",
      },
    },
    loadingText: {
      control: { type: "text" },
      description: "加载状态文字",
      table: {
        type: { summary: "string" },
        required: false,
        category: "外观",
      },
    },
    loadingType: {
      control: { type: "select" },
      options: ["spinner", "circular"],
      description: "加载图标类型",
      table: {
        type: { summary: "'spinner' | 'circular'" },
        defaultValue: { summary: "'circular'" },
        required: false,
        category: "外观",
      },
    },
    loadingSize: {
      control: { type: "text" },
      description: "加载图标大小",
      table: {
        type: { summary: "string" },
        required: false,
        category: "外观",
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
    nativeType: {
      control: { type: "text" },
      description: "原生 button 标签的 type 属性",
      table: {
        type: { summary: "string" },
        required: false,
        category: "其他",
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "默认",
  render: args => <Button {...args}>Default</Button>,
  parameters: {
    docs: {
      canvas: { sourceState: "shown" },
    },
  },
};

// 按钮类型
export const Type: Story = {
  name: "按钮类型",
  render: args => (
    <div style={{ display: "flex", gap: "8px" }}>
      <Button {...args}>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="info">Info</Button>
      <Button type="warning">Warning</Button>
      <Button type="danger">Danger</Button>
    </div>
  ),
  args: {
    type: "default",
  },
  parameters: {
    docs: {
      description: {
        story: "按钮支持 `default`、`primary`、`info`、`warning`、`danger` 五种类型，默认为 `default`。",
      },
    },
  },
};

// 朴素按钮
export const Plain: Story = {
  name: "朴素按钮",
  render: args => (
    <div style={{ display: "flex", gap: "8px" }}>
      <Button type="primary" {...args}>朴素按钮</Button>
      <Button type="info" {...args}>朴素按钮</Button>
    </div>
  ),
  args: {
    plain: true,
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `plain` 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。",
      },
    },
  },
};

// 细边框
export const Hairline: Story = {
  name: "细边框",
  render: args => (
    <div style={{ display: "flex", gap: "8px" }}>
      <Button {...args} plain hairline type="primary">细边框按钮</Button>
      <Button {...args} plain hairline type="info">细边框按钮</Button>
    </div>
  ),
  args: {
    hairline: true,
  },
  parameters: {
    docs: {
      description: {
        story: "设置 `hairline` 属性可以展示 0.5px 的细边框。",
      },
    },
  },
};

// 禁用状态
export const Disabled: Story = {
  name: "禁用状态",
  render: args => (
    <div style={{ display: "flex", gap: "8px" }}>
      <Button {...args} disabled type="primary">禁用状态</Button>
      <Button {...args} disabled type="info">禁用状态</Button>
    </div>
  ),
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。",
      },
    },
  },
};

// 加载状态
export const Loading: Story = {
  name: "加载状态",
  args: {
    loading: true,
    loadingText: "加载中...",
    loadingType: "spinner",
  },
  render: args => (
    <div style={{ display: "flex", gap: "8px" }}>
      <Button {...args} type="primary" />
      <Button loading type="primary" loadingType="spinner" />
      <Button loading loadingText="加载中..." type="info" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 `loading` 属性设置按钮为加载状态，加载状态下默认会隐藏按钮文字，可以通过 `loadingText` 设置加载状态下的文字。",
      },
    },
  },
};

// 按钮形状
export const Shape: Story = {
  name: "按钮形状",
  args: {
    square: true,
    round: true,
  },
  render: args => (
    <div style={{ display: "flex", gap: "8px" }}>
      <Button square={args.square} type="primary">方形按钮</Button>
      <Button round={args.round} type="info">圆形按钮</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 `square` 设置方形按钮，通过 `round` 设置圆形按钮。",
      },
    },
  },
};

// 图标按钮
export const Icon: Story = {
  name: "图标按钮",
  args: {
    iconPosition: "left",
    icon: <Plus />,
  },
  render: args => (
    <div style={{ display: "flex", gap: "8px" }}>
      <Button {...args} type="primary" />
      <Button {...args} type="primary">按钮</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 `icon` 属性设置按钮图标，支持传入 React 组件，通过 `iconPosition` 属性设置图标位置。",
      },
    },
  },
};

// 按钮尺寸
export const Size: Story = {
  name: "按钮尺寸",
  args: {
    size: "large",
  },
  render: args => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Button type="primary" size={args.size}>大号按钮</Button>
      <Button type="primary" size="normal">普通按钮</Button>
      <Button type="primary" size="small">小型按钮</Button>
      <Button type="primary" size="mini">迷你按钮</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "按钮支持 `large`、`normal`、`small`、`mini` 四种尺寸，默认为 `normal`。",
      },
    },
  },
};

// 块级元素
export const Block: Story = {
  name: "块级元素",
  render: args => <Button {...args}>块级元素</Button>,
  args: {
    type: "primary",
    block: true,
    round: true,
  },
  parameters: {
    docs: {
      description: {
        story: "按钮在默认情况下为行内块级元素，通过 `block` 属性可以将按钮的元素类型设置为块级元素，让按钮宽度自适应父元素宽度。",
      },
    },
  },
};

// 自定义颜色
export const Color: Story = {
  name: "自定义颜色",
  args: {
    color: "#7232dd",
  },
  render: args => (
    <div style={{ display: "flex", gap: "8px" }}>
      <Button color={args.color}>单色按钮</Button>
      <Button color="#7232dd" plain>单色按钮</Button>
      <Button color="linear-gradient(to right, #ff6034, #ee0a24)">渐变色按钮</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 `color` 属性可以自定义按钮的颜色。",
      },
    },
  },
};

// 按钮阴影
export const Shadow: Story = {
  name: "按钮阴影",
  render: args => <Button {...args}>阴影按钮</Button>,
  args: {
    type: "primary",
    block: true,
    shadow: true,
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `shadow` 属性可以为按钮添加阴影效果。",
      },
    },
  },
};
