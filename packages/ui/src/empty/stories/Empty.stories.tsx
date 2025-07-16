import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Tabs } from "@react-vant-next/ui";
import Empty from "../Empty";

const meta = {
  id: "components-empty",
  title: "Display/Empty",
  component: Empty,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "空状态时的占位提示。",
      },
    },
  },
  argTypes: {
    // 基础
    style: {
      description: "组件样式",
      table: {
        category: "基础",
        type: { summary: "CSSProperties" },
        required: false,
      },
    },
    className: {
      description: "组件 class",
      table: {
        category: "基础",
        type: { summary: "string" },
        required: false,
      },
    },
    children: {
      description: "底部内容",
      table: {
        category: "基础",
        type: { summary: "React.ReactNode" },
        required: false,
      },
    },
    // 外观
    image: {
      control: { type: "select" },
      options: ["default", "error", "network", "search"],
      description: "图片类型，可选值为 error network search，支持传入图片 URL",
      table: {
        category: "外观",
        type: { summary: "'default' | 'error' | 'network' | 'search' | string | React.ReactNode" },
        defaultValue: { summary: "'default'" },
        required: false,
      },
    },
    imageSize: {
      control: { type: "text" },
      description: "图片大小，默认单位为 px",
      table: {
        category: "外观",
        type: { summary: "number | string" },
        required: false,
      },
    },
    description: {
      control: { type: "text" },
      description: "图片下方的描述文字",
      table: {
        category: "外观",
        type: { summary: "React.ReactNode" },
        required: false,
      },
    },
  },
} satisfies Meta<typeof Empty>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Story = {
  name: "基础用法",
  render: _args => <Empty description="描述文字" />,
  parameters: {
    docs: {
      description: {
        story: "Empty 组件默认展示无内容的图片。",
      },
    },
  },
};

// 图片类型
export const ImageType: Story = {
  name: "图片类型",
  render: _args => (
    <Tabs>
      <Tabs.TabPane title="通用错误">
        <Empty image="error" description="描述文字" />
      </Tabs.TabPane>
      <Tabs.TabPane title="网络错误">
        <Empty image="network" description="描述文字" />
      </Tabs.TabPane>
      <Tabs.TabPane title="搜索提示">
        <Empty image="search" description="描述文字" />
      </Tabs.TabPane>
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story: "Empty 组件内置了多种占位图片类型，可以在不同业务场景下使用。",
      },
    },
    source: {
      code: `
<Tabs>
  <Tabs.TabPane title="通用错误">
    <Empty image="error" description="描述文字" />
  </Tabs.TabPane>
  <Tabs.TabPane title="网络错误">
    <Empty image="network" description="描述文字" />
  </Tabs.TabPane>
  <Tabs.TabPane title="搜索提示">
    <Empty image="search" description="描述文字" />
  </Tabs.TabPane>
</Tabs>
      `,
    },
  },
};

// 自定义图片
export const CustomImage: Story = {
  name: "自定义图片",
  render: _args => (
    <Empty
      className="custom-image"
      imageSize={90}
      image={<img src="https://img.yzcdn.cn/vant/custom-empty-image.png" />}
      description="描述文字"
    />
  ),
  parameters: {
    docs: {
      description: {
        story: "需要自定义图片时，可以在 image 属性中传入组件或者任意图片 URL。",
      },
    },
    source: {
      code: `
<Empty
  className="custom-image"
  imageSize={90}
  image={<img src="https://img.yzcdn.cn/vant/custom-empty-image.png" />}
  description="描述文字"
/>
      `,
    },
  },
};

// 底部内容
export const BottomContent: Story = {
  name: "底部内容",
  render: _args => (
    <Empty description="描述文字">
      <Button style={{ width: 160 }} round type="primary">
        按钮
      </Button>
    </Empty>
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 children 可以在 Empty 组件的下方插入内容。",
      },
    },
    source: {
      code: `
<Empty description="描述文字">
  <Button style={{ width: 160 }} round type="primary">
    按钮
  </Button>
</Empty>
      `,
    },
  },
};
