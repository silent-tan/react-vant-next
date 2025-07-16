import type { Meta, StoryObj } from "@storybook/react-vite";
import { CartO, ChatO, ShopO, Star } from "@react-vant-next/icons";

import ActionBar from "../index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  id: "components-action-bar",
  title: "Biz/ActionBar",
  component: ActionBar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "底部导航栏，用于为页面相关操作提供便捷交互。",
      },
    },
  },
  argTypes: {
    safeAreaInsetBottom: {
      control: { type: "boolean" },
      description: "是否开启底部安全区适配",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "布局",
      },
    },
    children: {
      control: { type: "text" },
      description: "子元素，一般为 ActionBar.Icon 和 ActionBar.Button",
      table: {
        type: { summary: "React.ReactNode" },
        category: "内容",
      },
    },
  },
} satisfies Meta<typeof ActionBar>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Default: Story = {
  name: "基础用法",
  render: _args => (
    <div style={{ position: "relative", height: "80px" }}>
      <ActionBar>
        <ActionBar.Icon
          icon={<ChatO />}
          text="客服"
          onClick={() => console.log("chat click")}
        />
        <ActionBar.Icon
          icon={<CartO />}
          text="购物车"
          onClick={() => console.log("cart click")}
        />
        <ActionBar.Icon
          icon={<ShopO />}
          text="店铺"
          onClick={() => console.log("shop click")}
        />
        <ActionBar.Button
          type="danger"
          text="立即购买"
          onClick={() => console.log("button click")}
        />
      </ActionBar>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "ActionBar 组件由多个 ActionBar.Icon 和 ActionBar.Button 组件组成，Icon 组件用于渲染图标区域，Button 组件用于渲染按钮区域。",
      },
    },
  },
};

// 徽标提示
export const Badge: Story = {
  name: "徽标提示",
  render: _args => (
    <div style={{ position: "relative", height: "80px" }}>
      <ActionBar>
        <ActionBar.Icon icon={<ChatO />} badge={{ dot: true }} text="客服" />
        <ActionBar.Icon icon={<CartO />} badge={{ content: 5 }} text="购物车" />
        <ActionBar.Icon icon={<ShopO />} badge={{ content: 12 }} text="店铺" />
        <ActionBar.Button type="warning" text="加入购物车" />
        <ActionBar.Button type="danger" text="立即购买" />
      </ActionBar>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 badge 属性可以设置图标右上角的徽标内容，支持设置 dot、content 等属性。",
      },
    },
  },
};

// 自定义按钮颜色
export const ButtonColor: Story = {
  name: "自定义按钮颜色",
  render: _args => (
    <div style={{ position: "relative", height: "80px" }}>
      <ActionBar>
        <ActionBar.Icon icon={<ChatO />} text="客服" />
        <ActionBar.Icon icon={<CartO />} text="购物车" />
        <ActionBar.Button color="#be99ff" type="warning" text="加入购物车" />
        <ActionBar.Button color="#7232dd" type="danger" text="立即购买" />
      </ActionBar>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 color 属性可以自定义按钮的颜色，支持传入渐变色。",
      },
    },
  },
};

// 自定义图标颜色
export const IconColor: Story = {
  name: "自定义图标颜色",
  render: _args => (
    <div style={{ position: "relative", height: "80px" }}>
      <ActionBar>
        <ActionBar.Icon icon={<ChatO color="red" />} text="客服" />
        <ActionBar.Icon icon={<CartO color="red" />} text="购物车" />
        <ActionBar.Icon icon={<Star color="red" />} text="店铺" />
        <ActionBar.Button type="warning" text="加入购物车" />
        <ActionBar.Button type="danger" text="立即购买" />
      </ActionBar>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 icon 属性传入的图标组件，可以自定义图标的颜色。",
      },
    },
  },
};
