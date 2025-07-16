import type { Meta, StoryObj } from "@storybook/react-vite";
import { Radio } from "../../index";
import AsyncRadio from "../demo/async";
import CellRadio from "../demo/cell";

const meta = {
  id: "components-radio",
  title: "Form/Radio",
  component: Radio,
  parameters: {
    docs: {
      description: {
        component: "单选框组件，用于在一组备选项中进行单选。",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    // 基础
    children: {
      description: "自定义内容",
      table: {
        type: { summary: "React.ReactNode" },
        category: "基础",
      },
    },
    style: {
      description: "自定义样式",
      table: {
        type: { summary: "React.CSSProperties" },
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
    name: {
      description: "标识符，通常为一个唯一的字符串或数字",
      table: {
        type: { summary: "string | number" },
        category: "基础",
      },
    },
    // 状态
    checked: {
      description: "是否为选中状态",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "状态",
      },
      control: "boolean",
    },
    disabled: {
      description: "是否为禁用状态",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "状态",
      },
      control: "boolean",
    },
    labelDisabled: {
      description: "是否禁用文本内容点击",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "状态",
      },
      control: "boolean",
    },
    // 外观
    iconSize: {
      description: "图标大小，默认单位为px",
      table: {
        type: { summary: "number | string" },
        category: "外观",
      },
      control: { type: "number", min: 0, max: 100, step: 1 },
    },
    checkedColor: {
      description: "选中状态颜色",
      table: {
        type: { summary: "string" },
        category: "外观",
      },
      control: "color",
    },
    shape: {
      description: "形状，可选值为 square",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "round" },
        category: "外观",
      },
      control: "select",
      options: ["round", "square"],
    },
    // 事件
    onChange: {
      description: "当绑定值变化时触发的事件",
      table: {
        type: { summary: "(checked: boolean) => void" },
        category: "事件",
      },
      action: "onChange",
    },
    value: {
      description: "当前选中项的标识符",
      table: {
        type: { summary: "string | number" },
        category: "其他",
      },
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Default: Story = {
  name: "基础用法",
  args: {},
  render: _args => (
    <Radio.Group defaultValue="1">
      <Radio name="1">单选框1</Radio>
      <Radio name="2">单选框2</Radio>
    </Radio.Group>
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 `defaultValue` 值默认当前选中项的 name。",
      },
    },
  },
};

// 水平排列
export const Horizontal: Story = {
  name: "水平排列",
  args: {},
  render: _args => (
    <Radio.Group defaultValue="1" direction="horizontal">
      <Radio name="1">单选框1</Radio>
      <Radio name="2">单选框2</Radio>
    </Radio.Group>
  ),
  parameters: {
    docs: {
      description: {
        story: "将 `direction` 属性设置为 `horizontal` 后，单选框组会变成水平排列。",
      },
    },
  },
};

// 禁用状态
export const Disabled: Story = {
  name: "禁用状态",
  render: _args => (
    <Radio.Group defaultValue="1">
      <Radio name="1" disabled>
        单选框1
      </Radio>
      <Radio name="2" disabled>
        单选框2
      </Radio>
    </Radio.Group>
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 `disabled` 属性禁止选项切换，在 `RadioGroup` 上设置 `disabled` 可以禁用所有单选框。",
      },
    },
  },
};

// 自定义形状
export const CustomShape: Story = {
  name: "自定义形状",
  render: _args => (
    <Radio.Group defaultValue="1">
      <Radio shape="square" name="1">
        单选框1
      </Radio>
      <Radio shape="square" name="2">
        单选框2
      </Radio>
    </Radio.Group>
  ),
  parameters: {
    docs: {
      description: {
        story: "将 `shape` 属性设置为 `square`，单选框的形状会变成方形。",
      },
    },
  },
};

// 自定义颜色
export const CustomColor: Story = {
  name: "自定义颜色",
  render: _args => (
    <Radio.Group defaultValue="1">
      <Radio name="1" checkedColor="#ee0a24">
        单选框 1
      </Radio>
      <Radio name="2" checkedColor="#ee0a24">
        单选框 2
      </Radio>
    </Radio.Group>
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 `checkedColor` 属性设置选中状态的图标颜色。",
      },
    },
  },
};

// 自定义大小
export const CustomSize: Story = {
  name: "自定义大小",
  render: _args => (
    <Radio.Group defaultValue="1">
      <Radio name="1" iconSize="24px">
        单选框 1
      </Radio>
      <Radio name="2" iconSize="24px">
        单选框 2
      </Radio>
    </Radio.Group>
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 `iconSize` 属性可以自定义图标的大小。",
      },
    },
  },
};

// 禁用文本点击
export const LabelDisabled: Story = {
  name: "禁用文本点击",
  render: _args => (
    <Radio.Group defaultValue="1">
      <Radio name="1" labelDisabled>
        单选框 1
      </Radio>
      <Radio name="2" labelDisabled>
        单选框 2
      </Radio>
    </Radio.Group>
  ),
  parameters: {
    docs: {
      description: {
        story: "设置 `labelDisabled` 属性后，点击图标以外的内容不会触发单选框切换。",
      },
    },
  },
};

// 异步更新
export const AsyncUpdate: Story = {
  name: "异步更新",
  render: () => <AsyncRadio />,
  parameters: {
    docs: {
      description: {
        story: "设置 `value` 属性后，点击图标状态不会改变，而是直接执行 `onChange` 方法，在此方法中更换状态。",
      },
      source: {
        language: "tsx",
        code: `
import { Radio, Toast } from "@react-vant-next/ui";
import { useState } from "react";

let timer: NodeJS.Timeout;

export default function AsyncRadio() {
  const [value, setValue] = useState("1");

  return (
    <Radio.Group
      value={value}
      onChange={(val) => {
        Toast.loading({ forbidClick: true });
        clearTimeout(timer);
        timer = setTimeout(() => {
          Toast.clear();
          setValue(val as string);
        }, 500);
      }}
    >
      <Radio name="1">单选框 1</Radio>
      <Radio name="2">单选框 2</Radio>
    </Radio.Group>
  );
};
`,
      },
    },
  },
};

// 搭配单元格
export const WithCell: Story = {
  name: "与 Cell 组件一起使用",
  render: () => <CellRadio />,
  parameters: {
    docs: {
      description: {
        story: "搭配单元格组件使用时，需要再引入 `Cell` 和 `Cell.Group` 组件。",
      },
      source: {
        language: "tsx",
        code: `
import { ShopO } from "@react-vant-next/icons";
import { Cell, Radio } from "@react-vant-next/ui";
import { useState } from "react";

export default function CellRadio() {
  const [cellValue, setCellValue] = useState("");
  return (
    <Radio.Group value={cellValue}>
      <Cell.Group>
        <Cell
          clickable
          title="单选框1"
          icon={<ShopO />}
          onClick={() => setCellValue("1")}
          rightIcon={<Radio name="1" />}
        />
        <Cell
          clickable
          title="单选框2"
          icon={<ShopO />}
          onClick={() => setCellValue("2")}
          rightIcon={<Radio name="2" />}
        />
      </Cell.Group>
    </Radio.Group>
  );
};
`,
      },
    },
  },
};
