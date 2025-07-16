import type { Meta, StoryObj } from "@storybook/react-vite";
import { Eye, EyeO, QuestionO } from "@react-vant-next/icons";
import { Cell } from "@react-vant-next/ui";
import React, { useState } from "react";
import ButtonDemo from "../demo/button";
import ErrorInfoDemo from "../demo/error";
import FormatterDemo from "../demo/formatter";
import IconDemo from "../demo/icon";
import RefDemo from "../demo/ref";
import Field from "../index";

const meta = {
  id: "components-field",
  title: "Form/Field",
  component: Field,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "表单中的输入框组件，`Field` 是基于 `Cell` 实现的，可以使用 `Cell.Group` 作为容器来提供外边框。",
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
        required: false,
      },
    },
    className: {
      description: "自定义类名",
      table: {
        category: "基础",
        type: { summary: "string" },
        required: false,
      },
    },
    children: {
      description: "自定义输入框，使用此插槽后，与输入框相关的属性和事件将失效",
      table: {
        category: "基础",
        type: { summary: "React.ReactNode" },
        required: false,
      },
    },
    value: {
      control: { type: "text" },
      description: "输入框内容",
      table: {
        category: "基础",
        type: { summary: "string | number" },
        required: false,
      },
    },
    defaultValue: {
      control: { type: "text" },
      description: "输入框默认内容",
      table: {
        category: "基础",
        type: { summary: "string | number" },
        required: false,
      },
    },
    name: {
      control: { type: "text" },
      description: "名称，作为提交表单时的标识符",
      table: {
        category: "基础",
        type: { summary: "string" },
        required: false,
      },
    },
    type: {
      control: { type: "select" },
      options: ["tel", "text", "digit", "number", "search", "password", "textarea"],
      description: "输入框类型",
      table: {
        category: "基础",
        type: { summary: "'tel' | 'text' | 'digit' | 'number' | 'search' | 'password' | 'textarea'" },
        defaultValue: { summary: "'text'" },
        required: false,
      },
    },
    placeholder: {
      control: { type: "text" },
      description: "输入框占位提示文字",
      table: {
        category: "基础",
        type: { summary: "string" },
        required: false,
      },
    },
    maxLength: {
      control: { type: "number" },
      description: "输入的最大字符数",
      table: {
        category: "基础",
        type: { summary: "number" },
        required: false,
      },
    },

    // 外观
    label: {
      control: { type: "text" },
      description: "输入框左侧文本",
      table: {
        category: "外观",
        type: { summary: "React.ReactNode" },
        required: false,
      },
    },
    labelClass: {
      control: { type: "text" },
      description: "左侧文本额外类名",
      table: {
        category: "外观",
        type: { summary: "string" },
        required: false,
      },
    },
    labelWidth: {
      control: { type: "text" },
      description: "左侧文本宽度，默认单位为 px",
      table: {
        category: "外观",
        type: { summary: "number | string" },
        required: false,
      },
    },
    labelAlign: {
      control: { type: "select" },
      options: ["left", "center", "right"],
      description: "左侧文本对齐方式",
      table: {
        category: "外观",
        type: { summary: "'left' | 'center' | 'right'" },
        required: false,
      },
    },
    controlAlign: {
      control: { type: "select" },
      options: ["left", "center", "right"],
      description: "右侧输入控件容器的对齐方式",
      table: {
        category: "外观",
        type: { summary: "'left' | 'center' | 'right'" },
        required: false,
      },
    },
    colon: {
      control: { type: "boolean" },
      description: "是否在 label 后面添加冒号",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
      },
    },
    align: {
      control: { type: "select" },
      options: ["left", "center", "right"],
      description: "输入框内容对齐方式",
      table: {
        category: "外观",
        type: { summary: "'left' | 'center' | 'right'" },
        required: false,
      },
    },
    border: {
      control: { type: "boolean" },
      description: "是否显示内边框",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        required: false,
      },
    },
    center: {
      control: { type: "boolean" },
      description: "是否使内容垂直居中",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
      },
    },
    leftIcon: {
      control: { type: "object" },
      description: "左侧图标",
      table: {
        category: "外观",
        type: { summary: "React.ReactNode" },
        required: false,
      },
    },
    rightIcon: {
      control: { type: "object" },
      description: "右侧图标",
      table: {
        category: "外观",
        type: { summary: "React.ReactNode" },
        required: false,
      },
    },
    prefix: {
      control: { type: "object" },
      description: "设置前置内容",
      table: {
        category: "外观",
        type: { summary: "React.ReactNode" },
        required: false,
      },
    },
    suffix: {
      control: { type: "object" },
      description: "自定义输入框尾部按钮",
      table: {
        category: "外观",
        type: { summary: "React.ReactNode" },
        required: false,
      },
    },
    showWordLimit: {
      control: { type: "boolean" },
      description: "是否显示字数统计",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
      },
    },

    // 状态
    disabled: {
      control: { type: "boolean" },
      description: "是否禁用输入框",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
      },
    },
    readOnly: {
      control: { type: "boolean" },
      description: "是否为只读状态",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
      },
    },
    error: {
      control: { type: "boolean" },
      description: "是否将输入内容标红",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
      },
    },
    errorMessage: {
      control: { type: "text" },
      description: "底部错误提示文案",
      table: {
        category: "状态",
        type: { summary: "React.ReactNode" },
        required: false,
      },
    },
    errorMessageAlign: {
      control: { type: "select" },
      options: ["left", "center", "right"],
      description: "错误提示文案对齐方式",
      table: {
        category: "状态",
        type: { summary: "'left' | 'center' | 'right'" },
        required: false,
      },
    },
    clearable: {
      control: { type: "boolean" },
      description: "是否启用清除图标",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
      },
    },
    clearTrigger: {
      control: { type: "select" },
      options: ["always", "focus"],
      description: "显示清除图标的时机",
      table: {
        category: "状态",
        type: { summary: "'always' | 'focus'" },
        defaultValue: { summary: "'focus'" },
        required: false,
      },
    },

    // 其他
    formatter: {
      description: "输入内容格式化函数",
      table: {
        category: "其他",
        type: { summary: "(val: string | number) => string" },
        required: false,
      },
    },
    formatTrigger: {
      control: { type: "select" },
      options: ["onBlur", "onChange"],
      description: "格式化函数触发的时机",
      table: {
        category: "其他",
        type: { summary: "'onBlur' | 'onChange'" },
        defaultValue: { summary: "'onChange'" },
        required: false,
      },
    },
    intro: {
      control: { type: "object" },
      description: "额外的提示信息",
      table: {
        category: "其他",
        type: { summary: "React.ReactNode" },
        required: false,
      },
    },
    tooltip: {
      control: { type: "object" },
      description: "字段提示信息",
      table: {
        category: "其他",
        type: { summary: "React.ReactNode | FieldTooltipProps" },
        required: false,
      },
    },
    autoSize: {
      control: { type: "object" },
      description: "自适应内容高度，仅对 textarea 有效",
      table: {
        category: "其他",
        type: { summary: "boolean | { maxHeight?: number; minHeight?: number }" },
        required: false,
      },
    },
    rows: {
      control: { type: "number" },
      description: "textarea 的行数",
      table: {
        category: "其他",
        type: { summary: "number" },
        defaultValue: { summary: "2" },
        required: false,
      },
    },

    // 事件
    onChange: {
      description: "输入框内容变化时触发",
      table: {
        category: "事件",
        type: { summary: "(val: string | number) => void" },
        required: false,
      },
    },
    onFocus: {
      description: "输入框获得焦点时触发",
      table: {
        category: "事件",
        type: { summary: "(e: React.FocusEvent) => void" },
        required: false,
      },
    },
    onBlur: {
      description: "输入框失去焦点时触发",
      table: {
        category: "事件",
        type: { summary: "(e: React.FocusEvent) => void" },
        required: false,
      },
    },
    onClear: {
      description: "点击清除按钮时触发",
      table: {
        category: "事件",
        type: { summary: "() => void" },
        required: false,
      },
    },
    onClick: {
      description: "点击组件时触发",
      table: {
        category: "事件",
        type: { summary: "(e: React.MouseEvent<HTMLDivElement>) => void" },
        required: false,
      },
    },
    onClickInput: {
      description: "点击输入区域时触发",
      table: {
        category: "事件",
        type: { summary: "(e: React.MouseEvent) => void" },
        required: false,
      },
    },
    onClickLeftIcon: {
      description: "点击左侧图标时触发",
      table: {
        category: "事件",
        type: { summary: "(e: React.MouseEvent<HTMLDivElement>) => void" },
        required: false,
      },
    },
    onClickRightIcon: {
      description: "点击右侧图标时触发",
      table: {
        category: "事件",
        type: { summary: "(e: React.MouseEvent<HTMLDivElement>) => void" },
        required: false,
      },
    },
    onKeyPress: {
      description: "输入框按键按下时触发",
      table: {
        category: "事件",
        type: { summary: "(e: React.KeyboardEvent) => void" },
        required: false,
      },
    },
  },
} satisfies Meta<typeof Field>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Story = {
  name: "基础用法",
  render: () => {
    return (
      <Field
        label="文本"
        tooltip="提示tooltip"
        intro={<div>We must make sure that your are a human.</div>}
        placeholder="请输入文本"
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "可以通过 `value` 和 `onChange` 双向绑定输入框的值，通过 `placeholder` 设置占位提示文字。",
      },
      source: {
        language: "tsx",
        code: `<Field
  label="文本"
  tooltip="提示tooltip"
  intro={<div>We must make sure that your are a human.</div>}
  placeholder="请输入文本"
/>`,
      },
    },
  },
};

// 显示图标
export const ShowIcon: Story = {
  name: "显示图标",
  render: () => (<IconDemo />),
  parameters: {
    docs: {
      description: {
        story: "通过 `leftIcon` 和 `rightIcon` 设置输入框两侧的图标，通过设置 `clearable` 属性可以显示清除图标。",
      },
      source: {
        language: "tsx",
        code: `import { ShopO, WarningO } from "@react-vant-next/icons";
import { Cell, Field, Toast } from "@react-vant-next/ui";
import React, { useState } from "react";

export default function IconDemo() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  return (
    <>
      <Cell.Group>
        <Field
          value={value1}
          onChange={setValue1}
          label="文本"
          leftIcon={<ShopO />}
          rightIcon={<WarningO />}
          placeholder="显示图标"
          onClickLeftIcon={() => Toast.info("左侧图标点击")}
          onClickRightIcon={() => Toast.info("右侧图标点击")}
        />
        <Field
          value={value2}
          onChange={setValue2}
          clearable
          label="文本"
          leftIcon={<ShopO />}
          placeholder="显示清除图标"
        />
      </Cell.Group>
    </>
  );
};
`,
      },
    },
  },
};

// 错误提示
export const ErrorInfo: Story = {
  name: "错误提示",
  render: () => {
    return (
      <ErrorInfoDemo />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "设置 `required` 属性表示这是一个必填项，可以配合 `error` 或 `errorMessage` 属性显示对应的错误提示。",
      },
      source: {
        language: "tsx",
        code: `import { Cell, Field } from "@react-vant-next/ui";
import React, { useState } from "react";

export default function ErrorInfoDemo() {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <>
      <Cell.Group>
        <Field
          value={username}
          error
          required
          label="用户名"
          placeholder="请输入用户名"
          onChange={setUsername}
        />
        <Field
          value={phone}
          required
          label="手机号"
          placeholder="请输入手机号"
          errorMessage="手机号格式错误"
          onChange={setPhone}
        />
      </Cell.Group>
    </>
  );
};
`,
      },
    },
  },
};

// 插入按钮
export const ButtonInField: Story = {
  name: "插入按钮",
  render: () => {
    return (
      <ButtonDemo />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "通过 suffix 插入按钮。",
      },
      source: {
        language: "tsx",
        code: `import { ArrowDown } from "@react-vant-next/icons";
import { Button, Field, Flex, Picker, Popup } from "@react-vant-next/ui";
import React, { useState } from "react";

const columns = ["86 🇨🇳", "87 🇺🇸", "88 🏳️‍🌈", "89 🏳️‍⚧️", "90 🇴🇲", "91 🇵🇪", "92 🇩🇪"];

export default function ButtonDemo() {
  const [sms, setSms] = useState("");
  const [visible, setVisible] = useState(false);
  const [field, setVield] = useState(columns[0]);

  return (
    <>
      <Field
        value={sms}
        center
        label="短信验证码"
        placeholder="手机号"
        onChange={setSms}
        prefix={(
          <Flex align="center" onClick={() => setVisible(true)}>
            +
            {field}
            {" "}
            <ArrowDown style={{ paddingLeft: 8 }} />
          </Flex>
        )}
        suffix={(
          <Button size="small" type="primary">
            发送
          </Button>
        )}
      />
      <Popup
        round
        visible={visible}
        position="bottom"
        onClose={() => setVisible(false)}
      >
        <Picker
          title="标题"
          onConfirm={(value: string) => {
            setVield(value);
            setVisible(false);
          }}
          columns={columns}
        />
      </Popup>
    </>
  );
};
`,
      },
    },
  },
};

// 格式化输入内容
export const Formatter: Story = {
  name: "格式化输入内容",
  render: () => {
    return <FormatterDemo />;
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `formatter` 属性可以对输入的内容进行格式化，通过 `formatTrigger` 属性可以指定执行格式化的时机。",
      },
      source: {
        language: "tsx",
        code: `import { Field } from "@react-vant-next/ui";
import React, { useState } from "react";

export default function FormatterDemo() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const formatter = val => val.replace(/\d/g, "");

  return (
    <>
      <Field
        value={value1}
        label="文本"
        formatter={formatter}
        placeholder="在输入时执行格式化"
        onChange={setValue1}
      />
      <Field
        value={value2}
        label="文本"
        formatter={formatter}
        formatTrigger="onBlur"
        placeholder="在失焦时执行格式化"
        onChange={setValue2}
      />
    </>
  );
};
`,
      },
    },
  },
};

// 高度自适应
export const AutoHeight: Story = {
  name: "高度自适应",
  render: () => {
    const [content, setContent] = useState("");

    return (
      <Field
        rows={1}
        value={content}
        onChange={setContent}
        label="留言"
        type="textarea"
        placeholder="请输入留言"
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "对于 textarea 类型的输入框，可以通过 autosize 属性设置高度自适应。",
      },
      source: {
        language: "tsx",
        code: `
const [content, setContent] = useState('');

return (
  <Field
    rows={1}
    value={content}
    onChange={setContent}
    label="留言"
    type="textarea"
    placeholder="请输入留言"
  />
);`,
      },
    },
  },
};

// 显示字数统计
export const ShowWordLimit: Story = {
  name: "显示字数统计",
  render: () => {
    const [content, setContent] = useState("");

    return (
      <Field
        rows={2}
        autoSize
        label="留言"
        type="textarea"
        placeholder="请输入留言"
        value={content}
        onChange={setContent}
        maxLength={50}
        showWordLimit
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "设置 maxLength 和 showWordLimit 属性后，可以显示字数统计。",
      },
      source: {
        language: "tsx",
        code: `const [content, setContent] = useState('');
return (
  <Field
    rows={2}
    autoSize
    label="留言"
    type="textarea"
    placeholder="请输入留言"
    value={content}
    onChange={setContent}
    maxLength={50}
    showWordLimit
  />
);`,
      },
    },
  },
};

// 输入框内容对齐
export const InputAlign: Story = {
  name: "输入框内容对齐",
  render: (_args) => {
    return (
      <Field label="文本" placeholder="输入框内容右对齐" align="right" />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `align` 属性可以设置输入框内容的对齐方式，可选值为 `left`、`center`、`right`。",
      },
    },
  },
};

// 输入框提示
export const FieldTooltip: Story = {
  name: "输入框提示",
  render: () => {
    return (
      <Cell.Group>
        <Field
          label="文本"
          placeholder="请输入文本"
          tooltip={{
            message: "这是一段提示文字",
            icon: <QuestionO />,
          }}
        />
      </Cell.Group>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "通过 tooltip 属性可以设置输入框提示信息。",
      },
      source: {
        language: "tsx",
        code: `<Cell.Group>
  <Field
    label="文本"
    placeholder="请输入文本"
    tooltip={{
      message: "这是一段提示文字",
      icon: <QuestionO />,
    }}
  />
</Cell.Group>`,
      },
    },
  },
};

// 密码可见性切换
export const PasswordVisibility: Story = {
  name: "密码可见性切换",
  render: () => {
    return PasswordVisibilityExample();
  },
  parameters: {
    docs: {
      description: {
        story: "通过 rightIcon 和 type 属性可以实现密码可见性切换。",
      },
      source: {
        language: "tsx",
        code: `const [visible, setVisible] = useState(false);
const [value, setValue] = useState('');

const togglePasswordVisibility = () => {
  setVisible(!visible);
};

return (
  <Cell.Group>
    <Field
      label="密码"
      type={visible ? 'text' : 'password'}
      value={value}
      placeholder="请输入密码"
      rightIcon={visible ? <Eye /> : <EyeO />}
      onClickRightIcon={togglePasswordVisibility}
      onChange={(val) => setValue(val)}
    />
  </Cell.Group>
);`,
      },
    },
  },
};

// 使用 Field 实例
export const UseFieldRef: Story = {
  name: "Ref 调用",
  render: () => {
    return RefDemo();
  },
  parameters: {
    docs: {
      description: {
        story: "通过 ref 可以获取到 Field 实例并调用实例方法。",
      },
      source: {
        language: "tsx",
        code: `import type { FieldInstance } from "@react-vant-next/ui";
import { Button, Field } from "@react-vant-next/ui";
import React, { useRef } from "react";

export default function RefDemo() {
  const fieldRef = useRef<FieldInstance>(null);

  return (
    <Field
      center
      ref={fieldRef}
      placeholder="请输入文本"
      label="文本"
      suffix={(
        <Button
          size="small"
          onClick={() => {
            fieldRef?.current?.focus();
          }}
        >
          聚焦
        </Button>
      )}
    />
  );
};
`,
      },
    },
  },
};

function PasswordVisibilityExample() {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");

  const togglePasswordVisibility = () => {
    setVisible(!visible);
  };

  return (
    <Cell.Group>
      <Field
        label="密码"
        type={visible ? "text" : "password"}
        value={value}
        placeholder="请输入密码"
        rightIcon={visible ? <Eye /> : <EyeO />}
        onClickRightIcon={togglePasswordVisibility}
        onChange={val => setValue(val)}
      />
    </Cell.Group>
  );
}
