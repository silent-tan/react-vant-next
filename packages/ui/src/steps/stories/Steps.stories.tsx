import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Button } from "../../button";
import { Steps } from "../index";

const meta = {
  id: "components-steps",
  title: "Display/Steps",
  component: Steps,
  parameters: {
    docs: {
      description: {
        component: "用于展示操作流程的各个环节，让用户了解当前的操作在整体流程中的位置。",
      },
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
        type: { summary: "React.ReactNode" },
      },
    },
    active: {
      description: "当前步骤对应的索引值",
      table: {
        category: "基础",
        type: { summary: "number | string" },
        defaultValue: { summary: "0" },
      },
      control: { type: "number" },
    },
    // 外观
    direction: {
      description: "步骤条方向，可选值为 vertical",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "horizontal" },
      },
      control: "select",
      options: ["horizontal", "vertical"],
    },
    activeColor: {
      description: "当前步骤和已完成步骤的颜色",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "#07c160" },
      },
      control: "color",
    },
    inactiveColor: {
      description: "未激活步骤的颜色",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "#969799" },
      },
      control: "color",
    },
    activeIcon: {
      description: "当前步骤对应的底部图标",
      table: {
        category: "外观",
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "<Checked />" },
      },
    },
    inactiveIcon: {
      description: "非当前步骤对应的底部图标",
      table: {
        category: "外观",
        type: { summary: "React.ReactNode" },
      },
    },
    finishIcon: {
      description: "已完成步骤对应的底部图标，优先级高于 inactiveIcon",
      table: {
        category: "外观",
        type: { summary: "React.ReactNode" },
      },
    },
    // 事件
    onClickStep: {
      description: "点击步骤的标题或图标时触发",
      table: {
        category: "事件",
        type: { summary: "(index: number) => void" },
      },
      action: "onClickStep",
    },
  },
} satisfies Meta<typeof Steps>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法组件
function BasicExample() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive(prev => (prev >= 3 ? 0 : prev + 1));

  return (
    <div style={{ width: 320 }}>
      <Steps active={active}>
        <Steps.Item>买家下单</Steps.Item>
        <Steps.Item>商家接单</Steps.Item>
        <Steps.Item>买家提货</Steps.Item>
        <Steps.Item>交易完成</Steps.Item>
      </Steps>
      <div style={{ padding: 20 }}>
        <Button round block onClick={nextStep}>
          下一步
        </Button>
      </div>
    </div>
  );
}

// 基础用法
export const Basic: Story = {
  name: "基础用法",
  render: () => <BasicExample />,
  parameters: {
    docs: {
      description: {
        story: "`active` 属性表示当前步骤的索引，从 0 起计。",
      },
      source: {
        language: "tsx",
        code: `import { Button, Steps } from "@react-vant-next/ui";
import React, { useState } from "react";

export default () => {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive(prev => (prev >= 3 ? 0 : prev + 1));
  return (
    <>
      <Steps active={active}>
        <Steps.Item>买家下单</Steps.Item>
        <Steps.Item>商家接单</Steps.Item>
        <Steps.Item>买家提货</Steps.Item>
        <Steps.Item>交易完成</Steps.Item>
      </Steps>
      <div style={{ padding: 20 }}>
        <Button round block onClick={nextStep}>
          下一步
        </Button>
      </div>
    </>
  );
};`,
      },
    },
  },
};

// 自定义样式组件
function CustomStyleExample() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive(prev => (prev >= 3 ? 0 : prev + 1));

  return (
    <div style={{ width: 320 }}>
      <Steps active={active} activeIcon={<div>!</div>} activeColor="#3f45ff">
        <Steps.Item>买家下单</Steps.Item>
        <Steps.Item>商家接单</Steps.Item>
        <Steps.Item>买家提货</Steps.Item>
        <Steps.Item>交易完成</Steps.Item>
      </Steps>
      <div style={{ padding: 20 }}>
        <Button round block onClick={nextStep}>
          下一步
        </Button>
      </div>
    </div>
  );
}

// 自定义样式
export const CustomStyle: Story = {
  name: "自定义样式",
  render: () => <CustomStyleExample />,
  parameters: {
    docs: {
      description: {
        story: "可以通过 `activeIcon` 和 `activeColor` 属性设置激活状态下的图标和颜色。",
      },
      source: {
        language: "tsx",
        code: `import { Button, Steps } from "@react-vant-next/ui";
import React, { useState } from "react";

export default () => {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive(prev => (prev >= 3 ? 0 : prev + 1));
  return (
    <>
      <Steps active={active} activeIcon={<div>!</div>} activeColor="#3f45ff">
        <Steps.Item>买家下单</Steps.Item>
        <Steps.Item>商家接单</Steps.Item>
        <Steps.Item>买家提货</Steps.Item>
        <Steps.Item>交易完成</Steps.Item>
      </Steps>
      <div style={{ padding: 20 }}>
        <Button round block onClick={nextStep}>
          下一步
        </Button>
      </div>
    </>
  );
};`,
      },
    },
  },
};

// 竖向步骤条组件
function VerticalExample() {
  return (
    <div style={{ height: 250, width: 320 }}>
      <Steps direction="vertical" active={0}>
        <Steps.Item>
          <h3>【城市】物流状态1</h3>
          <p>2016-07-12 12:40</p>
        </Steps.Item>
        <Steps.Item>
          <h3>【城市】物流状态2</h3>
          <p>2016-07-11 10:00</p>
        </Steps.Item>
        <Steps.Item>
          <h3>快件已发货</h3>
          <p>2016-07-10 09:30</p>
        </Steps.Item>
      </Steps>
    </div>
  );
}

// 竖向步骤条
export const Vertical: Story = {
  name: "竖向步骤条",
  render: () => <VerticalExample />,
  parameters: {
    docs: {
      description: {
        story: "可以通过设置 `direction` 属性来改变步骤条的显示方向。",
      },
      source: {
        language: "tsx",
        code: `import { Steps } from "@react-vant-next/ui";
import React from "react";

export default () => {
  return (
    <Steps direction="vertical" active={0}>
      <Steps.Item>
        <h3>【城市】物流状态1</h3>
        <p>2016-07-12 12:40</p>
      </Steps.Item>
      <Steps.Item>
        <h3>【城市】物流状态2</h3>
        <p>2016-07-11 10:00</p>
      </Steps.Item>
      <Steps.Item>
        <h3>快件已发货</h3>
        <p>2016-07-10 09:30</p>
      </Steps.Item>
    </Steps>
  );
};`,
      },
    },
  },
};

// 点击步骤组件
function ClickStepExample() {
  const [active, setActive] = useState(1);

  const onClickStep = (index: number) => {
    setActive(index);
  };

  return (
    <div style={{ width: 320 }}>
      <Steps active={active} onClickStep={onClickStep}>
        <Steps.Item>步骤一</Steps.Item>
        <Steps.Item>步骤二</Steps.Item>
        <Steps.Item>步骤三</Steps.Item>
        <Steps.Item>步骤四</Steps.Item>
      </Steps>
      <p style={{ marginTop: 20, textAlign: "center" }}>点击步骤切换</p>
    </div>
  );
}

// 点击步骤
export const ClickStep: Story = {
  name: "点击步骤",
  render: () => <ClickStepExample />,
  parameters: {
    docs: {
      description: {
        story: "通过 `onClickStep` 事件监听步骤的点击事件，点击步骤时触发。",
      },
      source: {
        language: "tsx",
        code: `import { useState } from "react";
import { Steps } from "@react-vant-next/ui";

function ClickStepExample() {
  const [active, setActive] = useState(1);

  const onClickStep = (index: number) => {
    setActive(index);
  };

  return (
    <div>
      <Steps active={active} onClickStep={onClickStep}>
        <Steps.Item>步骤一</Steps.Item>
        <Steps.Item>步骤二</Steps.Item>
        <Steps.Item>步骤三</Steps.Item>
        <Steps.Item>步骤四</Steps.Item>
      </Steps>
      <p style={{ marginTop: 20, textAlign: 'center' }}>点击步骤切换</p>
    </div>
  );
}`,
      },
    },
  },
};
