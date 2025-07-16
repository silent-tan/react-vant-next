import type { Meta, StoryObj } from "@storybook/react-vite";
import type { InputInstance } from "../PropsType";
import { Button, Cell, Input, Toast } from "@react-vant-next/ui";
import { useRef, useState } from "react";

import { BasicExample } from "../demo/base";

// 更多关于如何设置故事的信息: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  id: "form-input",
  title: "Form/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "表单中的输入框组件。没有额外的样式",
      },
    },
  },
  argTypes: {
    type: {
      control: { type: "select", options: ["text", "tel", "digit", "number", "search", "password"] },
      description: "输入框类型",
      table: {
        type: { summary: "InputType" },
        defaultValue: { summary: "'text'" },
        required: false,
      },
    },
    value: {
      control: { type: "text" },
      description: "输入框当前值",
      table: {
        type: { summary: "string" },
        required: false,
      },
    },
    defaultValue: {
      control: { type: "text" },
      description: "输入框默认值",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "''" },
        required: false,
      },
    },
    placeholder: {
      control: { type: "text" },
      description: "输入框占位提示文字",
      table: {
        type: { summary: "string" },
        required: false,
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "是否禁用输入框",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
      },
    },
    readOnly: {
      control: { type: "boolean" },
      description: "是否只读",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
      },
    },
    clearable: {
      control: { type: "boolean" },
      description: "是否启用清除图标，点击清除图标后会清空输入框",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
      },
    },
    clearIcon: {
      description: "自定义清除图标",
      table: {
        type: { summary: "React.ReactNode" },
        required: false,
      },
    },
    clearTrigger: {
      control: { type: "select", options: ["always", "focus"] },
      description: "显示清除图标的时机，always 表示输入框不为空时展示，focus 表示输入框聚焦且不为空时展示",
      table: {
        type: { summary: "InputClearTrigger" },
        defaultValue: { summary: "'focus'" },
        required: false,
      },
    },
    align: {
      control: { type: "select", options: ["left", "center", "right"] },
      description: "输入框对齐方式",
      table: {
        type: { summary: "InputTextAlign" },
        required: false,
      },
    },
    autoFocus: {
      control: { type: "boolean" },
      description: "是否自动聚焦，iOS 系统不支持该属性",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
      },
    },
    maxLength: {
      control: { type: "number" },
      description: "输入的最大字符数",
      table: {
        type: { summary: "number" },
        required: false,
      },
    },
    prefix: {
      description: "自定义前置内容",
      table: {
        type: { summary: "React.ReactNode" },
        required: false,
      },
    },
    suffix: {
      description: "自定义后置内容",
      table: {
        type: { summary: "React.ReactNode" },
        required: false,
      },
    },
    onChange: {
      description: "输入框内容变化时触发",
      table: {
        type: { summary: "(val: string) => void" },
        required: false,
      },
    },
    onClear: {
      description: "点击清除按钮时触发",
      table: {
        type: { summary: "(e: React.MouseEvent<HTMLDivElement>) => void" },
        required: false,
      },
    },
    onFocus: {
      description: "输入框获得焦点时触发",
      table: {
        type: { summary: "(e: React.FocusEvent<HTMLInputElement>) => void" },
        required: false,
      },
    },
    onBlur: {
      description: "输入框失去焦点时触发",
      table: {
        type: { summary: "(e: React.FocusEvent<HTMLInputElement>) => void" },
        required: false,
      },
    },
    onOverlimit: {
      description: "当输入值超出maxLength时触发",
      table: {
        type: { summary: "() => void" },
        required: false,
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Default: Story = {
  name: "基础用法",
  render: () => <BasicExample />,
  parameters: {
    docs: {
      description: {
        story: "可以通过 `value` 和 `onChange` 双向绑定输入框的值，通过 `placeholder` 设置占位提示文字。",
      },
      source: {
        type: "code",
        language: "tsx",
        code: `
import { Cell, hooks, Input } from "@react-vant-next/ui";

export function BasicExample() {
  const [state, updateState] = hooks.useSetState({
    text: "",
    tel: "",
    digit: "",
    num: "",
    password: "",
  });
  return (
    <>
      <Cell>
        <Input
          value={state.text}
          onChange={text => updateState({ text })}
          placeholder="请输入文本"
          clearable
        />
      </Cell>
      <Cell>
        <Input
          value={state.tel}
          type="tel"
          onChange={tel => updateState({ tel })}
          placeholder="请输入手机号"
        />
      </Cell>
      <Cell>
        <Input
          value={state.digit}
          type="digit"
          onChange={digit => updateState({ digit })}
          placeholder="请输入整数"
        />
      </Cell>
      <Cell>
        <Input
          value={state.num}
          type="number"
          onChange={num => updateState({ num })}
          placeholder="请输入数字"
        />
      </Cell>

      <Cell>
        <Input
          value={state.password}
          type="password"
          onChange={password => updateState({ password })}
          placeholder="请输入密码"
        />
      </Cell>
    </>
  );
}
`,
      },
    },
  },
};

// 显示清除图标
export const Clearable: Story = {
  name: "清除图标",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Cell>
        <Input placeholder="显示清除图标" clearable />
      </Cell>
      <Cell>
        <Input placeholder="聚焦时显示清除图标" clearable clearTrigger="focus" />
      </Cell>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 `clearable` 属性设置是否显示清除图标，通过 `clearTrigger` 属性设置显示清除图标的时机，`always` 表示输入框不为空时展示，`focus` 表示输入框聚焦且不为空时展示。",
      },
      source: {
        language: "tsx",
        code: `<Cell>
  <Input placeholder="显示清除图标" clearable />
</Cell>
<Cell>
  <Input placeholder="聚焦时显示清除图标" clearable clearTrigger="focus" />
</Cell>`,
      },
    },
  },
};

// 插入内容
export const PrefixSuffix: Story = {
  name: "插入内容",
  render: () => (
    <Cell>
      <Input
        prefix="💁"
        suffix={<Button size="small" type="primary">发送</Button>}
        placeholder="请输入短信验证码"
      />
    </Cell>
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 `prefix` 和 `suffix` 属性设置输入框的前置和后置内容。",
      },
      source: {
        language: "tsx",
        code: `
<Cell>
  <Input
    prefix="💁"
    suffix={<Button size="small" type="primary">发送</Button>}
    placeholder="请输入短信验证码"
  />
</Cell>`,
      },
    },
  },
};

// 多行输入
export const TextArea: Story = {
  name: "多行输入",
  render: () => (
    <>
      <Cell>
        <Input.TextArea placeholder="多行输入" />
      </Cell>
      <Cell style={{ marginTop: 10 }}>
        <Input.TextArea placeholder="自适应高度" autoSize />
      </Cell>
      <Cell style={{ marginTop: 10 }}>
        <Input.TextArea
          placeholder="最小高度80，最大高度120"
          autoSize={{ minHeight: 80, maxHeight: 120 }}
        />
      </Cell>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: "`Input.TextArea` 可用于多行输入， `autoSize` 可以使文本域自适应高度，还能设置其最小和最大高度。",
      },
      source: {
        language: "tsx",
        code: `
import React, { useState } from 'react';
import { Input, Cell } from '@react-vant-next/ui';

export default () => {
  return (
    <>
      <Cell>
        <Input.TextArea placeholder="多行输入" />
      </Cell>
      <Cell style={{ marginTop: 10 }}>
        <Input.TextArea placeholder="自适应高度" autoSize />
      </Cell>
      <Cell style={{ marginTop: 10 }}>
        <Input.TextArea
          placeholder="最小高度80，最大高度120"
          autoSize={{ minHeight: 80, maxHeight: 120 }}
        />
      </Cell>
    </>
  );
};`,
      },
    },
  },
};

// 字数统计
export const WordLimit: Story = {
  name: "字数统计",
  render: () => (
    <>
      <Cell>
        <Input
          placeholder="最多输入10个字符"
          maxLength={10}
          onOverlimit={() => Toast.info("不能超过10个字符哦🍺")}
        />
      </Cell>
      <Cell style={{ marginTop: 10 }}>
        <Input.TextArea placeholder="字数统计" maxLength={50} showWordLimit />
      </Cell>
      <Cell style={{ marginTop: 10 }}>
        <Input.TextArea
          placeholder="自定义输出"
          showWordLimit={({ currentCount }) => (
            <span>
              已经输入
              {currentCount}
              个字啦 ✍️
            </span>
          )}
        />
      </Cell>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 `maxLength` 和 `showWordLimit` 可以开启输入框字数显示。",
      },
      source: {
        language: "tsx",
        code: `
import React, { useState } from 'react';
import { Toast, Input, Cell } from '@react-vant-next/ui';

export default () => {
  return (
    <>
      <Cell>
        <Input
          placeholder="最多输入10个字符"
          maxLength={10}
          onOverlimit={() => Toast.info('不能超过10个字符哦🍺')}
        />
      </Cell>
      <Cell style={{ marginTop: 10 }}>
        <Input.TextArea placeholder="字数统计" maxLength={50} showWordLimit />
      </Cell>
      <Cell style={{ marginTop: 10 }}>
        <Input.TextArea
          placeholder="自定义输出"
          showWordLimit={({ currentCount }) => <span>已经输入{currentCount}个字啦 ✍️</span>}
        />
      </Cell>
    </>
  );
};
`,
      },
    },
  },
};

// 对齐方式
export const Align: Story = {
  name: "对齐方式",
  render: () => {
    const [value, setValue] = useState("");
    return (
      <>
        <Cell>
          <Input placeholder="内容剧中" value={value} onChange={setValue} align="center" />
        </Cell>
        <Cell>
          <Input placeholder="内容右对齐" value={value} onChange={setValue} align="right" />
        </Cell>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `align` 属性设置输入框的对齐方式，可选值为 `left`、`center` 和 `right`。",
      },
      source: {
        language: "tsx",
        code: `
import React, { useState } from 'react';
import { Input, Cell } from '@react-vant-next/ui';

export default () => {
  const [value, setValue] = useState('');
  return (
    <>
      <Cell>
        <Input placeholder="内容剧中" value={value} onChange={setValue} align="center" />
      </Cell>
      <Cell>
        <Input placeholder="内容右对齐" value={value} onChange={setValue} align="right" />
      </Cell>
    </>
  );
};
`,
      },
    },
  },
};

// 方法调用
export const Methods: Story = {
  name: "方法调用",
  render: () => {
    return MethodsExample();
  },
  parameters: {
    docs: {
      description: {
        story: "通过 ref 可以获取到 Input 实例并调用实例方法，比如 `focus`、`blur` 和 `clear` 等。",
      },
      source: {
        language: "tsx",
        code: `import { useRef } from 'react';
import { Input, Button } from '@react-vant-next/ui';
import type { InputInstance } from '@react-vant-next/ui';

export default () => {
  const inputRef = useRef<InputInstance>(null);

  const focus = () => {
    inputRef.current?.focus();
  };

  const blur = () => {
    inputRef.current?.blur();
  };

  const clear = () => {
    inputRef.current?.clear();
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Cell>
        <Input
          ref={inputRef}
          placeholder="获取输入框方法"
          clearable
        />
      </Cell>
      <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
        <Button type="primary" size="small" onClick={focus}>聚焦</Button>
        <Button type="info" size="small" onClick={blur}>失焦</Button>
        <Button type="default" size="small" onClick={clear}>清空</Button>
      </div>
    </div>
  );
};`,
      },
    },
  },
};

// 输入框状态
export const DisabledAndReadonly: Story = {
  name: "输入框状态",
  render: () => {
    const [value1, setValue1] = useState("只读模式");
    const [value2, setValue2] = useState("禁用模式");
    return (
      <>
        <Cell>
          <Input value={value1} onChange={setValue1} readOnly />
        </Cell>
        <Cell>
          <Input value={value2} onChange={setValue2} disabled />
        </Cell>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `disabled` 属性禁用输入框，通过 `readOnly` 属性将输入框设置为只读状态。",
      },
      source: {
        language: "tsx",
        code: `
const [value1, setValue1] = useState('只读模式');
const [value2, setValue2] = useState('禁用模式');
return (
  <>
    <Cell>
      <Input value={value1} onChange={setValue1} readOnly />
    </Cell>
    <Cell>
      <Input value={value2} onChange={setValue2} disabled />
    </Cell>
  </>
);`,
      },
    },
  },
};

function MethodsExample() {
  const inputRef = useRef<InputInstance>(null);

  const focus = () => {
    inputRef.current?.focus();
  };

  const blur = () => {
    inputRef.current?.blur();
  };

  const clear = () => {
    inputRef.current?.clear();
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Cell>
        <Input
          ref={inputRef}
          placeholder="获取输入框方法"
          clearable
        />
      </Cell>
      <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
        <Button type="primary" size="small" onClick={focus}>聚焦</Button>
        <Button type="info" size="small" onClick={blur}>失焦</Button>
        <Button type="default" size="small" onClick={clear}>清空</Button>
      </div>
    </div>
  );
}
