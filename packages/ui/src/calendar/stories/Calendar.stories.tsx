import type { Meta, StoryObj } from "@storybook/react-vite";
import type { CalendarDayItem } from "../PropsType";
import { useState } from "react";

import Cell from "../../cell";
import Calendar from "../index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  id: "form-calendar",
  title: "Form/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "日历组件，用于选择日期或日期区间。",
      },
    },
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["single", "range", "multiple"],
      description: "选择类型，single 表示选择单个日期，range 表示选择日期区间，multiple 表示选择多个日期",
      table: {
        type: { summary: "CalendarType" },
        defaultValue: { summary: "single" },
        category: "基础",
      },
    },
    title: {
      control: { type: "text" },
      description: "日历标题",
      table: {
        type: { summary: "string | React.ReactNode" },
        category: "显示",
      },
    },
    color: {
      control: { type: "color" },
      description: "主题色，对底部按钮和选中日期生效",
      table: {
        type: { summary: "string" },
        category: "样式",
      },
    },
    round: {
      control: { type: "boolean" },
      description: "是否显示圆角弹窗",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "样式",
      },
    },
    readOnly: {
      control: { type: "boolean" },
      description: "是否为只读状态，只读状态下不能选择日期",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "状态",
      },
    },
    poppable: {
      control: { type: "boolean" },
      description: "是否以弹层的形式展示日历",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "显示",
      },
    },
    showMark: {
      control: { type: "boolean" },
      description: "是否显示月份背景水印",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "显示",
      },
    },
    showTitle: {
      control: { type: "boolean" },
      description: "是否展示日历标题",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "显示",
      },
    },
    showSubtitle: {
      control: { type: "boolean" },
      description: "是否展示日历副标题（年月）",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "显示",
      },
    },
    showConfirm: {
      control: { type: "boolean" },
      description: "是否展示确认按钮",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "显示",
      },
    },
    confirmText: {
      control: { type: "text" },
      description: "确认按钮的文字",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "确定" },
        category: "显示",
      },
    },
    confirmDisabledText: {
      control: { type: "text" },
      description: "确认按钮处于禁用状态时的文字",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "确定" },
        category: "显示",
      },
    },
    rangePrompt: {
      control: { type: "text" },
      description: "范围选择超过最多可选天数时的提示文案",
      table: {
        type: { summary: "string" },
        category: "显示",
      },
    },
    formatter: {
      description: "日期格式化函数",
      table: {
        type: { summary: "(item: CalendarDayItem) => CalendarDayItem" },
        category: "功能",
      },
    },
    formatMonthTitle: {
      description: "自定义月标题内容",
      table: {
        type: { summary: "(date: Date) => React.ReactNode" },
        category: "功能",
      },
    },
    weekdays: {
      description: "自定义星期文案",
      table: {
        type: { summary: "React.ReactNode[]" },
        defaultValue: { summary: "['日', '一', '二', '三', '四', '五', '六']" },
        category: "显示",
      },
    },
    value: {
      description: "选中的日期",
      table: {
        type: { summary: "CalendarValue" },
        category: "状态",
      },
    },
    defaultValue: {
      description: "默认选中的日期",
      table: {
        type: { summary: "CalendarValue" },
        category: "状态",
      },
    },
    minDate: {
      description: "可选择的最小日期",
      table: {
        type: { summary: "Date" },
        defaultValue: { summary: "当前日期" },
        category: "范围",
      },
    },
    maxDate: {
      description: "可选择的最大日期",
      table: {
        type: { summary: "Date" },
        defaultValue: { summary: "当前日期的六个月后" },
        category: "范围",
      },
    },
    maxRange: {
      control: { type: "number" },
      description: "日期区间最多可选天数，默认无限制",
      table: {
        type: { summary: "number | string" },
        category: "范围",
      },
    },
    firstDayOfWeek: {
      control: { type: "number", min: 0, max: 6 },
      description: "设置周起始日，0 表示周日，1 表示周一，以此类推",
      table: {
        type: { summary: "number | string" },
        defaultValue: { summary: "0" },
        category: "显示",
      },
    },
    position: {
      control: { type: "select" },
      options: ["top", "right", "bottom", "left"],
      description: "弹出位置",
      table: {
        type: { summary: "PopupPosition" },
        defaultValue: { summary: "bottom" },
        category: "显示",
      },
    },
    rowHeight: {
      control: { type: "number" },
      description: "日期行高",
      table: {
        type: { summary: "number | string" },
        category: "样式",
      },
    },
    allowSameDay: {
      control: { type: "boolean" },
      description: "是否允许日期范围的起止时间为同一天",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "功能",
      },
    },
    closeOnPopstate: {
      control: { type: "boolean" },
      description: "是否在页面回退时自动关闭",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "功能",
      },
    },
    closeOnClickOverlay: {
      control: { type: "boolean" },
      description: "是否在点击遮罩层后关闭",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "功能",
      },
    },
    safeAreaInsetBottom: {
      control: { type: "boolean" },
      description: "是否开启底部安全区适配",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "样式",
      },
    },
    showRangePrompt: {
      control: { type: "boolean" },
      description: "范围选择超过最多可选天数时，是否展示提示文案",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "显示",
      },
    },
    horizontal: {
      control: { type: "boolean" },
      description: "是否为水平滑动模式",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "显示",
      },
    },
    topInfoRender: {
      description: "自定义日期上方的提示信息",
      table: {
        type: { summary: "(day: CalendarDayItem) => React.ReactNode" },
        category: "功能",
      },
    },
    bottomInfoRender: {
      description: "自定义日期下方的提示信息",
      table: {
        type: { summary: "(day: CalendarDayItem) => React.ReactNode" },
        category: "功能",
      },
    },
    onSelect: {
      description: "选择日期时触发",
      table: {
        type: { summary: "(value: CalendarValue) => void" },
        category: "事件",
      },
    },
    onConfirm: {
      description: "确认选择时触发",
      table: {
        type: { summary: "(value: CalendarValue) => void" },
        category: "事件",
      },
    },
    onClose: {
      description: "关闭弹出层时触发",
      table: {
        type: { summary: "() => void" },
        category: "事件",
      },
    },
    onClosed: {
      description: "关闭弹出层且动画结束后触发",
      table: {
        type: { summary: "() => void" },
        category: "事件",
      },
    },
    onUnselect: {
      description: "当日历组件的 type 为 multiple 时，取消选中日期时触发",
      table: {
        type: { summary: "(value: Date) => void" },
        category: "事件",
      },
    },
    onMonthShow: {
      description: "当某个月份进入可视区域时触发",
      table: {
        type: { summary: "(value: { date: Date, title: string }) => void" },
        category: "事件",
      },
    },
    onOverRange: {
      description: "范围选择超过最多可选天数时触发",
      table: {
        type: { summary: "() => void" },
        category: "事件",
      },
    },
    onClickSubtitle: {
      description: "点击日历副标题时触发",
      table: {
        type: { summary: "(e: React.MouseEvent) => void" },
        category: "事件",
      },
    },
    children: {
      description: "自定义内容，poppable 为 true 时表示自定义触发元素",
      table: {
        type: { summary: "(value: CalendarValue, actions: PickerPopupActions) => React.ReactNode" },
        category: "显示",
      },
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  name: "基本用法",
  render: () => {
    return (
      <>
        <Calendar>
          {(val: Date, actions) => (
            <Cell
              isLink
              title="单个日期"
              value={val ? val.toLocaleDateString() : "请选择日期"}
              onClick={() => actions.open()}
            />
          )}
        </Calendar>
        <Calendar type="multiple">
          {(val: Date[], actions) => (
            <Cell
              isLink
              title="多个日期"
              value={val ? `已选${val.length}个日期` : "请选择日期"}
              onClick={() => actions.open()}
            />
          )}
        </Calendar>
        <Calendar type="range">
          {(val: Date[], actions) => (
            <Cell
              isLink
              title="日期区间"
              titleStyle={{ flex: "none" }}
              value={
                val
                  ? val.map(el => el.toLocaleDateString()).join("~")
                  : "请选择日期"
              }
              onClick={() => actions.open()}
            />
          )}
        </Calendar>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "日历组件支持三种选择类型：单个日期、多个日期和日期区间。",
      },
      source: {
        language: "tsx",
        code: `
<>
  <Calendar>
    {(val: Date, actions) => (
      <Cell
        isLink
        title="单个日期"
        value={val ? val.toLocaleDateString() : "请选择日期"}
        onClick={() => actions.open()}
      />
    )}
  </Calendar>
  <Calendar type="multiple">
    {(val: Date[], actions) => (
      <Cell
        isLink
        title="多个日期"
        value={val ? \`已选\${val.length}个日期\` : "请选择日期"}
        onClick={() => actions.open()}
      />
    )}
  </Calendar>
  <Calendar type="range">
    {(val: Date[], actions) => (
      <Cell
        isLink
        title="日期区间"
        titleStyle={{ flex: "none" }}
        value={
          val
            ? val.map(el => el.toLocaleDateString()).join("~")
            : "请选择日期"
        }
        onClick={() => actions.open()}
      />
    )}
  </Calendar>
</>`,
      },
    },
  },
};

// 快捷选择
export const QuickSelect: Story = {
  name: "快捷选择",
  render: () => {
    return (
      <>
        <Calendar showConfirm={false}>
          {(val: Date, actions) => (
            <Cell
              isLink
              title="单个日期"
              value={val ? val.toLocaleDateString() : "请选择日期"}
              onClick={() => actions.open()}
            />
          )}
        </Calendar>

        <Calendar showConfirm={false} type="range">
          {(val: Date[], actions) => (
            <Cell
              isLink
              title="日期区间"
              titleStyle={{ flex: "none" }}
              value={
                val
                  ? val.map(el => el.toLocaleDateString()).join("~")
                  : "请选择日期"
              }
              onClick={() => actions.open()}
            />
          )}
        </Calendar>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "将 `showConfirm` 设置为 `false` 可以隐藏确认按钮，这种情况下选择完成后会立即触发 `onConfirm` 事件。",
      },
      source: {
        language: "tsx",
        code: `
<>
  <Calendar showConfirm={false}>
    {(val: Date, actions) => (
      <Cell
        isLink
        title="单个日期"
        value={val ? val.toLocaleDateString() : "请选择日期"}
        onClick={() => actions.open()}
      />
    )}
  </Calendar>

  <Calendar showConfirm={false} type="range">
    {(val: Date[], actions) => (
      <Cell
        isLink
        title="日期区间"
        titleStyle={{ flex: "none" }}
        value={
          val
            ? val.map(el => el.toLocaleDateString()).join("~")
            : "请选择日期"
        }
        onClick={() => actions.open()}
      />
    )}
  </Calendar>
</>`,
      },
    },
  },
};

// 自定义颜色
export const CustomColor: Story = {
  name: "自定义颜色",
  args: {
    type: "range",
    color: "#1989fa",
  },
  render: (args) => {
    return (
      <Calendar {...args}>
        {(val: Date[], actions) => (
          <Cell
            isLink
            title="颜色"
            titleStyle={{ flex: "none" }}
            value={
              val
                ? val.map(el => el.toLocaleDateString()).join("~")
                : "请选择日期"
            }
            onClick={() => actions.open()}
          />
        )}
      </Calendar>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `color` 属性可以自定义日历的主题色。",
      },
      source: {
        language: "tsx",
        code: `
<Calendar type="range" color="#1989fa">
  {(val: Date[], actions) => (
    <Cell
      isLink
      title="颜色"
      titleStyle={{ flex: "none" }}
      value={
        val
          ? val.map(el => el.toLocaleDateString()).join("~")
          : "请选择日期"
      }
      onClick={() => actions.open()}
    />
  )}
</Calendar>`,
      },
    },
  },
};

// 自定义日期范围
export const CustomRange: Story = {
  name: "自定义日期范围",
  args: {
    type: "multiple",
    minDate: new Date(2010, 0, 1),
    maxDate: new Date(2010, 0, 31),
  },
  render: (args) => {
    return (
      <Calendar
        {...args}
      >
        {(val: Date[], actions) => (
          <Cell
            isLink
            title="自定义日期范围"
            value={val ? `已选${val.length}个日期` : "请选择日期"}
            onClick={() => actions.open()}
          />
        )}
      </Calendar>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `minDate` 和 `maxDate` 属性可以自定义可选择的日期范围。",
      },
      source: {
        language: "tsx",
        code: `
<Calendar
  type="multiple"
  minDate={new Date(2010, 0, 1)}
  maxDate={new Date(2010, 0, 31)}
>
  {(val: Date[], actions) => (
    <Cell
      isLink
      title="自定义日期范围"
      value={val ? \`已选\${val.length}个日期\` : "请选择日期"}
      onClick={() => actions.open()}
    />
  )}
</Calendar>`,
      },
    },
  },
};

// 自定义按钮文字
export const CustomButtonText: Story = {
  name: "自定义按钮文字",
  args: {
    confirmText: "完成",
    confirmDisabledText: "请选择结束时间",
  },
  render: (args) => {
    return (
      <Calendar {...args}>
        {(val: Date, actions) => (
          <Cell
            isLink
            title="自定义按钮文字"
            value={val ? val.toLocaleDateString() : "请选择日期"}
            onClick={() => actions.open()}
          />
        )}
      </Calendar>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `confirmText` 和 `confirmDisabledText` 属性可以自定义按钮文字。",
      },
      source: {
        language: "tsx",
        code: `
<Calendar confirmText="完成" confirmDisabledText="请选择结束时间">
  {(val: Date, actions) => (
    <Cell
      isLink
      title="自定义按钮文字"
      value={val ? val.toLocaleDateString() : "请选择日期"}
      onClick={() => actions.open()}
    />
  )}
</Calendar>`,
      },
    },
  },
};

// 自定义日期文案
function CustomDayTextExample() {
  const formatter = (day: CalendarDayItem) => {
    const month = day.date?.getMonth() + 1;
    const date = day.date?.getDate();

    if (month === 5) {
      if (date === 1) {
        day.topInfo = "劳动节";
      }
      else if (date === 4) {
        day.topInfo = "青年节";
      }
      else if (date === 11) {
        day.text = "今天";
      }
    }

    if (day.type === "start") {
      day.bottomInfo = "入住";
    }
    else if (day.type === "end") {
      day.bottomInfo = "离店";
    }

    return day;
  };

  return (
    <Calendar type="range" formatter={formatter}>
      {(val: Date[], actions) => (
        <Cell
          isLink
          title="自定义日期文案"
          titleStyle={{ flex: "none" }}
          value={
            val
              ? val.map(el => el.toLocaleDateString()).join("~")
              : "请选择日期"
          }
          onClick={() => actions.open()}
        />
      )}
    </Calendar>
  );
}

export const CustomDayText: Story = {
  name: "自定义日期文案",
  args: {
    type: "range",
  },
  render: () => <CustomDayTextExample />,
  parameters: {
    docs: {
      description: {
        story: "通过 `formatter` 函数可以自定义日历上每一天的文案，对象中的 `topInfo` 和 `bottomInfo` 属性分别表示上方和下方的文案信息。",
      },
      source: {
        language: "tsx",
        code: `
const formatter = (day: CalendarDayItem) => {
  const month = day.date?.getMonth() + 1
  const date = day.date?.getDate()

  if (month === 5) {
    if (date === 1) {
      day.topInfo = "劳动节"
    } else if (date === 4) {
      day.topInfo = "青年节"
    } else if (date === 11) {
      day.text = "今天"
    }
  }

  if (day.type === "start") {
    day.bottomInfo = "入住"
  } else if (day.type === "end") {
    day.bottomInfo = "离店"
  }

  return day
}

<Calendar type="range" formatter={formatter}>
  {(val: Date[], actions) => (
    <Cell
      isLink
      title="自定义日期文案"
      titleStyle={{ flex: "none" }}
      value={
        val
          ? val.map(el => el.toLocaleDateString()).join("~")
          : "请选择日期"
      }
      onClick={() => actions.open()}
    />
  )}
</Calendar>`,
      },
    },
  },
};

// 自定义周/月文案
export const CustomWeekMonth: Story = {
  name: "自定义周/月文案",
  args: {
    weekdays: ["🌕", "🌖", "🌗", "🌘", "🌑", "🌒", "🌓"],
  },
  render: (args) => {
    return (
      <Calendar
        formatMonthTitle={date =>
          `${date.getFullYear()}🥑${date.getMonth() + 1}🍪`}
        {...args}
      >
        {(val: Date, actions) => (
          <Cell
            isLink
            title="自定义周/月文案"
            value={val ? val.toLocaleDateString() : "请选择日期"}
            onClick={() => actions.open()}
          />
        )}
      </Calendar>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `formatMonthTitle` 函数可以自定义月标题的内容，通过 `weekdays` 数组可以自定义星期文案。",
      },
      source: {
        language: "tsx",
        code: `
<Calendar
  formatMonthTitle={date =>
    \`\${date.getFullYear()}🥑\${date.getMonth() + 1}🍪\`
  }
  weekdays={["🌕", "🌖", "🌗", "🌘", "🌑", "🌒", "🌓"]}
>
  {(val: Date, actions) => (
    <Cell
      isLink
      title="自定义周/月文案"
      value={val ? val.toLocaleDateString() : "请选择日期"}
      onClick={() => actions.open()}
    />
  )}
</Calendar>`,
      },
    },
  },
};

// 水平滑动
export const Horizontal: Story = {
  name: "水平滑动",
  args: {
    horizontal: true,
  },
  render: (args) => {
    return (
      <Calendar {...args}>
        {(val: Date, actions) => (
          <Cell
            isLink
            title="水平滑动"
            value={val ? val.toLocaleDateString() : "请选择日期"}
            onClick={() => actions.open()}
          />
        )}
      </Calendar>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "设置 `horizontal` 属性后，日历将会变为水平滑动模式，此时需要注意关闭 `showSubtitle` 属性以获得更好的体验。",
      },
      source: {
        language: "tsx",
        code: `
<Calendar horizontal>
  {(val: Date, actions) => (
    <Cell
      isLink
      title="水平滑动"
      value={val ? val.toLocaleDateString() : "请选择日期"}
      onClick={() => actions.open()}
    />
  )}
</Calendar>`,
      },
    },
  },
};

// 日期区间最大范围
export const MaxRange: Story = {
  name: "日期区间最大范围",
  args: {
    type: "range",
    maxRange: 3,
  },
  render: (args) => {
    return (
      <Calendar {...args}>
        {(val: Date[], actions) => (
          <Cell
            isLink
            title="日期区间最大范围"
            titleStyle={{ flex: "none" }}
            value={
              val
                ? val.map(el => el.toLocaleDateString()).join("~")
                : "请选择日期"
            }
            onClick={() => actions.open()}
          />
        )}
      </Calendar>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "设置 `maxRange` 属性后，日期区间最多可选天数不能超过该值。",
      },
      source: {
        language: "tsx",
        code: `
<Calendar type="range" maxRange={3}>
  {(val: Date[], actions) => (
    <Cell
      isLink
      title="日期区间最大范围"
      titleStyle={{ flex: "none" }}
      value={
        val
          ? val.map(el => el.toLocaleDateString()).join("~")
          : "请选择日期"
      }
      onClick={() => actions.open()}
    />
  )}
</Calendar>`,
      },
    },
  },
};

// 自定义周起始日
export const FirstDayOfWeek: Story = {
  name: "自定义周起始日",
  args: {
    firstDayOfWeek: 1,
  },
  render: (args) => {
    return (
      <Calendar {...args}>
        {(val: Date, actions) => (
          <Cell
            isLink
            title="周起始日"
            value={val ? val.toLocaleDateString() : "请选择日期"}
            onClick={() => actions.open()}
          />
        )}
      </Calendar>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `firstDayOfWeek` 属性设置一周的第一天，默认为 0，即周日，设置为 1 则为周一，以此类推。",
      },
      source: {
        language: "tsx",
        code: `
<Calendar firstDayOfWeek={1}>
  {(val: Date, actions) => (
    <Cell
      isLink
      title="周起始日"
      value={val ? val.toLocaleDateString() : "请选择日期"}
      onClick={() => actions.open()}
    />
  )}
</Calendar>`,
      },
    },
  },
};

// 平铺展示
export const Tiled: Story = {
  name: "平铺展示",
  render: () => {
    const formatDate = (date: Date) => `${date.getMonth() + 1}/${date.getDate()}`;
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    return (
      <div>
        <Calendar
          showConfirm={false}
          poppable={false}
          style={{ height: "500px" }}
          value={selectedDate}
          onConfirm={(date: Date) => {
            setSelectedDate(date);
          }}
        />
        <div style={{ padding: "10px" }}>
          {selectedDate && (
            <div>
              选择的日期:
              {formatDate(selectedDate)}
            </div>
          )}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "将 `poppable` 设置为 `false`，日历会直接展示在页面内，而不是以弹层的形式出现。",
      },
    },
  },
};
