import type { Meta, StoryObj } from "@storybook/react-vite";
import { Flex } from "../..";
import Loading from "../index";

// 更多关于如何设置故事的信息: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  id: "components-loading",
  title: "Feedback/Loading",
  component: Loading,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "加载图标，用于表示加载中的过渡状态。",
      },
    },
  },
  argTypes: {
    // 基础
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
      description: "加载文案",
      table: {
        category: "基础",
        type: { summary: "React.ReactNode" },
        required: false,
      },
    },
    // 外观
    type: {
      control: { type: "select", options: ["circular", "spinner", "ball"] },
      description: "类型，可选值为 circular、spinner、ball",
      table: {
        category: "外观",
        type: { summary: "LoadingType" },
        defaultValue: { summary: "circular" },
        required: false,
      },
    },
    color: {
      control: { type: "color" },
      description: "颜色",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "#c9c9c9" },
        required: false,
      },
    },
    size: {
      control: { type: "text" },
      description: "加载图标大小，默认单位为 px",
      table: {
        category: "外观",
        type: { summary: "number | string" },
        defaultValue: { summary: "30px" },
        required: false,
      },
    },
    textSize: {
      control: { type: "text" },
      description: "文字大小，默认单位为 px",
      table: {
        category: "外观",
        type: { summary: "number | string" },
        defaultValue: { summary: "14px" },
        required: false,
      },
    },
    textColor: {
      control: { type: "color" },
      description: "文字颜色",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "#c9c9c9" },
        required: false,
      },
    },
    vertical: {
      control: { type: "boolean" },
      description: "是否垂直排列图标和文字内容",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
      },
    },
  },
} satisfies Meta<typeof Loading>;

export default meta;

type Story = StoryObj<typeof meta>;

// 加载类型
export const Types: Story = {
  name: "加载类型",
  render: _args => (
    <Flex>
      <Flex.Item span={8}>
        <Loading />
      </Flex.Item>
      <Flex.Item span={8}>
        <Loading type="spinner" />
      </Flex.Item>
      <Flex.Item span={8}>
        <Loading type="ball" />
      </Flex.Item>
    </Flex>
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 `type` 属性可以设置加载图标的类型，默认为 `circular`，可选值为 `spinner` 和 `ball`。",
      },
      source: {
        language: "tsx",
        code: `<Flex>
  <Flex.Item span={8}>
    <Loading />
  </Flex.Item>
  <Flex.Item span={8}>
    <Loading type="spinner" />
  </Flex.Item>
  <Flex.Item span={8}>
    <Loading type="ball" />
  </Flex.Item>
</Flex>`,
      },
    },
  },
};

// 自定义颜色
export const CustomColor: Story = {
  name: "自定义颜色",
  render: _args => (
    <Flex>
      <Flex.Item span={8}>
        <Loading color="#3f45ff" />
      </Flex.Item>
      <Flex.Item span={8}>
        <Loading type="spinner" color="#3f45ff" />
      </Flex.Item>
    </Flex>
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 `color` 属性设置加载图标的颜色。",
      },
      source: {
        language: "tsx",
        code: `<Flex>
  <Flex.Item span={8}>
    <Loading color="#3f45ff" />
  </Flex.Item>
  <Flex.Item span={8}>
    <Loading type="spinner" color="#3f45ff" />
  </Flex.Item>
</Flex>`,
      },
    },
  },
};

// 自定义大小
export const CustomSize: Story = {
  name: "自定义大小",
  render: _args => (
    <Flex>
      <Flex.Item span={8}>
        <Loading size="24" />
      </Flex.Item>
      <Flex.Item span={8}>
        <Loading type="spinner" size="24px" />
      </Flex.Item>
    </Flex>
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 `size` 属性设置加载图标的大小，默认单位为 `px`。",
      },
      source: {
        language: "tsx",
        code: `<Flex>
  <Flex.Item span={8}>
    <Loading size="24" />
  </Flex.Item>
  <Flex.Item span={8}>
    <Loading type="spinner" size="24px" />
  </Flex.Item>
</Flex>`,
      },
    },
  },
};

// 加载文案
export const WithText: Story = {
  name: "加载文案",
  render: _args => <Loading size="24px">加载中...</Loading>,
  parameters: {
    docs: {
      description: {
        story: "可以使用默认插槽在图标的右侧插入加载文案。",
      },
      source: {
        language: "tsx",
        code: `<Loading size="24px">加载中...</Loading>`,
      },
    },
  },
};

// 垂直排列
export const Vertical: Story = {
  name: "垂直排列",
  render: _args => (
    <Loading style={{ display: "inline-flex" }} size="24px" vertical>
      加载中...
    </Loading>
  ),
  parameters: {
    docs: {
      description: {
        story: "设置 `vertical` 属性后，图标和文案会垂直排列。",
      },
      source: {
        language: "tsx",
        code: `<Loading style={{ display: "inline-flex" }} size="24px" vertical>
  加载中...
</Loading>`,
      },
    },
  },
};

// 自定义文本颜色
export const TextColor: Story = {
  name: "自定义文本颜色",
  render: _args => (
    <Loading style={{ display: "inline-flex" }} vertical textColor="#3f45ff">
      加载中...
    </Loading>
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 `color` 和 `textColor` 属性，可以自定义文本颜色。",
      },
      source: {
        language: "tsx",
        code: `<Loading style={{ display: "inline-flex" }} vertical textColor="#3f45ff">
  加载中...
</Loading>`,
      },
    },
  },
};
