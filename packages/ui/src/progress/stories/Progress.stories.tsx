import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import Button from "../../button";
import Flex from "../../flex";
import { Space } from "../../space";
import { Progress } from "../index";

const meta = {
  id: "components-progress",
  title: "Display/Progress",
  component: Progress,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "用于展示操作的当前进度。",
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
    percentage: {
      description: "进度百分比",
      table: {
        category: "基础",
        type: { summary: "number | string" },
        defaultValue: { summary: "0" },
      },
      control: { type: "number", min: 0, max: 100, step: 1 },
    },
    // 外观
    strokeWidth: {
      description: "进度条粗细，默认单位为px",
      table: {
        category: "外观",
        type: { summary: "number | string" },
        defaultValue: { summary: "4px" },
      },
      control: { type: "number", min: 1, max: 50, step: 1 },
    },
    color: {
      description: "进度条颜色",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "#3f45ff" },
      },
      control: "color",
    },
    trackColor: {
      description: "轨道颜色",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "#e5e5e5" },
      },
      control: "color",
    },
    pivotText: {
      description: "进度文字内容",
      table: {
        category: "外观",
        type: { summary: "ReactNode" },
        defaultValue: { summary: "百分比" },
      },
      control: "text",
    },
    pivotColor: {
      description: "进度文字背景色",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "同进度条颜色" },
      },
      control: "color",
    },
    textColor: {
      description: "进度文字颜色",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "white" },
      },
      control: "color",
    },
    // 状态
    inactive: {
      description: "是否置灰",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    showPivot: {
      description: "是否显示进度文字",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Partial<Story> = {
  name: "基础用法",
  render: args => <Progress {...args} />,
  args: {
    percentage: 50,
  },
  parameters: {
    docs: {
      description: {
        story: "进度条默认为蓝色，使用 `percentage` 属性来设置当前进度。",
      },
    },
  },
};

// 线条粗细
export const StrokeWidth: Partial<Story> = {
  name: "线条粗细",
  render: args => <Progress {...args} />,
  args: {
    percentage: 50,
    strokeWidth: 8,
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `strokeWidth` 可以设置进度条的粗细。",
      },
    },
  },
};

// 置灰
export const Inactive: Partial<Story> = {
  name: "置灰",
  render: args => <Progress {...args} />,
  args: {
    inactive: true,
    percentage: 50,
  },
  parameters: {
    docs: {
      description: {
        story: "设置 `inactive` 属性后进度条将置灰。",
      },
    },
  },
};

// 样式定制
export const CustomStyle: Partial<Story> = {
  name: "样式定制",
  render: _args => (
    <Space block gap={[0, 20]} direction="vertical">
      <Progress style={{ marginBottom: 20 }} color="#f2826a" percentage="25" pivotText="橙色" />
      <Progress style={{ marginBottom: 20 }} color="#ee0a24" percentage="50" pivotText="红色" />
      <Progress
        color="linear-gradient(to right, #be99ff, #7232dd)"
        percentage="75"
        pivotColor="#7232dd"
        pivotText={<div>紫色</div>}
      />
    </Space>
  ),
  parameters: {
    docs: {
      description: {
        story: "可以使用 `pivotText` 属性自定义文字，`color` 属性自定义进度条颜色。",
      },
    },
  },
};

// 过渡效果
export const Transition: Partial<Story> = {
  name: "过渡效果",
  render: () => {
    const [percentage, setPercentage] = useState(50);
    const format = rate => Math.min(Math.max(rate, 0), 100);

    const add = () => {
      setPercentage(value => format(value + 20));
    };

    const reduce = () => {
      setPercentage(value => format(value - 20));
    };
    return (
      <>
        <Progress percentage={percentage} />
        <Flex justify="center" style={{ marginTop: 20 }}>
          <Button style={{ marginRight: 10 }} type="primary" size="small" onClick={add}>
            增加
          </Button>
          <Button type="danger" size="small" onClick={reduce}>
            减少
          </Button>
        </Flex>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "可以通过改变 `percentage` 的值来实现动态进度条。",
      },
      source: {
        language: "tsx",
        code: `const [percentage, setPercentage] = useState(50);
const format = (rate) => Math.min(Math.max(rate, 0), 100);

const add = () => {
  setPercentage((value) => format(value + 20));
};

const reduce = () => {
  setPercentage((value) => format(value - 20));
};
return (
  <>
    <Progress percentage={percentage} />
    <Flex justify="center" style={{ marginTop: 20 }}>
      <Button style={{ marginRight: 10 }} type="primary" size="small" onClick={add}>
        增加
      </Button>
      <Button type="danger" size="small" onClick={reduce}>
        减少
      </Button>
    </Flex>
  </>
);`,
      },
    },
  },
};
