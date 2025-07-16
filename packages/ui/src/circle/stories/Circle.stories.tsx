import type { Meta, StoryObj } from "@storybook/react-vite";
import { Space } from "@react-vant-next/ui";
import CustomExample from "../demo/custom";
import Circle from "../index";

const meta = {
  id: "components-circle",
  title: "Display/Circle",
  component: Circle,
  parameters: {
    docs: {
      description: {
        component: "圆环形的进度条组件，支持进度渐变动画。",
      },
    },
  },
  tags: ["autodocs"],
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
      description: "子元素",
      table: {
        category: "基础",
        type: { summary: "React.ReactNode" },
      },
    },
    // 状态
    rate: {
      control: { type: "number", min: 0, max: 100, step: 1 },
      description: "当前进度",
      table: {
        type: { summary: "number" },
        category: "状态",
      },
    },
    defaultRate: {
      control: { type: "number", min: 0, max: 100, step: 1 },
      description: "默认进度",
      table: {
        type: { summary: "number" },
        category: "状态",
      },
    },
    clockwise: {
      control: { type: "boolean" },
      description: "是否顺时针增加",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "状态",
      },
    },
    // 外观
    size: {
      control: { type: "number" },
      description: "圆环直径，默认单位为 px",
      table: {
        type: { summary: "number | string" },
        defaultValue: { summary: "100px" },
        category: "外观",
      },
    },
    color: {
      control: { type: "text" },
      description: "进度条颜色，传入对象格式可以定义渐变色",
      table: {
        type: { summary: "string | object" },
        defaultValue: { summary: "#3f45ff" },
        category: "外观",
      },
    },
    layerColor: {
      control: { type: "color" },
      description: "轨道颜色",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "white" },
        category: "外观",
      },
    },
    fill: {
      control: { type: "color" },
      description: "填充颜色",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "none" },
        category: "外观",
      },
    },
    strokeWidth: {
      control: { type: "number" },
      description: "进度条宽度",
      table: {
        type: { summary: "number | string" },
        defaultValue: { summary: "40" },
        category: "外观",
      },
    },
    strokeLinecap: {
      control: { type: "select" },
      options: ["butt", "round", "square"],
      description: "进度条端点的形状，可选值为 square butt",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "round" },
        category: "外观",
      },
    },
    startPosition: {
      control: { type: "select" },
      options: ["top", "right", "bottom", "left"],
      description: "进度起始位置，可选值为 left、right、bottom",
      table: {
        type: { summary: "CircleStartPosition" },
        defaultValue: { summary: "top" },
        category: "外观",
      },
    },
    text: {
      control: { type: "text" },
      description: "文字",
      table: {
        type: { summary: "string" },
        category: "外观",
      },
    },
    // 其他
    speed: {
      control: { type: "number" },
      description: "动画速度（单位为 rate/s）",
      table: {
        type: { summary: "number | string" },
        defaultValue: { summary: "0" },
        category: "其他",
      },
    },
    // 事件
    onChange: {
      description: "进度变化时触发",
      table: {
        type: { summary: "(value: number) => void" },
        category: "事件",
      },
    },
  },
} satisfies Meta<typeof Circle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  name: "基础用法",
  parameters: {
    docs: {
      description: {
        story: "`rate` 属性表示进度条的进度，当 `rate` 发生变化时，进度条会以 `speed` 的速度变化，直至达到 `rate` 设定的值。",
      },
    },
  },
  render: _args => <Circle rate={70} speed={100} text="70%" />,
};

export const Custom: Story = {
  name: "自定义",
  parameters: {
    docs: {
      description: {
        story: "通过 `strokeWidth` 属性来控制进度条宽度。",
      },
      source: {
        code: `const [rate, setRate] = useState(70)

const add = () => {
  setRate(r => format(r + 20))
}

const reduce = () => {
  setRate(r => format(r - 20))
}

return (
  <>
    <Space wrap>
      <Circle strokeWidth={60} rate={rate} text="宽度定制" />
      <Circle color="#ee0a24" layerColor="#ebedf0" rate={rate} text="颜色定制" />
      <Circle
        color={{
          "0%": "#3fecff",
          "100%": "#6149f6",
        }}
        rate={rate}
        text="渐变色"
      />
      <Circle
        color="#07c160"
        clockwise={false}
        rate={rate}
        text="逆时针"
        style={{ marginTop: 15 }}
      />
      <Circle
        color="#7232dd"
        clockwise={false}
        size={120}
        rate={rate}
        text="大小定制"
        style={{ marginTop: 15 }}
      />
    </Space>

    <Flex style={{ marginTop: 15 }} align="center" justify="center">
      <Button.Group>
        <Button onClick={add} type="primary">
          增加
        </Button>
        <Button onClick={reduce} type="danger">
          减少
        </Button>
      </Button.Group>
    </Flex>
  </>
)`,
      },
    },
  },
  render: () => {
    return CustomExample();
  },
};

export const StartPosition: Story = {
  name: "起始位置",
  parameters: {
    docs: {
      description: {
        story: "进度条默认从顶部开始，可以通过 `startPosition` 属性设置起始位置。",
      },
    },
  },
  render: _args => (
    <Space>
      <Circle defaultRate={70} text="左侧" startPosition="left" />
      <Circle defaultRate={70} text="右侧" startPosition="right" />
      <Circle defaultRate={70} text="底部" startPosition="bottom" />
    </Space>
  ),
};
