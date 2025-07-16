import type { Meta, StoryObj } from "@storybook/react-vite";
import type { DateTimePickerInstance } from "../PropsType";
import React, { useRef, useState } from "react";
import Button from "../../button";
import Field from "../../field";
import DatetimePicker from "../DatetimePicker";

const meta = {
  id: "form-datetime-picker",
  title: "Form/DatetimePicker",
  component: DatetimePicker,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        story: "时间选择器，支持日期、年月、时分等维度，通常与弹出层组件配合使用。",
      },
    },
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["date", "time", "datetime", "datehour", "month-day", "year-month"],
      description: "时间类型",
      table: {
        type: { summary: "'date' | 'time' | 'datetime' | 'datehour' | 'month-day' | 'year-month'" },
        defaultValue: { summary: "'datetime'" },
        required: false,
      },
    },
    title: {
      control: { type: "text" },
      description: "顶部栏标题",
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "" },
        required: false,
      },
    },
    confirmButtonText: {
      control: { type: "text" },
      description: "确认按钮文字",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "确认" },
        required: false,
      },
    },
    cancelButtonText: {
      control: { type: "text" },
      description: "取消按钮文字",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "取消" },
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
      description: "是否为只读状态",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
      },
    },
    filter: {
      description: "选项过滤函数",
      table: {
        type: { summary: "(type: string, values: string[]) => string[]" },
        required: false,
      },
    },
    formatter: {
      description: "选项格式化函数",
      table: {
        type: { summary: "(type: string, value: string) => string" },
        required: false,
      },
    },
    columnsOrder: {
      control: { type: "object" },
      description: "自定义列排序数组",
      table: {
        type: { summary: "string[]" },
        required: false,
      },
    },
    // 日期类型特有属性
    minDate: {
      control: { type: "date" },
      description: "可选的最小时间，精确到分钟",
      table: {
        type: { summary: "Date" },
        defaultValue: { summary: "十年前" },
        required: false,
      },
    },
    maxDate: {
      control: { type: "date" },
      description: "可选的最大时间，精确到分钟",
      table: {
        type: { summary: "Date" },
        defaultValue: { summary: "十年后" },
        required: false,
      },
    },
    // 时间类型特有属性
    minHour: {
      control: { type: "number" },
      description: "可选的最小小时",
      table: {
        type: { summary: "number | string" },
        defaultValue: { summary: "0" },
        required: false,
      },
    },
    maxHour: {
      control: { type: "number" },
      description: "可选的最大小时",
      table: {
        type: { summary: "number | string" },
        defaultValue: { summary: "23" },
        required: false,
      },
    },
    minMinute: {
      control: { type: "number" },
      description: "可选的最小分钟",
      table: {
        type: { summary: "number | string" },
        defaultValue: { summary: "0" },
        required: false,
      },
    },
    maxMinute: {
      control: { type: "number" },
      description: "可选的最大分钟",
      table: {
        type: { summary: "number | string" },
        defaultValue: { summary: "59" },
        required: false,
      },
    },
    // 事件
    onChange: {
      description: "当值变化时触发的事件",
      table: {
        type: { summary: "(value: Date | string) => void" },
        required: false,
      },
    },
    onConfirm: {
      description: "点击完成按钮时触发的事件",
      table: {
        type: { summary: "(value: Date | string) => void" },
        required: false,
      },
    },
    onCancel: {
      description: "点击取消按钮时触发的事件",
      table: {
        type: { summary: "() => void" },
        required: false,
      },
    },
  },
} satisfies Meta<typeof DatetimePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

// 选择日期
export const Basic: Story = {
  name: "选择日期",
  render: () => {
    const [value, setValue] = React.useState(() => new Date());

    return (
      <DatetimePicker
        title="选择年月日"
        type="date"
        minDate={new Date(2020, 0, 1)}
        maxDate={new Date(2025, 10, 1)}
        value={value}
        onChange={setValue}
      />
    );
  },
  args: {
    type: "date",
    minDate: new Date(2020, 0, 1),
    maxDate: new Date(2025, 10, 1),
    value: new Date(),
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `type` 属性指定选择器类型，`type=\"date\"` 表示选择年月日。",
      },
      source: {
        language: "tsx",
        code: `
const [value, setValue] = React.useState(() => new Date());

return (
  <DatetimePicker
    title="选择年月日"
    type="date"
    minDate={new Date(2020, 0, 1)}
    maxDate={new Date(2025, 10, 1)}
    value={value}
    onChange={setValue}
  />
);`,
      },
    },
  },
};

// 搭配弹出层使用
export const WithPopup: Story = {
  name: "搭配弹出层使用",
  render: () => {
    return WithPopupExample();
  },
  parameters: {
    docs: {
      description: {
        story: "时间选择器通常与弹出层组件配合使用。",
      },
      source: {
        language: "tsx",
        code: `
function WithPopupExample() {
  const [value, setValue] = useState(() => new Date());
  return (
    <DatetimePicker
      popup={{
        round: true,
      }}
      type="date"
      title="选择年月日"
      minDate={new Date(2021, 0, 1)}
      maxDate={new Date(2025, 10, 1)}
      value={value}
      onConfirm={setValue}
    >
      {(val, _, actions) => {
        return (
          <Field
            readOnly
            clickable
            label="选择年月日"
            value={val.toLocaleDateString()}
            placeholder="请选择日期"
            onClick={() => actions.open()}
          />
        );
      }}
    </DatetimePicker>
  );
}`,
      },
    },
  },
};

// 选择年月
export const YearMonth: Story = {
  name: "选择年月",
  render: () => {
    return (
      <DatetimePicker
        type="year-month"
        minDate={new Date(2020, 0, 1)}
        maxDate={new Date(2025, 10, 1)}
        defaultValue={new Date()}
        formatter={(type: string, val: string) => {
          if (type === "year") {
            return `${val}年`;
          }
          if (type === "month") {
            return `${val}月`;
          }
          return val;
        }}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "将 `type` 设置为 `year-month` 即可选择年份和月份。",
      },
      source: {
        language: "tsx",
        code: `
<DatetimePicker
  type='year-month'
  minDate={new Date(2020, 0, 1)}
  maxDate={new Date(2025, 10, 1)}
  defaultValue={new Date()}
  formatter={(type: string, val: string) => {
    if (type === 'year') {
      return \`\${val}年\`
    }
    if (type === 'month') {
      return \`\${val}月\`
    }
    return val
  }}
/>`,
      },
    },
  },
};

// 选择月日
export const MonthDay: Story = {
  name: "选择月日",
  render: () => {
    const [value, setValue] = React.useState(() => new Date());
    return (
      <DatetimePicker
        type="month-day"
        minDate={new Date(2020, 0, 1)}
        maxDate={new Date(2025, 10, 1)}
        value={value}
        onChange={setValue}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "将 `type` 设置为 `month-day` 即可选择月份和日期。",
      },
      source: {
        language: "tsx",
        code: `
const [value, setValue] = React.useState(() => new Date())
return (
  <DatetimePicker
    type="month-day"
    minDate={new Date(2020, 0, 1)}
    maxDate={new Date(2025, 10, 1)}
    value={value}
    onChange={setValue}
  />
);`,
      },
    },
  },
};

// 选择时间
export const Time: Story = {
  name: "选择时间",
  render: args => <DatetimePicker {...args} />,
  args: {
    defaultValue: "12:00",
    type: "time",
    minHour: 10,
    maxHour: 20,
  },
  parameters: {
    docs: {
      description: {
        story: "将 `type` 设置为 `time` 即可选择时间（小时和分钟）。",
      },
    },
  },
};

// 选择完整时间
export const Datetime: Story = {
  name: "选择完整时间",
  render: () => {
    const [value, setValue] = React.useState(() => new Date());
    return (
      <DatetimePicker
        type="datetime"
        minDate={new Date(2020, 0, 1)}
        maxDate={new Date(2025, 10, 1)}
        value={value}
        onChange={setValue}
      />
    );
  },
  args: {
    type: "datetime",
    minDate: new Date(2020, 0, 1),
    maxDate: new Date(2025, 10, 1),
    defaultValue: new Date(),
  },
  parameters: {
    docs: {
      description: {
        story: "将 `type` 设置为 `datetime` 即可选择完整时间，包括年月日和小时分钟。",
      },
      source: {
        language: "tsx",
        code: `
const [value, setValue] = React.useState(() => new Date())
return (
  <DatetimePicker
    type='datetime'
    minDate={new Date(2020, 0, 1)}
    maxDate={new Date(2025, 10, 1)}
    value={value}
    onChange={setValue}
  />
)
`,
      },
    },
  },
};

// 选择年月日小时
export const DateHour: Story = {
  name: "选择年月日小时",
  render: () => {
    const [value, setValue] = React.useState(() => new Date());
    return (
      <DatetimePicker
        type="datehour"
        minDate={new Date(2020, 0, 1)}
        maxDate={new Date(2025, 10, 1)}
        value={value}
        onChange={setValue}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "将 `type` 设置为 `datehour` 即可选择日期和小时，不包括分钟。",
      },
      source: {
        language: "tsx",
        code: `
const [value, setValue] = React.useState(() => new Date())
return (
  <DatetimePicker
    type='datehour'
    minDate={new Date(2020, 0, 1)}
    maxDate={new Date(2025, 10, 1)}
    value={value}
    onChange={setValue}
  />
)
`,
      },
    },
  },
};

// 选项过滤器
export const Filter: Story = {
  name: "选项过滤器",
  render: () => (
    <DatetimePicker
      type="time"
      minHour="10"
      maxHour="20"
      defaultValue="12:00"
      filter={(type, options) => {
        if (type === "minute") {
          return options.filter(option => +option % 5 === 0);
        }
        return options;
      }}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 `filter` 函数可以对选项数组进行过滤，实现自定义时间间隔。",
      },
      source: {
        language: "tsx",
        code: `
<DatetimePicker
  type='time'
  minHour='10'
  maxHour='20'
  defaultValue='12:00'
  filter={(type, options) => {
    if (type === 'minute') {
      return options.filter(option => +option % 5 === 0)
    }
    return options
  }}
/>
`,
      },
    },
  },
};

// 自定义列排序
export const ColumnsOrder: Story = {
  name: "自定义列排序",
  render: () => {
    const [value, setValue] = React.useState(() => new Date());
    return (
      <DatetimePicker
        type="date"
        columnsOrder={["month", "day", "year"]}
        minDate={new Date(2020, 0, 1)}
        maxDate={new Date(2025, 10, 1)}
        value={value}
        onChange={setValue}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `columnsOrder` 属性可以自定义列的排序。",
      },
      source: {
        language: "tsx",
        code: `
const [value, setValue] = React.useState(() => new Date());
return (
  <DatetimePicker
    type="date"
    columnsOrder={["month", "day", "year"]}
    minDate={new Date(2020, 0, 1)}
    maxDate={new Date(2025, 10, 1)}
    value={value}
    onChange={setValue}
  />
);`,
      },
    },
  },
};

// 自定义格式化函数
export const Formatter: Story = {
  name: "自定义格式化函数",
  render: () => {
    const [value, setValue] = React.useState(() => new Date());
    return (
      <DatetimePicker
        type="date"
        minDate={new Date(2020, 0, 1)}
        maxDate={new Date(2025, 10, 1)}
        value={value}
        onChange={setValue}
        formatter={(type, val) => {
          if (type === "year") {
            return `${val}年`;
          }
          if (type === "month") {
            return `${val}月`;
          }
          if (type === "day") {
            return `${val}日`;
          }
          return val;
        }}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `formatter` 函数可以对选项文字进行格式化。",
      },
      source: {
        language: "tsx",
        code: `
const [value, setValue] = React.useState(() => new Date());
return (
  <DatetimePicker
    type="date"
    minDate={new Date(2020, 0, 1)}
    maxDate={new Date(2025, 10, 1)}
    value={value}
    onChange={setValue}
    formatter={(type, val) => {
    if (type === 'year') {
      return \`\${val}年\`;
    }
    if (type === 'month') {
      return \`\${val}月\`;
    }
    if (type === 'day') {
      return \`\${val}日\`;
    }
    return val;
  }}
/>`,
      },
    },
  },
};

;

// 使用 ref 获取实例
export const WithRef: Story = {
  name: "使用 ref 获取实例",
  render: () => {
    return WithRefExample();
  },
  parameters: {
    docs: {
      description: {
        story: "通过 ref 可以获取到 DatetimePicker 实例并调用实例方法。",
      },
      source: {
        language: "tsx",
        code: `
function WithRefExample() {
  const pickerRef = useRef<DateTimePickerInstance>(null);

  const showPicker = () => {
    pickerRef.current?.open();
  };

  return (
    <div>
      <Button onClick={showPicker}>显示时间选择器</Button>
      <DatetimePicker
        ref={pickerRef}
        type="datetime"
        value={new Date()}
        minDate={new Date(2020, 0, 1)}
        maxDate={new Date(2025, 10, 1)}
        onConfirm={date => console.log("确认", date)}
        onCancel={() => console.log("取消")}
      />
    </div>
  );
}`,
      },
    },
  },
};
function WithRefExample() {
  const pickerRef = useRef<DateTimePickerInstance>(null);

  const showPicker = () => {
    pickerRef.current?.open();
  };

  return (
    <div>
      <Button onClick={showPicker}>显示时间选择器</Button>
      <DatetimePicker
        popup={{
          round: true,
        }}
        ref={pickerRef}
        type="datetime"
        value={new Date()}
        minDate={new Date(2020, 0, 1)}
        maxDate={new Date(2025, 10, 1)}
        onConfirm={date => console.log("确认", date)}
        onCancel={() => console.log("取消")}
      />
    </div>
  );
}

function WithPopupExample() {
  const [value, setValue] = useState(() => new Date());
  return (
    <DatetimePicker
      popup={{
        round: true,
      }}
      type="date"
      title="选择年月日"
      minDate={new Date(2021, 0, 1)}
      maxDate={new Date(2025, 10, 1)}
      value={value}
      onConfirm={setValue}
    >
      {(val, _, actions) => {
        return (
          <Field
            readOnly
            clickable
            label="选择年月日"
            value={val.toLocaleDateString()}
            placeholder="请选择日期"
            onClick={() => actions.open()}
          />
        );
      }}
    </DatetimePicker>
  );
}
