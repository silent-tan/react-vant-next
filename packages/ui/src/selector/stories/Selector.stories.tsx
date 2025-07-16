import type { Meta, StoryObj } from "@storybook/react-vite";
import BaseExample from "../demo/base";
import { Selector } from "../index";

const meta = {
  id: "form-selector",
  title: "Form/Selector",
  component: Selector,
  parameters: {
    docs: {
      description: {
        component: "Selector 选择组，在一组选项中选择一个或多个，一般用于筛选和表单场景。",
      },
      toc: false,
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
    options: {
      description: "选项配置",
      table: {
        category: "基础",
        type: { summary: "SelectorOption[]" },
      },
    },
    value: {
      description: "选中项的值",
      table: {
        category: "基础",
        type: { summary: "SelectorValue[]" },
      },
    },
    defaultValue: {
      description: "默认选中项的值",
      table: {
        category: "基础",
        type: { summary: "SelectorValue[]" },
        defaultValue: { summary: "[]" },
      },
    },
    columns: {
      description: "列数",
      table: {
        category: "外观",
        type: { summary: "number" },
      },
      control: { type: "number", min: 1, max: 4, step: 1 },
    },

    // 状态
    multiple: {
      description: "是否允许多选",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    disabled: {
      description: "是否禁用所有选项",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },

    // 外观
    showCheckMark: {
      description: "是否显示对勾图标",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },

    // 事件
    onChange: {
      description: "选项改变时触发",
      table: {
        category: "事件",
        type: { summary: "(value: SelectorValue[], extend: { items: SelectorOption[] }) => void" },
      },
    },
  },
} satisfies Meta<typeof Selector>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Partial<Story> = {
  name: "基础用法",
  render: () => <BaseExample />,
  parameters: {
    docs: {
      description: {
        story: "提供多个选项供用户选择，一般在筛选和表单中使用。",
      },
      source: {
        language: "tsx",
        code: `
import { Form, Selector } from "@react-vant-next/ui";
import { options } from "./options";

export default function BaseExample() {
  return (
    <Form layout="vertical">
      <Form.Item name="single" label="单选">
        <Selector
          options={options}
          defaultValue={["1"]}
          onChange={(arr, extend) => console.log(arr, extend.items)}
        />
      </Form.Item>

      <Form.Item name="mulit" label="多选">
        <Selector
          options={options}
          defaultValue={["2", "3"]}
          multiple={true}
          onChange={(arr, extend) => console.log(arr, extend.items)}
        />
      </Form.Item>

      <Form.Item name="disabled" label="禁用状态">
        <Selector
          options={[
            {
              label: "选项一",
              value: "1",
            },
            {
              label: "选项二",
              value: "2",
              disabled: true,
            },
            {
              label: "选项三",
              value: "3",
            },
          ]}
        />
      </Form.Item>
      <Form.Item name="description" label="描述选项">
        <Selector
          options={[
            {
              label: "选项一",
              description: "描述信息",
              value: "1",
            },
            {
              label: "选项二",
              description: "描述信息",
              value: "2",
            },
          ]}
        />
      </Form.Item>
      <Form.Item name="style" label="自定义样式">
        <Selector
          style={{
            "--rv-selector-border-radius": "100px",
            "--rv-selector-checked-border":
              "solid var(--adm-color-primary) 1px",
            "--rv-selector-padding": "5px 15px",
          }}
          showCheckMark={false}
          options={options}
          defaultValue={["1"]}
        />
      </Form.Item>
    </Form>
  );
};
`,
      },
    },
  },
};
