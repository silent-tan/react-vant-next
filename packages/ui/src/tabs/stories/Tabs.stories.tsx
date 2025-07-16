import type { Meta, StoryObj } from "@storybook/react-vite";
import BaseDemo from "../demo/base";
import { Tabs } from "../index";

const meta = {
  id: "components-tabs",
  title: "Navigate/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "选项卡切换组件，提供平级的区域将大块内容进行收纳和展现，保持界面整洁。",
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
      description: "子元素",
      table: {
        category: "基础",
        type: { summary: "ReactNode" },
      },
    },
    active: {
      description: "当前选中项的标识符",
      table: {
        category: "基础",
        type: { summary: "number | string" },
      },
    },
    defaultActive: {
      description: "默认选中项的标识符",
      table: {
        category: "基础",
        type: { summary: "number | string" },
        defaultValue: { summary: "0" },
      },
    },
    lazyRender: {
      description: "是否开启延迟渲染（首次切换到标签时才触发内容渲染）",
      table: {
        category: "基础",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    lazyRenderPlaceholder: {
      description: "启延迟渲染占位符",
      table: {
        category: "基础",
        type: { summary: "ReactNode" },
      },
    },

    // 外观
    type: {
      description: "样式风格类型",
      table: {
        category: "外观",
        type: { summary: "'line' | 'card' | 'capsule' | 'jumbo'" },
        defaultValue: { summary: "'line'" },
      },
      control: { type: "select" },
      options: ["line", "card", "capsule", "jumbo"],
    },
    align: {
      description: "标签栏对齐方式, 可选值 `start` `center`",
      table: {
        category: "外观",
        type: { summary: "'start' | 'center' | string" },
        defaultValue: { summary: "'center'" },
      },
      control: { type: "select" },
      options: ["start", "center"],
    },
    color: {
      description: "标签主题色",
      table: {
        category: "外观",
        type: { summary: "string" },
      },
    },
    border: {
      description: "是否显示标签栏外边框，仅在 type='line' 时有效",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    background: {
      description: "标签栏背景色",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "white" },
      },
    },
    lineWidth: {
      description: "底部条宽度，默认单位 px",
      table: {
        category: "外观",
        type: { summary: "number | string" },
        defaultValue: { summary: "40px" },
      },
    },
    lineHeight: {
      description: "底部条高度，默认单位 px",
      table: {
        category: "外观",
        type: { summary: "number | string" },
        defaultValue: { summary: "3px" },
      },
    },
    titleActiveColor: {
      description: "标题选中态颜色",
      table: {
        category: "外观",
        type: { summary: "string" },
      },
    },
    titleInactiveColor: {
      description: "标题默认态颜色",
      table: {
        category: "外观",
        type: { summary: "string" },
      },
    },
    ellipsis: {
      description: "是否省略过长的标题文字",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    duration: {
      description: "动画时间，单位毫秒，设置为 0 可以禁用动画",
      table: {
        category: "外观",
        type: { summary: "number | string" },
        defaultValue: { summary: "300" },
      },
    },

    // 状态
    sticky: {
      description: "是否使用粘性定位布局",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    stickyInitScrollbar: {
      description: "sticky 模式下点击标签重置滚动条位置",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    offsetTop: {
      description: "粘性定位布局下与顶部的最小距离，支持 px vw vh rem 单位，默认 px",
      table: {
        category: "状态",
        type: { summary: "number | string" },
        defaultValue: { summary: "0" },
      },
    },
    animated: {
      description: "是否开启切换标签内容时的转场动画",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    swipeable: {
      description: "是否开启手势滑动切换",
      table: {
        category: "状态",
        type: { summary: "boolean | TabsSwiperProps" },
        defaultValue: { summary: "false" },
      },
    },
    scrollspy: {
      description: "是否开启滚动导航",
      table: {
        category: "状态",
        type: { summary: "boolean | ScrollspyConfig" },
        defaultValue: { summary: "false" },
      },
    },
    swipeThreshold: {
      description: "滚动阈值，标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动",
      table: {
        category: "状态",
        type: { summary: "number | string" },
        defaultValue: { summary: "5" },
      },
    },

    // 事件
    onChange: {
      description: "当前激活的标签改变时触发",
      table: {
        category: "事件",
        type: { summary: "(name: string | number, tabIndex: number) => void" },
      },
    },
    onClickTab: {
      description: "点击标签时触发",
      table: {
        category: "事件",
        type: { summary: "({ name: string | number, event: MouseEvent, disabled: boolean }) => void" },
      },
    },
    onScroll: {
      description: "滚动时触发，仅在 sticky 模式下生效",
      table: {
        category: "事件",
        type: { summary: "({ scrollTop: number, isFixed: boolean }) => void" },
      },
    },
    beforeChange: {
      description: "切换标签前的回调函数，返回 false 可阻止切换，支持返回 Promise",
      table: {
        category: "事件",
        type: { summary: "(name) => boolean | Promise" },
      },
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法示例
export const Basic: Story = {
  name: "基础用法",
  render: () => {
    return <BaseDemo />;
  },
  parameters: {
    docs: {
      description: {
        story: "基础用法，默认为下划线风格。",
      },
      source: {
        code: `
import { Tabs } from "@react-vant-next/ui";
import "./style.less";

const items = Array.from({ length: 3 }, (_, i) => i + 1);

export default function BaseDemo() {
  return (
    <div className="demo-tabs">
      <Tabs defaultActive={2}>
        {items.map(item => (
          <Tabs.TabPane key={item} title={\`标签\${item}\`}>
            下划线标签页
            {" "}
            {item}
          </Tabs.TabPane>
        ))}
      </Tabs>
      <Tabs border type="capsule">
        {items.map(item => (
          <Tabs.TabPane key={item} title={\`标签\${item}\`}>
            胶囊标签页
            {" "}
            {item}
          </Tabs.TabPane>
        ))}
      </Tabs>
      <Tabs border type="jumbo">
        {items.map(item => (
          <Tabs.TabPane
            badge={item}
            key={item}
            title={\`标签\${item}\`}
            description="描述内容"
          >
            带描述信息的标签页
            {" "}
            {item}
          </Tabs.TabPane>
        ))}
      </Tabs>
      <Tabs type="card">
        {items.map(item => (
          <Tabs.TabPane key={item} title={\`标签\${item}\`}>
            卡片标签页
            {" "}
            {item}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  );
};
        `,
      },
    },
  },
};

// 通过名称匹配示例
export const MatchByName: Story = {
  name: "通过名称匹配",
  render: () => (
    <div className="demo-tabs">
      <Tabs active="c">
        {["a", "b", "c"].map((item, index) => (
          <Tabs.TabPane name={item} key={item} title={`标签${index + 1}`}>
            内容
            {" "}
            {index + 1}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "在标签指定 `name` 属性的情况下，`active` 的值为当前标签的 `name`（此时无法通过索引值来匹配标签）。",
      },
      source: {
        code: `
<div className='demo-tabs'>
  <Tabs active='c'>
    {['a', 'b', 'c'].map((item, index) => (
      <Tabs.TabPane name={item} key={item} title={\`标签\${index + 1}\`}>
        内容 {index + 1}
      </Tabs.TabPane>
    ))}
  </Tabs>
</div>
        `,
      },
    },
  },
};

// 标签栏滚动示例
export const Scrollable: Story = {
  name: "标签栏滚动",
  render: () => (
    <div className="demo-tabs">
      <Tabs>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
          <Tabs.TabPane key={item} title={`标签${item}`}>
            内容
            {" "}
            {item}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "标签数量超过 5 个时，标签栏可以在水平方向上滚动，切换时会自动将当前标签居中。",
      },
      source: {
        code: `
<div className="demo-tabs">
  <Tabs>
    {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
      <Tabs.TabPane key={item} title={\`标签\${item}\`}>
        内容
        {" "}
        {item}
      </Tabs.TabPane>
    ))}
  </Tabs>
</div>
        `,
      },
    },
  },
};

// 禁用标签示例
export const Disabled: Story = {
  name: "禁用标签",
  render: () => (
    <div className="demo-tabs">
      <Tabs active={1}>
        <Tabs.TabPane title="标签1">内容1</Tabs.TabPane>
        <Tabs.TabPane title="标签2" disabled>
          内容2
        </Tabs.TabPane>
        <Tabs.TabPane title="标签3">内容3</Tabs.TabPane>
      </Tabs>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "设置 `disabled` 属性即可禁用标签。",
      },
      source: {
        code: `
<div className="demo-tabs">
  <Tabs active={1}>
    <Tabs.TabPane title='标签1'>内容1</Tabs.TabPane>
    <Tabs.TabPane title='标签2' disabled>
      内容2
    </Tabs.TabPane>
    <Tabs.TabPane title='标签3'>内容3</Tabs.TabPane>
  </Tabs>
</div>
        `,
      },
    },
  },
};

// 对齐方式示例
export const Alignment: Story = {
  name: "对齐方式",
  render: () => (
    <div className="demo-tabs">
      <Tabs align="start">
        {[1, 2, 3].map(item => (
          <Tabs.TabPane key={item} title={`标签${item}`}>
            内容
            {" "}
            {item}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "设置 `align` 属性即可改变标签栏对齐方式，默认为 `center`，可选值为 `start`。",
      },
      source: {
        code: `
<div className='demo-tabs'>
  <Tabs align='start'>
    {[1, 2, 3].map(item => (
      <Tabs.TabPane key={item} title={\`标签\${item}\`}>
        内容 {item}
      </Tabs.TabPane>
    ))}
  </Tabs>
</div>
        `,
      },
    },
  },
};

// 粘性布局示例
export const Sticky: Story = {
  name: "粘性布局",
  render: () => (
    <div className="demo-tabs">
      <Tabs sticky swipeable>
        {[1, 2, 3, 4].map(item => (
          <Tabs.TabPane key={item} title={`标签${item}`}>
            内容
            {" "}
            {item}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 `sticky` 属性可以开启粘性布局，粘性布局下，标签页滚动到顶部时会自动吸顶。",
      },
      source: {
        code: `
<div className='demo-tabs'>
  <Tabs sticky swipeable>
    {[1, 2, 3, 4].map(item => (
      <Tabs.TabPane key={item} title={\`标签\${item}\`}>
        内容 {item}
      </Tabs.TabPane>
    ))}
  </Tabs>
</div>
        `,
      },
    },
  },
};

// 滚动导航示例
export const Scrollspy: Story = {
  name: "滚动导航",
  render: () => (
    <div className="demo-tabs">
      <Tabs
        sticky
        scrollspy={{ autoFocusLast: true, reachBottomThreshold: 50 }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
          <Tabs.TabPane key={item} title={`标签${item}`}>
            <div style={{ height: "50vh" }}>
              内容
              {item}
            </div>
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 `scrollspy` 和 `sticky` 属性可以开启滚动导航模式，该模式下，内容将会平铺展示。",
      },
      source: {
        code: `
<div className='demo-tabs'>
  <Tabs
    sticky
    scrollspy={{ autoFocusLast: true, reachBottomThreshold: 50 }}
  >
    {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
      <Tabs.TabPane key={item} title={\`标签\${item}\`}>
        <div style={{ height: '50vh' }}>内容 {item}</div>
      </Tabs.TabPane>
    ))}
  </Tabs>
</div>
        `,
      },
    },
  },
};
