import type { Meta, StoryObj } from "@storybook/react-vite";
import BasePicker from "../demo/base";
import CascaderPicker from "../demo/cascader";
import ColumnsPicker from "../demo/columns";
import ColumnsFieldNamesPicker from "../demo/columnsFieldNames";
import DynamicPicker from "../demo/dynic";
import LoadingPicker from "../demo/loading";
import PopupPicker from "../demo/popup";
import Picker from "../index";

// 更多关于如何设置故事的信息: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  id: "components-picker",
  title: "Form/Picker",
  component: Picker,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "选择器组件，用于在一组预设选项中进行选择，支持单列选择和多列级联。",
      },
    },
  },
  argTypes: {
    columns: {
      description: "对象数组，配置每一列显示的数据",
      table: {
        type: { summary: "PickerColumn<T> | PickerColumn<T>[]" },
        required: false,
      },
    },
    columnsFieldNames: {
      description: "自定义 columns 结构中的字段",
      table: {
        type: { summary: "PickerFieldNames" },
        required: false,
      },
    },
    title: {
      control: { type: "text" },
      description: "顶部栏标题",
      table: {
        type: { summary: "React.ReactNode" },
        required: false,
      },
    },
    loading: {
      control: { type: "boolean" },
      description: "是否显示加载状态",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
      },
    },
    readOnly: {
      control: { type: "boolean" },
      description: "是否只读状态",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
      },
    },
    cancelButtonText: {
      control: { type: "text" },
      description: "取消按钮文字",
      table: {
        type: { summary: "React.ReactNode" },
        required: false,
      },
    },
    confirmButtonText: {
      control: { type: "text" },
      description: "确认按钮文字",
      table: {
        type: { summary: "React.ReactNode" },
        required: false,
      },
    },
    showToolbar: {
      control: { type: "boolean" },
      description: "是否显示顶部栏",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        required: false,
      },
    },
    itemHeight: {
      control: { type: "text" },
      description: "选项高度，支持 px vw vh rem 单位，默认 px",
      table: {
        type: { summary: "number | string" },
        defaultValue: { summary: "44" },
        required: false,
      },
    },
    visibleItemCount: {
      control: { type: "number" },
      description: "可见的选项个数",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "6" },
        required: false,
      },
    },
    swipeDuration: {
      control: { type: "number" },
      description: "快速滑动时惯性滚动的时长，单位 ms",
      table: {
        type: { summary: "number | string" },
        defaultValue: { summary: "1000" },
        required: false,
      },
    },
    toolbarPosition: {
      control: { type: "select", options: ["top", "bottom"] },
      description: "顶部栏位置，可选值为 bottom",
      table: {
        type: { summary: "PickerToolbarPosition" },
        defaultValue: { summary: "'top'" },
        required: false,
      },
    },
    toolbar: {
      description: "自定义整个顶部栏的内容",
      table: {
        type: { summary: "React.ReactNode" },
        required: false,
      },
    },
    columnsTop: {
      description: "自定义选项上方内容",
      table: {
        type: { summary: "React.ReactNode" },
        required: false,
      },
    },
    placeholder: {
      description: "占位符",
      table: {
        type: { summary: "false | React.ReactNode | React.ReactNode[]" },
        required: false,
      },
    },
    columnsBottom: {
      description: "自定义选项下方内容",
      table: {
        type: { summary: "React.ReactNode" },
        required: false,
      },
    },
    optionRender: {
      description: "自定义选项内容",
      table: {
        type: { summary: "(option: string | object) => React.ReactNode" },
        required: false,
      },
    },
    value: {
      description: "选中项",
      table: {
        type: { summary: "string | string[]" },
        required: false,
      },
    },
    defaultValue: {
      description: "默认选中项",
      table: {
        type: { summary: "string | string[]" },
        required: false,
      },
    },
    onChange: {
      description: "选项改变时触发",
      table: {
        type: { summary: "(value: string | string[], selectedRows: T | T[], indexes?: number | number[]) => void" },
        required: false,
      },
    },
    onConfirm: {
      description: "点击完成按钮时触发",
      table: {
        type: { summary: "(value: string | string[], selectedRows: T | T[], indexes: number | number[]) => void" },
        required: false,
      },
    },
    onCancel: {
      description: "点击取消按钮时触发",
      table: {
        type: { summary: "() => void" },
        required: false,
      },
    },
    popup: {
      description: "是否使用弹出层模式",
      table: {
        type: { summary: "boolean | Omit<SharedPopupProps, 'closeable'>" },
        required: false,
      },
    },
    visible: {
      control: { type: "boolean" },
      description: "是否显示弹出层",
      table: {
        type: { summary: "boolean" },
        required: false,
      },
    },
    onClose: {
      description: "弹出层关闭时触发",
      table: {
        type: { summary: "() => void" },
        required: false,
      },
    },
    children: {
      description: "自定义内容",
      table: {
        type: { summary: "(val: string | string[], options: PickerColumnOption[], actions: PickerPopupActions) => React.ReactNode" },
        required: false,
      },
    },
  },
} satisfies Meta<typeof Picker>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Default: Story = {
  name: "基础用法",
  render: () => <BasePicker />,
  parameters: {
    docs: {
      description: {
        story: "基础用法展示了单列选择器的使用方式，通过 `columns` 属性配置选项数据，`value` 属性设置选中项。",
      },
      source: {
        language: "tsx",
        code: `
import { Picker, Toast } from "@react-vant-next/ui";

const columns = [
  { text: "南京", value: 0 },
  { text: "苏州", value: 1 },
  { text: "常州", value: 2 },
  { text: "淮安", value: 3 },
  { text: "扬州", value: 4 },
  { text: "南通", value: 5 },
  { text: "宿迁", value: 6 },
  { text: "泰州", value: 7 },
  { text: "无锡", value: 8 },
  { text: "长沙", value: 9 },
];

export default function BasePicker() {
  return (
    <Picker
      title="基础使用"
      columns={columns}
      onChange={(val: string, selectRow, index: number) => {
        Toast.info(\`选中值\${val}，索引: \${index}\`);
      }}
      onCancel={() => Toast.info("点击取消按钮")}
      onConfirm={() => Toast.info("点击确认按钮")}
    />
  );
}`,
      },
    },
  },
};

// 多列选择
export const MultipleColumns: Story = {
  name: "多列选择",
  render: () => <ColumnsPicker />,
  parameters: {
    docs: {
      description: {
        story: "通过二维数组的形式配置多列选择器，每一列对应一个数组。",
      },
      source: {
        language: "tsx",
        code: `
import { Picker, Toast } from "@react-vant-next/ui";

export default function ColumnsPicker() {
  const [value, setValue] = React.useState(["周二", "晚上"]);
  return (
    <Picker
      value={value}
      onChange={(val: string[], _, index) => {
        Toast(\`当前值：\${val}, 当前索引：\${index}\`);
        setValue(val);
      }}
      columns={[
        ["周一", "周二", "周三", "周四", "周五"],
        ["上午", "下午", "晚上"],
      ]}
    />
  );
};
`,
      },
    },
  },
};

// 级联选择
export const Cascade: Story = {
  name: "级联选择",
  render: () => <CascaderPicker />,
  parameters: {
    docs: {
      description: {
        story: "级联选择器用于选择多级联动的数据，例如省市区选择。",
      },
      source: {
        language: "tsx",
        code: `
import { Picker } from "@react-vant-next/ui";
import { useState } from "react";
import { cascaderData } from "./data";

export default function CascaderPicker() {
  const [value, setValue] = useState(["2", "2-2", "2-2-2"]);
  return <Picker value={value} onChange={setValue} columns={cascaderData} />;
};
`,
      },
    },
  },
};

// 动态设置选项
export const Dynamic: Story = {
  name: "动态设置选项",
  render: () => <DynamicPicker />,
  parameters: {
    docs: {
      description: {
        story: "通过 `columns` 属性动态设置选项数据。",
      },
      source: {
        language: "tsx",
        code: `
import { Picker } from "@react-vant-next/ui";
import { useState } from "react";

const cities = {
  浙江: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
  福建: ["福州", "厦门", "莆田", "三明", "泉州"],
};

async function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

async function request(key: string) {
  await sleep(1000);
  return cities[key];
}

export default function DynamicPicker() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState<string[]>();
  const [columns, setColumns] = useState([
    { text: "浙江", children: [] },
    { text: "福建", children: [] },
  ]);

  return (
    <>
      <Picker
        loading={loading}
        value={value}
        columns={columns}
        onChange={async (values: string[]) => {
          const key = values[0];
          if (!key)
            return;
          // 已请求的忽略request
          if (
            columns.some(
              column => column.text === key && column.children.length > 0,
            )
          ) {
            setValue(values);
            return;
          }
          setLoading(true);
          const data = await request(key);
          setLoading(false);
          setColumns(columns =>
            columns.map((column) => {
              if (column.text === key) {
                return {
                  ...column,
                  children: data.map(x => ({ text: x, value: x })),
                };
              }
              return column;
            }),
          );
        }}
      />
    </>
  );
};
`,
      },
    },
  },
};

// 加载状态
export const Loading: Story = {
  name: "加载状态",
  render: () => (
    <LoadingPicker />
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 `loading` 属性控制是否显示加载状态，加载状态下用户不能进行操作。",
      },
      source: {
        language: "tsx",
        code: `
import { Picker } from "@react-vant-next/ui";

export default function LoadingPicker() {
  return (
    <Picker
      loading
      columns={[
        ["周一", "周二", "周三", "周四", "周五"],
        ["上午", "下午", "晚上"],
      ]}
    />
  );
};
`,
      },
    },
  },
};

// 弹出层模式
export const PopupMode: Story = {
  name: "弹出层模式",
  render: () => <PopupPicker />,
  parameters: {
    docs: {
      description: {
        story: "通过 `popup` 属性可以开启弹出层模式，通过 `visible` 控制弹出层的显示和隐藏。",
      },
      source: {
        language: "tsx",
        code: `
import { Field, Picker } from "@react-vant-next/ui";
import { useState } from "react";

const columns = [
  "南京",
  "苏州",
  "常州",
  "淮安",
  "扬州",
  "南通",
  "宿迁",
  "泰州",
  "无锡",
];

export default function PopupPicker() {
  const [value, setValue] = useState("宿迁");
  return (
    <Picker
      popup={{
        round: true,
      }}
      value={value}
      title="标题"
      columns={columns}
      onConfirm={setValue}
    >
      {(val: string, _, actions) => {
        return (
          <Field
            readOnly
            clickable
            label="选择城市"
            value={val || ""}
            placeholder="请选择城市"
            onClick={() => actions.open()}
          />
        );
      }}
    </Picker>
  );
};
`,
      },
    },
  },
};

// 自定义Columns结构
export const CustomFieldNames: Story = {
  name: "自定义Columns结构",
  render: () => <ColumnsFieldNamesPicker />,
  parameters: {
    docs: {
      description: {
        story: "通过 `columnsFieldNames` 属性可以自定义 `columns` 中数据的字段名称。",
      },
      source: {
        language: "tsx",
        code: `
import { Picker } from "@react-vant-next/ui";
import { useState } from "react";
import { fieldNamesData } from "./data";

export default function ColumnsFieldNamesPicker() {
  const [value, setValue] = useState(["福建", "福州", "台江区"]);
  return (
    <Picker
      title="标题"
      value={value}
      onChange={setValue}
      columns={fieldNamesData}
      columnsFieldNames={{
        text: "cityName",
        children: "cities",
      }}
    />
  );
};
`,
      },
    },
  },
};
