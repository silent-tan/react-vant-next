import type { Meta, StoryObj } from "@storybook/react-vite";
import RefExample from "../demo/ref";
import CountDown from "../index";
import "../demo/style.less";

const meta = {
  id: "components-count-down",
  title: "Display/CountDown",
  component: CountDown,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "用于实时展示倒计时数值，支持毫秒精度。",
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
      description: "自定义内容",
      table: {
        category: "基础",
        type: { summary: "(currentTime: CurrentTime) => React.ReactNode" },
      },
    },
    time: {
      control: { type: "number" },
      description: "倒计时时长，单位毫秒",
      table: {
        category: "基础",
        type: { summary: "number | string" },
        defaultValue: { summary: "0" },
      },
    },
    // 外观
    format: {
      control: { type: "text" },
      description: "时间格式",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "'HH:mm:ss'" },
      },
    },
    // 状态
    autoStart: {
      control: { type: "boolean" },
      description: "是否自动开始倒计时",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    millisecond: {
      control: { type: "boolean" },
      description: "是否开启毫秒级渲染",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    // 事件
    onChange: {
      description: "倒计时变化时触发",
      table: {
        category: "事件",
        type: { summary: "(currentTime: CurrentTime) => void" },
      },
    },
    onFinish: {
      description: "倒计时结束时触发",
      table: {
        category: "事件",
        type: { summary: "() => void" },
      },
    },
  },
} satisfies Meta<typeof CountDown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "基础用法",
  render: _args => <CountDown time={30 * 60 * 60 * 1000} />,
  parameters: {
    docs: {
      description: {
        story: "`time` 属性表示倒计时总时长，单位为毫秒。",
      },
    },
  },
};

export const CustomFormat: Story = {
  name: "自定义格式",
  render: _args => (
    <CountDown time={30 * 60 * 60 * 1000} format="DD 天 HH 时 mm 分 ss 秒" />
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 `format` 属性设置倒计时文本的内容。",
      },
    },
  },
};

export const Millisecond: Story = {
  name: "毫秒级渲染",
  render: _args => (
    <CountDown time={30 * 60 * 60 * 1000} millisecond format="HH:mm:ss:SS" />
  ),
  parameters: {
    docs: {
      description: {
        story: "倒计时默认每秒渲染一次，设置 `millisecond` 属性可以开启毫秒级渲染。",
      },
    },
  },
};

export const CustomStyle: Story = {
  name: "自定义样式",
  render: _args => (
    <div className="demo-count-down">
      <CountDown time={30 * 60 * 60 * 1000} millisecond format="HH:mm:ss:SS">
        {timeData => (
          <>
            <span className="block">{timeData.hours}</span>
            <span className="colon">:</span>
            <span className="block">{timeData.minutes}</span>
            <span className="colon">:</span>
            <span className="block">{timeData.seconds}</span>
          </>
        )}
      </CountDown>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "通过`children`自定义倒计时的样式，支持 [react render prop](https://reactjs.org/docs/render-props.html) 文档。",
      },
      source: {
        language: "tsx",
        code: `<div className="demo-count-down">
  <CountDown time={30 * 60 * 60 * 1000} millisecond format="HH:mm:ss:SS">
    {timeData => (
      <>
        <span className="block">{timeData.hours}</span>
        <span className="colon">:</span>
        <span className="block">{timeData.minutes}</span>
        <span className="colon">:</span>
        <span className="block">{timeData.seconds}</span>
      </>
    )}
  </CountDown>
</div>`,
      },
    },
  },
};

export const ManualControl: Story = {
  name: "手动控制",
  render: _args => <RefExample />,
  parameters: {
    docs: {
      description: {
        story: "通过 ref 获取到组件实例后，可以调用 `start`、`pause`、`reset` 方法。",
      },
      source: {
        language: "tsx",
        code: `import type { CountDownInstance } from "@react-vant-next/ui";
import { PauseCircleO, PlayCircleO, Replay } from "@react-vant-next/icons";
import { CountDown, Grid, Toast } from "@react-vant-next/ui";
import React, { useRef } from "react";

export default function RefExample() {
  const ref = useRef<CountDownInstance>(void 0);
  return (
    <>
      <CountDown
        ref={ref}
        time={3000}
        millisecond
        format="ss:SSS"
        autoStart={false}
        onFinish={() => Toast.info("倒计时结束")}
      />
      <br />
      <Grid columnNum={3}>
        <Grid.Item
          icon={<PlayCircleO />}
          text="开始"
          onClick={() => ref.current.start()}
        />
        <Grid.Item
          icon={<PauseCircleO />}
          text="暂停"
          onClick={() => ref.current.pause()}
        />
        <Grid.Item
          icon={<Replay />}
          text="重置"
          onClick={() => ref.current.reset()}
        />
      </Grid>
    </>
  );
}`,
      },
    },
  },
};

export const Events: Story = {
  name: "事件监听",
  render: (_args) => {
    const onFinish = () => {
      console.log("倒计时结束");
    };

    const onChange = (currentTime) => {
      console.log("当前剩余时间：", currentTime);
    };

    return (
      <CountDown
        time={5 * 1000}
        format="ss:SSS"
        millisecond
        onChange={onChange}
        onFinish={onFinish}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `onChange` 事件监听倒计时的变化，通过 `onFinish` 事件监听倒计时结束。",
      },
      source: {
        language: "tsx",
        code: `const onFinish = () => {
  console.log('倒计时结束');
};

const onChange = (currentTime) => {
  console.log('当前剩余时间：', currentTime);
};

<CountDown
  time={5 * 1000}
  format="ss:SSS"
  millisecond
  onChange={onChange}
  onFinish={onFinish}
/>`,
      },
    },
  },
};
