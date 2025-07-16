import type { Meta, StoryObj } from "@storybook/react-vite";
import BaseDemo from "../demo/base";
import Stepper from "../index";

const meta = {
  id: "components-stepper",
  title: "Form/Stepper",
  component: Stepper,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字，支持长按调整。",
      },
      toc: false,
    },
  },
  argTypes: {
    // 基础
    value: {
      description: "当前输入的值",
      table: {
        type: { summary: "number | null" },
        required: false,
        category: "基础",
      },
    },
    defaultValue: {
      description: "默认值",
      table: {
        type: { summary: "number | null" },
        defaultValue: { summary: "0" },
        required: false,
        category: "基础",
      },
    },
    min: {
      description: "最小值",
      table: {
        type: { summary: "number" },
        required: false,
        category: "基础",
      },
    },
    max: {
      description: "最大值",
      table: {
        type: { summary: "number" },
        required: false,
        category: "基础",
      },
    },
    step: {
      description: "步长，每次点击时改变的值",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "1" },
        required: false,
        category: "基础",
      },
    },
    name: {
      description: "标识符，可以在 change 事件回调参数中获取",
      table: {
        type: { summary: "string" },
        required: false,
        category: "基础",
      },
    },
    disabled: {
      description: "是否禁用步进器",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
        category: "基础",
      },
    },
    integer: {
      description: "是否只允许输入整数",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
        category: "基础",
      },
    },
    allowEmpty: {
      description: "是否允许输入的值为空",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
        category: "基础",
      },
    },
    style: {
      description: "自定义样式",
      table: {
        type: { summary: "CSSProperties" },
        required: false,
        category: "基础",
      },
    },
    className: {
      description: "自定义类名",
      table: {
        type: { summary: "string" },
        required: false,
        category: "基础",
      },
    },
    // 外观
    inputWidth: {
      description: "输入框宽度，默认单位为 px",
      table: {
        type: { summary: "number | string" },
        defaultValue: { summary: "32px" },
        required: false,
        category: "外观",
      },
    },
    buttonSize: {
      description: "按钮大小以及输入框高度，默认单位为 px",
      table: {
        type: { summary: "number | string" },
        defaultValue: { summary: "28px" },
        required: false,
        category: "外观",
      },
    },
    decimalLength: {
      description: "固定显示的小数位数",
      table: {
        type: { summary: "number | string" },
        required: false,
        category: "外观",
      },
    },
    theme: {
      description: "样式风格，可选值为 round",
      table: {
        type: { summary: "string" },
        required: false,
        category: "外观",
      },
    },
    placeholder: {
      description: "输入框占位提示文字",
      table: {
        type: { summary: "string" },
        required: false,
        category: "外观",
      },
    },
    disablePlus: {
      description: "是否禁用增加按钮",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
        category: "外观",
      },
    },
    disableMinus: {
      description: "是否禁用减少按钮",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
        category: "外观",
      },
    },
    disableInput: {
      description: "是否禁用输入框",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
        category: "外观",
      },
    },
    showPlus: {
      description: "是否显示增加按钮",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        required: false,
        category: "外观",
      },
    },
    showMinus: {
      description: "是否显示减少按钮",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        required: false,
        category: "外观",
      },
    },
    showInput: {
      description: "是否显示输入框",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        required: false,
        category: "外观",
      },
    },
    longPress: {
      description: "是否开启长按手势",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        required: false,
        category: "外观",
      },
    },
    // 事件
    onChange: {
      description: "当绑定值变化时触发的事件",
      table: {
        type: { summary: "(val: number | null, detail?: { name: string }) => void" },
        required: false,
        category: "事件",
      },
    },
    onOverlimit: {
      description: "点击不可用的按钮时触发",
      table: {
        type: { summary: "(actinType: string) => void" },
        required: false,
        category: "事件",
      },
    },
    onPlus: {
      description: "点击增加按钮时触发",
      table: {
        type: { summary: "(event: React.MouseEvent, val: number | null) => void" },
        required: false,
        category: "事件",
      },
    },
    onMinus: {
      description: "点击减少按钮时触发",
      table: {
        type: { summary: "(event: React.MouseEvent, val: number | null) => void" },
        required: false,
        category: "事件",
      },
    },
    onFocus: {
      description: "输入框聚焦时触发",
      table: {
        type: { summary: "React.FocusEventHandler<HTMLInputElement>" },
        required: false,
        category: "事件",
      },
    },
    onBlur: {
      description: "输入框失焦时触发",
      table: {
        type: { summary: "React.FocusEventHandler<HTMLInputElement>" },
        required: false,
        category: "事件",
      },
    },
  },
} satisfies Meta<typeof Stepper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Partial<Story> = {
  name: "基础示例",
  render: () => <BaseDemo />,
  parameters: {
    docs: {
      description: {
        story: "通过 `value` 绑定输入值，可以通过 `onChange` 事件监听到输入值的变化。",
      },
      source: {
        code: `
import { Cell, Stepper, Toast } from "@react-vant-next/ui";
import React, { useState } from "react";

let timer;

export default () => {
  const [value9, setValue9] = useState(0);
  const [value2, setValue2] = useState(1);
  const [value3, setValue3] = useState(1);
  const [value4, setValue4] = useState(1);
  const [value5, setValue5] = useState(1);
  const [value6, setValue6] = useState(1);
  const [value7, setValue7] = useState(1);
  const [value8, setValue8] = useState(1);

  return (
    <div className="demo-stepper">
      <Cell title="基础用法" center>
        <Stepper
          onOverlimit={() => console.log("overlimit")}
          onMinus={() => console.log("minus")}
          onPlus={() => console.log("plus")}
          onChange={v => console.log(v)}
        />
      </Cell>
      <Cell title="设置最小值" center>
        <Stepper
          min={0}
          value={value9}
          onChange={(v) => {
            setValue9(v);
          }}
        />
      </Cell>
      <Cell title="步长设置" center>
        <Stepper value={value2} step={2} onChange={val => setValue2(val)} />
      </Cell>
      <Cell title="设置输入范围" center>
        <Stepper
          value={value3}
          step={2}
          min={5}
          max={8}
          onChange={val => setValue3(val)}
        />
      </Cell>
      <Cell title="禁用状态" center>
        <Stepper value={1} disabled />
      </Cell>
      <Cell title="禁用输入框" center>
        <Stepper value={value4} onChange={val => setValue4(val)} disableInput />
      </Cell>
      <Cell title="固定小数位数" center>
        <Stepper
          value={value5}
          onChange={val => setValue5(val)}
          step={0.2}
          decimalLength={1}
        />
      </Cell>
      <Cell title="自定义大小" center>
        <Stepper
          value={value6}
          onChange={val => setValue6(val)}
          inputWidth="44px"
          buttonSize="28px"
        />
      </Cell>
      <Cell title="异步变更" center>
        <Stepper
          value={value7}
          onChange={(val) => {
            Toast.loading({ forbidClick: true });
            clearTimeout(timer);
            timer = setTimeout(() => {
              Toast.clear();
              setValue7(val);
            }, 500);
          }}
        />
      </Cell>
      <Cell title="圆角风格" center>
        <Stepper
          value={value8}
          onChange={val => setValue8(val)}
          theme="round"
          buttonSize="22"
          disableInput
        />
      </Cell>
    </div>
  );
};
        `,
      },
    },
  },
};
