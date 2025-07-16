import type { Meta, StoryObj } from "@storybook/react-vite";
import { Cell, Tag } from "@react-vant-next/ui";
import { useState } from "react";

const meta = {
  id: "components-tag",
  title: "Display/Tag",
  component: Tag,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "用于标记关键词和概括主要内容。",
      },
    },
  },
  argTypes: {
    // 基础
    children: {
      description: "标签内容",
      table: {
        category: "基础",
        type: { summary: "React.ReactNode" },
      },
    },
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
    show: {
      description: "是否展示标签",
      table: {
        category: "基础",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    // 外观
    type: {
      description: "类型，可选值为 primary success danger warning",
      table: {
        category: "外观",
        type: { summary: "'default' | 'primary' | 'success' | 'warning' | 'danger'" },
        defaultValue: { summary: "default" },
      },
      control: { type: "select" },
      options: ["default", "primary", "success", "warning", "danger"],
    },
    size: {
      description: "大小, 可选值为 large medium",
      table: {
        category: "外观",
        type: { summary: "'' | 'medium' | 'large'" },
        defaultValue: { summary: "" },
      },
      control: { type: "select" },
      options: ["", "medium", "large"],
    },
    color: {
      description: "标签颜色",
      table: {
        category: "外观",
        type: { summary: "string" },
      },
    },
    textColor: {
      description: "文本颜色，优先级高于 color 属性",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "white" },
      },
    },
    plain: {
      description: "是否为空心样式",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    round: {
      description: "是否为圆角样式",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    mark: {
      description: "是否为标记样式",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    closeable: {
      description: "是否为可关闭标签",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    // 事件
    onClick: {
      description: "点击时触发",
      table: {
        category: "事件",
        type: { summary: "(event: MouseEvent) => void" },
      },
    },
    onClose: {
      description: "关闭标签时触发",
      table: {
        category: "事件",
        type: { summary: "(event: MouseEvent) => void" },
      },
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法示例
export const Basic: Story = {
  name: "基础用法",
  render: (_args) => {
    return (
      <>
        <Cell title="primary 类型">
          <Tag type="primary">标签</Tag>
        </Cell>
        <Cell title="success 类型">
          <Tag type="success">标签</Tag>
        </Cell>
        <Cell title="danger  类型">
          <Tag type="danger">标签</Tag>
        </Cell>
        <Cell title="warning  类型">
          <Tag type="warning">标签</Tag>
        </Cell>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `type` 属性控制标签颜色。",
      },
    },
  },
};

// 样式风格示例
export const Plain: Story = {
  name: "样式风格",
  render: () => {
    const [show, setShow] = useState(true);

    return (
      <>
        <Cell title="空心样式">
          <Tag plain type="primary">
            标签
          </Tag>
        </Cell>
        <Cell title="圆角样式">
          <Tag round type="primary">
            标签
          </Tag>
        </Cell>
        <Cell title="标记样式">
          <Tag mark type="primary">
            标签
          </Tag>
        </Cell>
        <Cell title="可关闭标签">
          <Tag
            show={show}
            plain
            closeable
            size="medium"
            type="primary"
            onClose={() => setShow(false)}
          >
            标签
          </Tag>
        </Cell>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "设置 `plain` 属性设置为空心样式。",
      },
      source: {
        code: `
const [show, setShow] = React.useState(true);

return (
  <>
    <Cell title="空心样式">
      <Tag plain type="primary">
        标签
      </Tag>
    </Cell>
    <Cell title="圆角样式">
      <Tag round type="primary">
        标签
      </Tag>
    </Cell>
    <Cell title="标记样式">
      <Tag mark type="primary">
        标签
      </Tag>
    </Cell>
    <Cell title="可关闭标签">
      <Tag
        show={show}
        plain
        closeable
        size="medium"
        type="primary"
        onClose={() => setShow(false)}
      >
        标签
      </Tag>
    </Cell>
  </>
);
        `,
      },
    },
  },
};

// 标签大小示例
export const Size: Story = {
  name: "标签大小",
  render: (_args) => {
    return (
      <>
        <Cell title="小号标签">
          <Tag type="primary">标签</Tag>
        </Cell>
        <Cell title="中号标签">
          <Tag size="medium" type="primary">
            标签
          </Tag>
        </Cell>
        <Cell title="大号标签">
          <Tag size="large" type="primary">
            标签
          </Tag>
        </Cell>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `size` 属性调整标签大小。",
      },
    },
  },
};

// 自定义颜色示例
export const CustomColor: Story = {
  name: "自定义颜色",
  render: (_args) => {
    return (
      <>
        <Cell title="背景颜色">
          <Tag color="#7232dd">标签</Tag>
        </Cell>
        <Cell title="文字颜色">
          <Tag color="#ffe1e1" textColor="#ad0000">
            标签
          </Tag>
        </Cell>
        <Cell title="空心颜色">
          <Tag color="#7232dd" plain>
            标签
          </Tag>
        </Cell>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `color` 和 `textColor` 属性设置标签颜色。",
      },
    },
  },
};

// 组合样式示例
export const Combined: Story = {
  name: "组合样式",
  render: (_args) => {
    return (
      <>
        <Cell title="组合样式">
          <Tag round plain type="primary">圆角空心</Tag>
        </Cell>
        <Cell title="标记空心">
          <Tag mark plain type="success">标记空心</Tag>
        </Cell>
        <Cell title="圆角自定义">
          <Tag round color="#7232dd">圆角自定义</Tag>
        </Cell>
        <Cell title="标记自定义">
          <Tag mark color="#ffe1e1" textColor="#ad0000">标记自定义</Tag>
        </Cell>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "各种样式属性可以自由组合。",
      },
    },
  },
};
