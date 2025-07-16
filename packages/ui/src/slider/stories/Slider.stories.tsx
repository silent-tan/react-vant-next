import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toast } from "@react-vant-next/ui";
import { useState } from "react";
import { Slider } from "../index";
import "../style/index.less";

const meta = {
  id: "form-slider",
  title: "Form/Slider",
  component: Slider,
  parameters: {
    docs: {
      description: {
        component: "滑动输入条，用于在给定的范围内选择一个值。",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    // 基础
    value: {
      description: "当前进度百分比，在双滑块模式下为数组格式",
      table: {
        type: { summary: "number | [number, number]" },
        category: "基础",
      },
      control: { type: "number" },
    },
    range: {
      description: "是否开启双滑块模式",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "基础",
      },
      control: "boolean",
    },
    min: {
      description: "最小值",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
        category: "基础",
      },
      control: { type: "number" },
    },
    max: {
      description: "最大值",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "100" },
        category: "基础",
      },
      control: { type: "number" },
    },
    step: {
      description: "步长",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "1" },
        category: "基础",
      },
      control: { type: "number" },
    },
    disabled: {
      description: "是否禁用滑块",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "状态",
      },
      control: "boolean",
    },
    readOnly: {
      description: "是否为只读状态，只读状态下无法修改滑块的值",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "状态",
      },
      control: "boolean",
    },
    style: {
      description: "自定义样式",
      table: {
        type: { summary: "CSSProperties" },
        category: "基础",
      },
    },
    className: {
      description: "自定义类名",
      table: {
        type: { summary: "string" },
        category: "基础",
      },
    },
    // 外观
    vertical: {
      description: "是否垂直展示",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "外观",
      },
      control: "boolean",
    },
    reverse: {
      description: "是否将进度条反转",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "外观",
      },
      control: "boolean",
    },
    barHeight: {
      description: "进度条高度，默认单位为 `px`",
      table: {
        type: { summary: "number | string" },
        category: "外观",
      },
      control: { type: "number" },
    },
    buttonSize: {
      description: "滑块按钮大小，默认单位为 `px`",
      table: {
        type: { summary: "number | string" },
        category: "外观",
      },
      control: { type: "number" },
    },
    activeColor: {
      description: "进度条激活态颜色",
      table: {
        type: { summary: "string" },
        category: "外观",
      },
      control: "color",
    },
    inactiveColor: {
      description: "进度条非激活态颜色",
      table: {
        type: { summary: "string" },
        category: "外观",
      },
      control: "color",
    },
    button: {
      description: "自定义滑块按钮",
      table: {
        type: { summary: "React.ReactNode | (({ value }: { value: SliderValue }) => React.ReactNode)" },
        category: "外观",
      },
    },
    leftButton: {
      description: "自定义左侧滑块按钮（双滑块模式下）",
      table: {
        type: { summary: "React.ReactNode" },
        category: "外观",
      },
    },
    rightButton: {
      description: "自定义右侧滑块按钮（双滑块模式下）",
      table: {
        type: { summary: "React.ReactNode" },
        category: "外观",
      },
    },
    // 事件
    onChange: {
      description: "进度变化时实时触发",
      table: {
        type: { summary: "function" },
        category: "事件",
      },
      action: "onChange",
    },
    onChangeAfter: {
      description: "进度变化且结束拖动后触发",
      table: {
        type: { summary: "function" },
        category: "事件",
      },
      action: "onChangeAfter",
    },
    onDragStart: {
      description: "开始拖动时触发",
      table: {
        type: { summary: "function" },
        category: "事件",
      },
      action: "onDragStart",
    },
    onDragEnd: {
      description: "结束拖动时触发",
      table: {
        type: { summary: "function" },
        category: "事件",
      },
      action: "onDragEnd",
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Story = {
  name: "基础用法",
  render: () => {
    const [value, setValue] = useState(10);
    const onChangeAfter = (v: number) => Toast.info(`当前值：${v}`);

    return <Slider value={value} onChange={setValue} onChangeAfter={onChangeAfter} />;
  },
  parameters: {
    docs: {
      description: {
        story: "进度条默认为蓝色，使用 `value` 属性表示当前进度。",
      },
      source: {
        language: "tsx",
        code: `
import { useState } from "react";
import { Slider, Toast } from "@react-vant-next/ui";

export default () => {
  const [value, setValue] = useState(10);
  const onChangeAfter = v => Toast.info(\`当前值：\${v}\`);

  return <Slider value={value} onChange={setValue} onChangeAfter={onChangeAfter} />;
};`,
      },
    },
  },
};

// 双滑块
export const Range: Story = {
  name: "双滑块",
  render: () => {
    const [value, setValue] = useState<[number, number]>([20, 60]);
    const onChangeAfter = (v: [number, number]) => Toast.info(`当前值：${v}`);

    return (
      <Slider range value={value} onChange={setValue} onChangeAfter={onChangeAfter} />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "添加 `range` 属性就可以开启双滑块模式，确保 `value` 的值是一个数组。",
      },
      source: {
        language: "tsx",
        code: `
import { useState } from "react";
import { Slider, Toast } from "@react-vant-next/ui";

export default () => {
  const [value, setValue] = useState([10, 50]);
  const onChangeAfter = v => Toast.info(\`当前值：\${v}\`);

  return <Slider range value={value} onChange={setValue} onChangeAfter={onChangeAfter} />;
};`,
      },
    },
  },
};

// 指定选择范围
export const MinMax: Story = {
  name: "指定选择范围",
  render: () => {
    const [value, setValue] = useState(50);
    const onChangeAfter = (v: number) => Toast.info(`当前值：${v}`);

    return (
      <Slider min={-50} max={50} value={value} onChange={setValue} onChangeAfter={onChangeAfter} />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "使用 `min` 和 `max` 属性指定滑块的最小值和最大值。",
      },
      source: {
        language: "tsx",
        code: `
import { useState } from "react";
import { Slider, Toast } from "@react-vant-next/ui";

export default () => {
  const [value, setValue] = useState(10);
  const onChangeAfter = v => Toast.info(\`当前值：\${v}\`);

  return (
    <Slider min={-50} max={50} value={value} onChange={setValue} onChangeAfter={onChangeAfter} />
  );
};`,
      },
    },
  },
};

// 禁用
export const Disabled: Story = {
  name: "禁用",
  render: () => {
    const [value, setValue] = useState(50);
    const onChangeAfter = (v: number) => Toast.info(`当前值：${v}`);

    return (
      <Slider value={value} onChange={setValue} onChangeAfter={onChangeAfter} disabled />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "添加 `disabled` 属性即可禁用滑块。",
      },
      source: {
        language: "tsx",
        code: `
import { useState } from "react";
import { Slider, Toast } from "@react-vant-next/ui";

export default () => {
  const [value, setValue] = useState(10);
  const onChangeAfter = v => Toast.info(\`当前值：\${v}\`);

  return <Slider disabled value={value} onChange={setValue} onChangeAfter={onChangeAfter} />;
};`,
      },
    },
  },
};

// 指定步长
export const Step: Story = {
  name: "指定步长",
  render: () => {
    const [value, setValue] = useState(10);
    const onChangeAfter = (v: number) => Toast.info(`当前值：${v}`);

    return (
      <Slider value={value} step={10} onChange={setValue} onChangeAfter={onChangeAfter} />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `step` 属性设置步长，默认为 1。",
      },
      source: {
        language: "tsx",
        code: `
import { useState } from "react";
import { Slider, Toast } from "@react-vant-next/ui";

export default () => {
  const [value, setValue] = useState(10);
  const onChangeAfter = v => Toast.info(\`当前值：\${v}\`);

  return <Slider step={10} value={value} onChange={setValue} onChangeAfter={onChangeAfter} />;
};`,
      },
    },
  },
};

// 自定义样式
export const CustomStyle: Story = {
  name: "自定义样式",
  render: () => {
    const [value, setValue] = useState(10);
    const onChangeAfter = (v: number) => Toast.info(`当前值：${v}`);

    return (
      <Slider
        barHeight={4}
        activeColor="#ee0a24"
        value={value}
        onChange={setValue}
        onChangeAfter={onChangeAfter}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `barHeight` 设置进度条高度，`activeColor` 设置进度条激活态颜色。",
      },
      source: {
        language: "tsx",
        code: `
import { useState } from "react";
import { Slider, Toast } from "@react-vant-next/ui";

export default () => {
  const [value, setValue] = useState(10);
  const onChangeAfter = v => Toast.info(\`当前值：\${v}\`);

  return (
    <Slider
      barHeight={4}
      activeColor="#ee0a24"
      value={value}
      onChange={setValue}
      onChangeAfter={onChangeAfter}
    />
  );
};`,
      },
    },
  },
};

// 自定义按钮
export const CustomButton: Story = {
  name: "自定义按钮",
  render: () => {
    const [value, setValue] = useState(10);
    const onChangeAfter = (v: number) => Toast.info(`当前值：${v}`);

    return (
      <Slider
        button={<div className="custom-slider-button">{value}</div>}
        value={value}
        onChange={setValue}
        onChangeAfter={onChangeAfter}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `button` 属性可以自定义滑块按钮的内容。",
      },
      source: {
        language: "tsx",
        code: `
import { useState } from "react";
import { Slider, Toast } from "@react-vant-next/ui";
import "./demo/style.less";

export default () => {
  const [value, setValue] = useState(10);
  const onChangeAfter = v => Toast.info(\`当前值：\${v}\`);

  return (
    <Slider
      button={<div className="custom-slider-button">{value}</div>}
      value={value}
      onChange={setValue}
      onChangeAfter={onChangeAfter}
    />
  );
};`,
      },
    },
  },
};

// 垂直方向
export const Vertical: Story = {
  name: "垂直方向",
  render: () => {
    const [value1, setValue1] = useState(50);
    const [value2, setValue2] = useState<[number, number]>([20, 50]);
    const onChangeAfter = (v: number | [number, number]) => Toast.info(`当前值：${v}`);

    return (
      <div style={{ height: 150, paddingLeft: 30 }}>
        <Slider
          vertical
          style={{ marginRight: 100 }}
          value={value1}
          onChange={setValue1}
          onChangeAfter={onChangeAfter}
        />
        <Slider range vertical value={value2} onChange={setValue2} onChangeAfter={onChangeAfter} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "设置 `vertical` 属性后，滑块会垂直展示，且高度为 100% 父元素高度。",
      },
      source: {
        language: "tsx",
        code: `
import { useState } from "react";
import { Slider, Toast } from "@react-vant-next/ui";

export default () => {
  const [value1, setValue1] = useState(50);
  const [value2, setValue2] = useState<[number, number]>([20, 50]);
  const onChangeAfter = v => Toast.info(\`当前值：\${v}\`);

  return (
    <div style={{ height: 150, paddingLeft: 30 }}>
      <Slider
        vertical
        style={{ marginRight: 100 }}
        value={value1}
        onChange={setValue1}
        onChangeAfter={onChangeAfter}
      />
      <Slider range vertical value={value2} onChange={setValue2} onChangeAfter={onChangeAfter} />
    </div>
  );
};`,
      },
    },
  },
};

// 事件监听组件
function EventsExample() {
  const [value, setValue] = useState(50);
  const [dragStatus, setDragStatus] = useState("");

  const onChange = (v) => {
    setValue(v);
    Toast.info(`onChange: ${v}`);
  };

  const onChangeAfter = (v) => {
    Toast.info(`onChangeAfter: ${v}`);
  };

  const onDragStart = (e, v) => {
    setDragStatus("开始拖动");
    Toast.info(`onDragStart: ${v}`);
  };

  const onDragEnd = (e, v) => {
    setDragStatus("结束拖动");
    Toast.info(`onDragEnd: ${v}`);
  };

  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        当前状态:
        {dragStatus}
      </div>
      <Slider
        value={value}
        onChange={onChange}
        onChangeAfter={onChangeAfter}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      />
    </div>
  );
}

// 事件监听
export const Events: Story = {
  name: "事件监听",
  render: () => <EventsExample />,
  parameters: {
    docs: {
      description: {
        story: "通过 `onChange`、`onChangeAfter`、`onDragStart`、`onDragEnd` 事件来监听滑块的变化。",
      },
      source: {
        language: "tsx",
        code: `
import { useState } from "react";
import { Slider, Toast } from "@react-vant-next/ui";

export default () => {
  const [value, setValue] = useState(50);
  const [dragStatus, setDragStatus] = useState("");

  const onChange = (v) => {
    setValue(v);
    Toast.info(\`onChange: \${v}\`);
  };

  const onChangeAfter = (v) => {
    Toast.info(\`onChangeAfter: \${v}\`);
  };

  const onDragStart = (e, v) => {
    setDragStatus("开始拖动");
    Toast.info(\`onDragStart: \${v}\`);
  };

  const onDragEnd = (e, v) => {
    setDragStatus("结束拖动");
    Toast.info(\`onDragEnd: \${v}\`);
  };

  return (
    <div>
      <div style={{ marginBottom: 10 }}>当前状态: {dragStatus}</div>
      <Slider
        value={value}
        onChange={onChange}
        onChangeAfter={onChangeAfter}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      />
    </div>
  );
};
`,
      },
    },
  },
};
