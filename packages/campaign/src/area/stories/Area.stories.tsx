import type { Meta, StoryObj } from "@storybook/react-vite";
import type { AreaInstance } from "../PropsType";
import { Button } from "@react-vant-next/ui";

import { areaList } from "@vant/area-data";
import { useRef, useState } from "react";
import BaseExample from "../demo/base";
import ColumnExample from "../demo/column";
import PopupExample from "../demo/popup";
import Area from "../index";

const meta = {
  id: "components-area",
  title: "Biz/Area",
  component: Area,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "省市区三级联动选择，适配 `@vant/area-data` 数据包，当然你也可以通过 `columns` 定制自己的省市区内容。",
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
      description: "自定义内容，当 popup 为 true 时，为自定义触发元素",
      table: {
        category: "基础",
        type: { summary: "React.ReactNode | ((value: string[], selectRows: AreaColumnOption[], actions: AreaInstance) => React.ReactNode)" },
      },
    },
    value: {
      description: "选中项",
      table: {
        category: "基础",
        type: { summary: "string[]" },
      },
    },
    defaultValue: {
      description: "默认选中项",
      table: {
        category: "基础",
        type: { summary: "string[]" },
      },
    },

    // 数据
    areaList: {
      description: "省市区数据，格式见文档",
      table: {
        category: "数据",
        type: { summary: "AreaList" },
      },
    },
    columns: {
      description: "对象数组，配置每一列显示的数据",
      table: {
        category: "数据",
        type: { summary: "PickerColumn | PickerColumn[]" },
        defaultValue: { summary: "[]" },
      },
    },
    columnsFieldNames: {
      description: "自定义 columns 结构中的字段",
      table: {
        category: "数据",
        type: { summary: "object" },
        defaultValue: { summary: "{ text: 'text', value: 'value', children: 'children' }" },
      },
    },
    placeholder: {
      control: { type: "boolean" },
      description: "是否显示占位内容",
      table: {
        category: "数据",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },

    // 外观
    title: {
      control: { type: "text" },
      description: "顶部栏标题",
      table: {
        category: "外观",
        type: { summary: "ReactNode" },
      },
    },
    confirmButtonText: {
      control: { type: "text" },
      description: "确认按钮文字",
      table: {
        category: "外观",
        type: { summary: "ReactNode" },
        defaultValue: { summary: "确认" },
      },
    },
    cancelButtonText: {
      control: { type: "text" },
      description: "取消按钮文字",
      table: {
        category: "外观",
        type: { summary: "ReactNode" },
        defaultValue: { summary: "取消" },
      },
    },
    columnsTop: {
      description: "自定义选项上方内容",
      table: {
        category: "外观",
        type: { summary: "ReactNode" },
      },
    },
    columnsBottom: {
      description: "自定义选项下方内容",
      table: {
        category: "外观",
        type: { summary: "ReactNode" },
      },
    },
    optionRender: {
      description: "自定义选项内容",
      table: {
        category: "外观",
        type: { summary: "(option: string | object) => ReactNode" },
      },
    },
    itemHeight: {
      control: { type: "number" },
      description: "选项高度，支持 px vw vh rem 单位，默认 px",
      table: {
        category: "外观",
        type: { summary: "number | string" },
        defaultValue: { summary: "44" },
      },
    },
    columnsNum: {
      control: { type: "number", min: 1, max: 3 },
      description: "显示列数，3-省市区，2-省市，1-省",
      table: {
        category: "外观",
        type: { summary: "number | string" },
        defaultValue: { summary: "3" },
      },
    },
    visibleItemCount: {
      control: { type: "number" },
      description: "可见的选项个数",
      table: {
        category: "外观",
        type: { summary: "number | string" },
        defaultValue: { summary: "6" },
      },
    },
    popup: {
      description: "是否以弹层的形式展示选择器",
      table: {
        category: "外观",
        type: { summary: "boolean | PopupProps" },
      },
    },

    // 状态
    loading: {
      control: { type: "boolean" },
      description: "是否显示加载状态",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    readOnly: {
      control: { type: "boolean" },
      description: "是否为只读状态，只读状态下无法切换选项",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    // 事件
    onChange: {
      description: "选项改变触发",
      table: {
        category: "事件",
        type: { summary: "(val: string[], options: AreaColumnOption[]) => void" },
      },
    },
    onConfirm: {
      description: "点击完成按钮触发",
      table: {
        category: "事件",
        type: { summary: "(val: string[], options: AreaColumnOption[]) => void" },
      },
    },
    onCancel: {
      description: "点击取消按钮触发",
      table: {
        category: "事件",
        type: { summary: "() => void" },
      },
    },

    // 其他
    swipeDuration: {
      control: { type: "number" },
      description: "快速滑动时惯性滚动的时长，单位 ms",
      table: {
        category: "其他",
        type: { summary: "number | string" },
        defaultValue: { summary: "300" },
      },
    },
  },
} satisfies Meta<typeof Area>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Partial<Story> = {
  name: "基础用法",
  render: _args => <BaseExample />,
  parameters: {
    docs: {
      description: {
        story: "初始化省市区组件时，需要通过 `areaList` 属性传入省市区数据。",
      },
    },
    source: {
      language: "tsx",
      code: `
import { Area } from "@react-vant-next/ui";
import { areaList } from "@vant/area-data";

export default () => {
  return (
    <Area title="标题" areaList={areaList} onConfirm={v => console.log(v)} />
  );
};
`,
    },
  },
};

// 配置显示列
export const Columns: Story = {
  name: "配置显示列",
  args: {
    areaList,
    title: "选择地区",
    columnsNum: 2,
  },
  render: _args => <ColumnExample />,
  parameters: {
    docs: {
      description: {
        story: "可以通过 `columnsNum` 属性配置省市区显示的列数，默认情况下会显示省市区，当你设置为 `2`，则只会显示省市选择。",
      },
      source: {
        language: "tsx",
        code: `
import { Area } from "@react-vant-next/ui";
import { areaList } from "@vant/area-data";

export default function ColumnExample() {
  return (
    <Area
      title="标题"
      areaList={areaList}
      columnsNum={2}
      onChange={(val, options) => {
        console.log("selected value: ", val);
        console.log("selected option: ", options);
      }}
      onConfirm={v => console.log(v)}
    />
  );
};
`,
      },
    },
  },
};

// 搭配弹出层使用
export const Popup: Story = {
  name: "搭配弹出层使用",
  args: {
    areaList,
    title: "选择地区",
    popup: { round: true },
  },
  render: _args => <PopupExample />,
  parameters: {
    docs: {
      description: {
        story: "可以通过 `popup` 属性启用弹出层特性。启用 `popup` 属性后，一般使用 `onConfirm` 事件代替 `onChange` 更新外部值。",
      },
      source: {
        language: "tsx",
        code: `
import { Area, Field } from "@react-vant-next/ui";
import { areaList } from "@vant/area-data";
import { useState } from "react";

export default function PopupExample() {
  const [value, setValue] = useState(["220000", "220300", "220303"]);
  return (
    <Area
      popup={{
        round: true,
      }}
      title="标题"
      value={value}
      areaList={areaList}
      onConfirm={setValue}
    >
      {(_, selectRows, actions) => {
        return (
          <Field
            label="选择地区"
            value={selectRows.map(row => row?.text).join(",")}
            onClick={() => actions.open()}
          />
        );
      }}
    </Area>
  );
};
`,
      },
    },
  },
};

// 自定义初始值 - 这个示例在 README 中没有，但保留是因为它展示了一个有用的功能
function InitialValueExample() {
  const areaRef = useRef<AreaInstance>(null);
  const [selectedValue, setSelectedValue] = useState(["330000", "330300", "330305"]);

  return (
    <div>
      <Area
        ref={areaRef}
        title="选择地区"
        value={selectedValue}
        areaList={areaList}
        onConfirm={(val, options) => {
          console.log(val, options);
          setSelectedValue(val);
        }}
      />
      <div style={{ marginTop: "10px" }}>
        <Button
          type="primary"
          onClick={() => setSelectedValue(["440000", "440300", "440305"])}
        >
          设置广东深圳
        </Button>
      </div>
    </div>
  );
}

export const InitialValue: Story = {
  name: "自定义初始值",
  args: {
    areaList,
    title: "选择地区",
    value: ["330000", "330300", "330305"],
  },
  render: () => <InitialValueExample />,
  parameters: {
    docs: {
      description: {
        story: "通过 `value` 属性设置初始值，通过 `ref` 获取实例并调用实例方法。",
      },
      source: {
        language: "tsx",
        code: `
const areaRef = useRef<AreaInstance>(null)
const [selectedValue, setSelectedValue] = useState(["330000", "330300", "330305"])

return (
  <div>
    <Area
      ref={areaRef}
      title="选择地区"
      value={selectedValue}
      areaList={areaList}
      onConfirm={(val, options) => {
        console.log(val, options)
        setSelectedValue(val)
      }}
    />
    <div style={{ marginTop: "10px" }}>
      <Button
        type="primary"
        onClick={() => setSelectedValue(["440000", "440300", "440305"])}
      >
        设置广东深圳
      </Button>
    </div>
  </div>
)`,
      },
    },
  },
};
