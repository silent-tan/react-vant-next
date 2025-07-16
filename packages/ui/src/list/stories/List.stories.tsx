import type { Meta, StoryObj } from "@storybook/react-vite";
import BaseDemo from "../demo/base";
import ErrorDemo from "../demo/error";
import PullRefreshDemo from "../demo/pull";
import List from "../index";

// 更多关于如何设置故事的信息: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  id: "components-list",
  title: "Display/List",
  component: List,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "瀑布流滚动加载，用于展示长列表，当列表即将滚动到底部时，会触发事件并加载更多列表项。",
      },
    },
  },
  argTypes: {
    // 基础
    children: {
      description: "列表内容",
      table: {
        category: "基础",
        type: { summary: "React.ReactNode" },
      },
    },
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
    // 状态
    finished: {
      control: { type: "boolean" },
      description: "是否已加载完成，加载完成后不再触发 onLoad 事件",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    // 外观
    offset: {
      control: { type: "number" },
      description: "触发加载事件的滚动触底距离阈值",
      table: {
        category: "外观",
        type: { summary: "number" },
        defaultValue: { summary: "300" },
      },
    },
    loadingText: {
      control: { type: "text" },
      description: "加载过程中的提示文案",
      table: {
        category: "外观",
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "加载中..." },
      },
    },
    finishedText: {
      control: { type: "text" },
      description: "加载完成后的提示文案",
      table: {
        category: "外观",
        type: { summary: "React.ReactNode" },
      },
    },
    errorText: {
      description: "加载失败后的提示文案",
      table: {
        category: "外观",
        type: { summary: "React.ReactNode | ((retry: () => void) => React.ReactNode)" },
      },
    },
    // 事件
    onLoad: {
      description: "滚动条与底部距离小于 offset 时触发",
      table: {
        category: "事件",
        type: { summary: "(isRetry: boolean) => Promise<void>" },
        required: true,
      },
    },
  },
} satisfies Meta<typeof List>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Partial<Story> = {
  name: "基础用法",
  render: () => {
    return BaseDemo();
  },
  parameters: {
    docs: {
      description: {
        story: "List 组件滚动到底部时，会触发 `onLoad` 事件，此时可以发起异步操作并更新数据，若数据已全部加载完毕，则直接将 `finished` 设置成 `true` 即可。",
      },
      source: {
        language: "tsx",
        code: `
import { Cell, List } from "@react-vant-next/ui";
import { useState } from "react";
import "./style.less";
import { getData } from "./utils";

// 基础用法
export default function BaseDemo() {
  const [list, setList] = useState<Array<number>>([]);
  const [finished, setFinished] = useState<boolean>(false);

  const onLoad = async () => {
    const data = await getData();
    setList(v => [...v, ...data]);
    if (list.length >= 30) {
      setFinished(true);
    }
  };
  return (
    <List finished={finished} onLoad={onLoad}>
      {list.map((_, i) => (
        <Cell key={i} title={i + 1} />
      ))}
    </List>
  );
}`,
      },
    },
  },
};

// 错误提示
export const ErrorTip: Partial<Story> = {
  name: "错误提示",
  render: () => {
    return ErrorDemo();
  },
  parameters: {
    docs: {
      description: {
        story: "若 onLoad 抛出错误，将显示错误提示，用户点击错误提示后会重新触发 onLoad 事件。",
      },
      source: {
        language: "tsx",
        code: `import { Cell, List } from "@react-vant-next/ui";
import { useState } from "react";
import { getData } from "./utils";

// 错误提示
export default function ErrorDemo() {
  const [list, setList] = useState<Array<number>>([]);
  const [finished, setFinished] = useState<boolean>(false);
  const [count, setCount] = useState(0);

  const onLoad = async () => {
    setCount(v => v + 1);
    const data = await getData(count === 1);
    setList(v => [...v, ...data]);
    if (list.length >= 30) {
      setFinished(true);
    }
  };

  return (
    <List
      finished={finished}
      errorText="请求失败，点击重新加载"
      onLoad={onLoad}
    >
      {/* 若 onLoad 抛出错误，将显示错误提示，用户点击错误提示后会重新触发 onLoad 事件 */}
      {list.map((_, i) => (
        <Cell key={i} title={i + 1} />
      ))}
    </List>
  );
}
`,
      },
    },
  },
};

// 下拉刷新
export const PullRefresh: Partial<Story> = {
  name: "下拉刷新",
  render: () => {
    return PullRefreshDemo();
  },
  parameters: {
    docs: {
      description: {
        story: "List 组件可以与 PullRefresh 组件结合使用，实现下拉刷新的效果。",
      },
      source: {
        language: "tsx",
        code: `
import { useState } from "react";
import { getData } from "./utils";
import { Cell, List, PullRefresh } from "@react-vant-next/ui";

// 下拉刷新
export default function PullRefreshDemo() {
  const [list, setList] = useState<Array<number>>([]);
  const [finished, setFinished] = useState<boolean>(false);

  const onLoadRefresh = async (isRefresh?) => {
    const data = await getData();
    setList((v) => {
      const newList = isRefresh ? data : [...v, ...data];
      if (newList.length >= 30) {
        setFinished(true);
      }
      return newList;
    });
  };

  const onRefresh = async () => {
    setFinished(false);
    await onLoadRefresh(1);
  };

  return (
    <PullRefresh onRefresh={onRefresh}>
      {/* List 组件可以与 PullRefresh 组件结合使用，实现下拉刷新的效果 */}
      <List finished={finished} onLoad={onLoadRefresh}>
        {list.map((_, i) => (
          <Cell key={i} title={i + 1} />
        ))}
      </List>
    </PullRefresh>
  );
}
`,
      },
    },
  },
};
