import type { Meta, StoryObj } from "@storybook/react-vite";
import BaseDemo from "../demo";
import { IndexBar } from "../index";

// 更多关于如何设置故事的信息: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  id: "components-index-bar",
  title: "Navigate/IndexBar",
  component: IndexBar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "索引栏组件，用于列表的索引分类显示和快速定位。",
      },
      toc: false,
    },
  },
  argTypes: {
    // 基础
    children: {
      description: "内容",
      table: {
        category: "基础",
        type: { summary: "React.ReactNode" },
        required: false,
      },
    },
    indexList: {
      description: "索引字符列表",
      table: {
        category: "基础",
        type: { summary: "Array<number | string>" },
        defaultValue: { summary: "A-Z" },
        required: false,
      },
    },
    itemRender: {
      description: "自定义字符渲染",
      table: {
        category: "基础",
        type: { summary: "(item: number | string, active: boolean) => React.ReactNode" },
        required: false,
      },
    },
    teleport: {
      description: "指定索引栏挂载的节点",
      table: {
        category: "基础",
        type: { summary: "Element | (() => Element)" },
        required: false,
      },
    },

    // 外观
    zIndex: {
      control: { type: "number" },
      description: "z-index 层级",
      table: {
        category: "外观",
        type: { summary: "number | string" },
        defaultValue: { summary: "1" },
        required: false,
      },
    },
    highlightColor: {
      control: { type: "color" },
      description: "索引字符高亮颜色",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "#3f45ff" },
        required: false,
      },
    },

    // 状态
    sticky: {
      control: { type: "boolean" },
      description: "是否开启锚点自动吸顶",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        required: false,
      },
    },
    stickyOffsetTop: {
      control: { type: "number" },
      description: "锚点自动吸顶时与顶部的距离",
      table: {
        category: "状态",
        type: { summary: "number" },
        defaultValue: { summary: "0" },
        required: false,
      },
    },

    // 事件
    onChange: {
      description: "当前高亮的索引字符变化时触发",
      table: {
        category: "事件",
        type: { summary: "(index: number | string) => void" },
        required: false,
      },
    },
    onSelect: {
      description: "点击索引栏的字符时触发",
      table: {
        category: "事件",
        type: { summary: "(index: number | string) => void" },
        required: false,
      },
    },
  },
} satisfies Meta<typeof IndexBar>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Story = {
  name: "基础用法",
  render: _args => <BaseDemo />,
  parameters: {
    docs: {
      description: {
        story: "点击索引栏时，会自动跳转到对应的 IndexAnchor 锚点位置。可以通过 indexList 属性自定义展示的索引字符列表。",
      },
      source: {
        code: `import { Cell, IndexBar, Tabs } from "@react-vant-next/ui";

const indexList = [];
const customIndexList = [1, 2, 3, 4, 5, 6, 8, 9, 10];
const charCodeOfA = "A".charCodeAt(0);

for (let i = 0; i < 26; i += 1) {
  indexList.push(String.fromCharCode(charCodeOfA + i));
}

export default function BaseDemo() {
  return (
    <Tabs>
      <Tabs.TabPane title="基础用法">
        <IndexBar>
          {indexList.map(item => (
            <div key={item}>
              <IndexBar.Anchor index={item} />
              <Cell title="文本" />
              <Cell title="文本" />
              <Cell title="文本" />
            </div>
          ))}
        </IndexBar>
      </Tabs.TabPane>
      <Tabs.TabPane title="自定义索引列表">
        <IndexBar indexList={customIndexList}>
          {customIndexList.map(item => (
            <div key={item}>
              <IndexBar.Anchor index={item}>
                标题
                {item}
              </IndexBar.Anchor>
              <Cell title="文本" />
              <Cell title="文本" />
              <Cell title="文本" />
            </div>
          ))}
        </IndexBar>
      </Tabs.TabPane>
    </Tabs>
  );
}`,
      },
    },
  },
};
