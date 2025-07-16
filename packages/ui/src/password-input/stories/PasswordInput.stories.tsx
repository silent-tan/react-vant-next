import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dialog, PasswordInput } from "@react-vant-next/ui";

// 更多关于如何设置故事的信息: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  id: "components-password-input",
  title: "Form/PasswordInput",
  component: PasswordInput,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        story: "密码输入框组件，常用于密码、验证码等敏感信息输入。",
      },
    },
  },
  argTypes: {
    value: {
      control: { type: "text" },
      description: "默认值",
      table: {
        type: { summary: "string" },
        required: false,
      },
    },
    info: {
      control: { type: "text" },
      description: "输入框下方文字提示",
      table: {
        type: { summary: "React.ReactNode" },
        required: false,
      },
    },
    errorInfo: {
      control: { type: "text" },
      description: "输入框下方错误提示",
      table: {
        type: { summary: "React.ReactNode" },
        required: false,
      },
    },
    gutter: {
      control: { type: "text" },
      description: "输入框格子之间的间距，如 20px 2em，默认单位为px",
      table: {
        type: { summary: "string | number" },
        defaultValue: { summary: "0" },
        required: false,
      },
    },
    type: {
      control: { type: "select", options: ["text", "number"] },
      description: "输入框类型",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "'text'" },
        required: false,
      },
    },
    length: {
      control: { type: "number" },
      description: "密码最大长度",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "6" },
        required: false,
      },
    },
    autoFocus: {
      control: { type: "boolean" },
      description: "自动聚焦",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
      },
    },
    mask: {
      control: { type: "boolean" },
      description: "是否隐藏密码内容",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        required: false,
      },
    },
    validator: {
      description: "输入校验规则",
      table: {
        type: { summary: "Function" },
        required: false,
      },
    },
    highlightClass: {
      control: { type: "text" },
      description: "高亮样式",
      table: {
        type: { summary: "string" },
        required: false,
      },
    },
    onChange: {
      description: "密码change事件",
      table: {
        type: { summary: "(v: string) => void" },
        required: false,
      },
    },
    onSubmit: {
      description: "密码提交事件(位数满了自动提交)",
      table: {
        type: { summary: "(v: string) => void" },
        required: false,
      },
    },
    onFocus: {
      description: "输入框聚焦时触发",
      table: {
        type: { summary: "(e: React.FocusEvent) => void" },
        required: false,
      },
    },
    onBlur: {
      description: "输入框失焦时触发",
      table: {
        type: { summary: "(e: React.FocusEvent) => void" },
        required: false,
      },
    },
  },
} satisfies Meta<typeof PasswordInput>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法组件
function DefaultExample() {
  const onSubmit = (val: string) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput onSubmit={onSubmit} />;
}

// 基础用法
export const Default: Story = {
  name: "基础用法",
  render: () => <DefaultExample />,
  parameters: {
    docs: {
      description: {
        story: "密码输入框默认显示为 6 位密码框，使用 * 号隐藏密码。",
      },
      source: {
        language: "tsx",
        code: `
import React from 'react';
import { PasswordInput, Dialog } from '@react-vant-next/ui';

export default () => {
  const onSubmit = (val: string) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput onSubmit={onSubmit} />;
};`,
      },
    },
  },
};

// 密码长度
function CustomLengthExample() {
  const onSubmit = (val: string) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput length={4} onSubmit={onSubmit} />;
}

// 密码长度
export const CustomLength: Story = {
  name: "密码长度",
  render: () => <CustomLengthExample />,
  parameters: {
    docs: {
      description: {
        story: "通过 `length` 属性可以设置密码长度。",
      },
      source: {
        language: "tsx",
        code: `
import React from 'react';
import { PasswordInput, Dialog } from 'react-vant';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput length={4} onSubmit={onSubmit} />;
};`,
      },
    },
  },
};

// 格子间距组件
function GutterExample() {
  const onSubmit = (val: string) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput gutter={10} onSubmit={onSubmit} />;
}

// 格子间距
export const Gutter: Story = {
  name: "格子间距",
  render: () => <GutterExample />,
  parameters: {
    docs: {
      description: {
        story: "通过 `gutter` 属性可以设置格子之间的间距，默认单位为 px。",
      },
      source: {
        language: "tsx",
        code: `
import React from 'react';
import { PasswordInput, Dialog } from '@react-vant-next/ui';

export default () => {
  const onSubmit = (val: string) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput gutter={10} onSubmit={onSubmit} />;
};`,
      },
    },
  },
};

// 明文展示组件
function NoMaskExample() {
  const onSubmit = (val: string) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput value="123" mask={false} onSubmit={onSubmit} />;
}

// 明文展示
export const NoMask: Story = {
  name: "明文展示",
  render: () => <NoMaskExample />,
  parameters: {
    docs: {
      description: {
        story: "通过 `mask` 属性可以设置是否隐藏密码内容，将其设置为 false 可以明文展示。",
      },
      source: {
        language: "tsx",
        code: `
import React from 'react';
import { PasswordInput, Dialog } from '@react-vant-next/ui';

export default () => {
  const onSubmit = (val: string) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput value="123" mask={false} onSubmit={onSubmit} />;
};`,
      },
    },
  },
};

// 只允许数字
function OnlyNumberExample() {
  const onSubmit = (val: string) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput type="number" value="12" mask={false} length={4} onSubmit={onSubmit} />;
}

// 只允许数字
export const OnlyNumber: Story = {
  name: "只允许数字",
  render: () => <OnlyNumberExample />,
  parameters: {
    docs: {
      description: {
        story: "通过 `type` 属性可以设置输入框类型，将其设置为 number 可以只允许数字输入。",
      },
      source: {
        language: "tsx",
        code: `
import React from 'react';
import { PasswordInput, Dialog } from '@react-vant-next/ui';

export default () => {
  const onSubmit = (val: string) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput type="number" value="12" mask={false} length={4} onSubmit={onSubmit} />;
};`,
      },
    },
  },
};

// 自定义规则
function CustomValidatorExample() {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return (
    <PasswordInput
      value="123"
      mask={false}
      length={4}
      validator={(val) => {
        return /^[0-3]{0,4}$/.test(val);
      }}
      onSubmit={onSubmit}
    />
  );
}

// 自定义规则
export const CustomValidator: Story = {
  name: "自定义规则",
  render: () => <CustomValidatorExample />,
  parameters: {
    docs: {
      description: {
        story: "通过 `validator` 属性可以设置输入校验规则，这个规则并非单个输入框的校验规则，而是所有输入框的校验规则。",
      },
      source: {
        language: "tsx",
        code: `
import React from 'react';
import { PasswordInput, Dialog } from '@react-vant-next/ui';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return (
    <PasswordInput
      value="123"
      mask={false}
      length={4}
      validator={(val) => {
        return /^[0-3]{0,4}$/.test(val);
      }}
      onSubmit={onSubmit}
    />
  );
};`,
      },
    },
  },
};

// 自动聚焦
function AutoFocusExample() {
  const onSubmit = (val: string) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput autoFocus onSubmit={onSubmit} />;
}

// 自动聚焦
export const AutoFocus: Story = {
  name: "自动聚焦",
  render: () => <AutoFocusExample />,
  parameters: {
    docs: {
      description: {
        story: "通过 `autoFocus` 属性可以设置输入框自动聚焦。",
      },
      source: {
        language: "tsx",
        code: `
import React from 'react';
import { PasswordInput, Dialog } from '@react-vant-next/ui';

export default () => {
  const onSubmit = (val: string) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput autoFocus onSubmit={onSubmit} />;
};`,
      },
    },
  },
};

// 提示信息
function TipsExample() {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput onSubmit={onSubmit} info={<div>密码为6位数字</div>} />;
}

export const Tips: Story = {
  name: "提示信息",
  render: () => <TipsExample />,
  parameters: {
    docs: {
      description: {
        story: "通过 `info` 添加信息提示",
      },
      source: {
        language: "tsx",
        code: `
import React from 'react';
import { PasswordInput, Dialog } from '@react-vant-next/ui';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput onSubmit={onSubmit} info={<div>密码为6位数字</div>} />;
};
        `,
      },
    },
  },
};
