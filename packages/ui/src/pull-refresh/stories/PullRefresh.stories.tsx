import type { Meta, StoryObj } from "@storybook/react-vite";
import PullRefreshDemo from "../demo";
import { PullRefresh } from "../index";

const meta = {
  id: "components-pull-refresh",
  title: "Feedback/PullRefresh",
  component: PullRefresh,
  parameters: {
    docs: {
      description: {
        component: "用于提供下拉刷新的交互操作。",
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
    children: {
      description: "子元素",
      table: {
        category: "基础",
        type: { summary: "ReactNode" },
      },
    },
    disabled: {
      description: "是否禁用下拉刷新",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    // 外观
    headHeight: {
      description: "顶部内容高度",
      table: {
        category: "外观",
        type: { summary: "number | string" },
        defaultValue: { summary: "50" },
      },
      control: { type: "number", min: 0, max: 200, step: 1 },
    },
    pullDistance: {
      description: "触发下拉刷新的距离",
      table: {
        category: "外观",
        type: { summary: "number | string" },
        defaultValue: { summary: "与 headHeight 一致" },
      },
      control: { type: "number", min: 0, max: 200, step: 1 },
    },
    animationDuration: {
      description: "动画时长",
      table: {
        category: "外观",
        type: { summary: "number | string" },
        defaultValue: { summary: "300" },
      },
      control: { type: "number", min: 0, max: 1000, step: 100 },
    },
    // 文案
    pullingText: {
      description: "下拉过程提示文案",
      table: {
        category: "文案",
        type: { summary: "ReactNode | (({ distance }: { distance: number }) => ReactNode)" },
        defaultValue: { summary: "下拉即可刷新..." },
      },
      control: "text",
    },
    loosingText: {
      description: "释放过程提示文案",
      table: {
        category: "文案",
        type: { summary: "ReactNode | (({ distance }: { distance: number }) => ReactNode)" },
        defaultValue: { summary: "释放即可刷新..." },
      },
      control: "text",
    },
    loadingText: {
      description: "加载过程提示文案",
      table: {
        category: "文案",
        type: { summary: "ReactNode | (({ distance }: { distance: number }) => ReactNode)" },
        defaultValue: { summary: "加载中..." },
      },
      control: "text",
    },
    successText: {
      description: "刷新成功提示文案",
      table: {
        category: "文案",
        type: { summary: "ReactNode | (({ distance }: { distance: number }) => ReactNode)" },
      },
      control: "text",
    },
    successDuration: {
      description: "刷新成功提示展示时长(ms)",
      table: {
        category: "文案",
        type: { summary: "number | string" },
        defaultValue: { summary: "500" },
      },
      control: { type: "number", min: 0, max: 5000, step: 100 },
    },
    // 事件
    onRefresh: {
      description: "下拉刷新时触发",
      table: {
        category: "事件",
        type: { summary: "() => (Promise|void)" },
      },
    },
    onRefreshEnd: {
      description: "刷新完成后触发",
      table: {
        category: "事件",
        type: { summary: "() => void" },
      },
    },
  },
} satisfies Meta<typeof PullRefresh>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Partial<Story> = {
  name: "基础用法",
  render: () => <PullRefreshDemo />,
  parameters: {
    docs: {
      description: {
        story: "下拉刷新时会触发 `onRefresh` 事件，在事件的回调函数中可以进行同步或异步操作，操作完成后表示加载完成。",
      },
      source: {
        language: "tsx",
        code: `
import { PullRefresh, Tabs, Toast } from "@react-vant-next/ui";
import { useMemo, useState } from "react";
import "./style.less";

export default function PullRefreshDemo() {
  const [count, setCount] = useState<number>(0);
  const tips = useMemo(() => {
    if (count) {
      return \`刷新次数: \${count}\`;
    }
    return "下拉试试";
  }, [count]);

  const onRefresh = (showToast: boolean) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (showToast) {
          Toast.info("刷新成功");
        }
        setCount(count + 1);
        resolve(true);
      }, 1000);
    });
  };

  return (
    <div className="demo-pull-refresh">
      <Tabs>
        <Tabs.TabPane title="基础用法">
          <PullRefresh
            onRefresh={() => onRefresh(true)}
            onRefreshEnd={() => console.log("onRefreshEnd")}
          >
            <p>{tips}</p>
          </PullRefresh>
        </Tabs.TabPane>
        <Tabs.TabPane title="成功提示">
          <PullRefresh
            successText="刷新成功"
            onRefresh={() => onRefresh(false)}
          >
            <p>{tips}</p>
          </PullRefresh>
        </Tabs.TabPane>
        <Tabs.TabPane title="自定义内容">
          <PullRefresh
            headHeight={80}
            pullingText={({ distance }) => (
              <img
                className="doge"
                src="https://img.yzcdn.cn/vant/doge.png"
                style={{ transform: \`scale(\${distance / 80})\` }}
              />
            )}
            loosingText={() => (
              <img className="doge" src="https://img.yzcdn.cn/vant/doge.png" />
            )}
            loadingText={() => (
              <img
                className="doge"
                src="https://img.yzcdn.cn/vant/doge-fire.jpg"
              />
            )}
            onRefresh={() => onRefresh(true)}
          >
            <p>{tips}</p>
          </PullRefresh>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}`,
      },
    },
  },
};
