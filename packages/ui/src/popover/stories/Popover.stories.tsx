import type { Meta, StoryObj } from "@storybook/react-vite";
import { Space } from "@react-vant-next/ui";
import Button from "../../button";
import ConfigExample from "../demo/config";
import CustomContentExample from "../demo/custom";
import PlacementExample from "../demo/placement";
import Popover from "../index";

// 更多关于如何设置故事的信息: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  id: "components-popover",
  title: "Display/Popover",
  component: Popover,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "弹出式的气泡菜单。",
      },
    },
  },
  argTypes: {
    // 基础
    children: {
      description: "自定义菜单内容",
      table: {
        category: "基础",
        type: { summary: "React.ReactNode" },
        required: false,
      },
    },
    reference: {
      description: "触发 Popover 显示的元素内容",
      table: {
        category: "基础",
        type: { summary: "React.ReactNode" },
        required: false,
      },
    },
    teleport: {
      description: "指定挂载的节点",
      table: {
        category: "基础",
        type: { summary: "Element | (() => Element)" },
        required: false,
      },
    },
    actions: {
      description: "选项列表",
      table: {
        category: "基础",
        type: { summary: "PopoverAction[]" },
        defaultValue: { summary: "[]" },
        required: false,
      },
    },

    // 外观
    theme: {
      control: { type: "select", options: ["light", "dark"] },
      description: "主题风格，可选值为 dark",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "'light'" },
        required: false,
      },
    },
    placement: {
      control: { type: "select", options: ["top", "top-start", "top-end", "left", "left-start", "left-end", "right", "right-start", "right-end", "bottom", "bottom-start", "bottom-end"] },
      description: "弹出位置",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "'bottom'" },
        required: false,
      },
    },
    offset: {
      description: "出现位置的偏移量",
      table: {
        category: "外观",
        type: { summary: "[number, number]" },
        defaultValue: { summary: "[0, 8]" },
        required: false,
      },
    },
    duration: {
      control: { type: "number" },
      description: "动画时长，单位秒，设置为 0 可以禁用动画",
      table: {
        category: "外观",
        type: { summary: "number | string" },
        defaultValue: { summary: "0.3" },
        required: false,
      },
    },
    overlay: {
      control: { type: "boolean" },
      description: "是否显示遮罩层",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
      },
    },
    overlayClass: {
      control: { type: "text" },
      description: "自定义遮罩层类名",
      table: {
        category: "外观",
        type: { summary: "string" },
        required: false,
      },
    },
    overlayStyle: {
      description: "自定义遮罩层样式",
      table: {
        category: "外观",
        type: { summary: "CSSProperties" },
        required: false,
      },
    },

    // 状态
    visible: {
      control: { type: "boolean" },
      description: "受控的是否显示菜单",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        required: false,
      },
    },
    trigger: {
      control: { type: "select", options: ["click", "manual"] },
      description: "触发方式，可选值为 manual",
      table: {
        category: "状态",
        type: { summary: "string" },
        defaultValue: { summary: "'click'" },
        required: false,
      },
    },
    closeOnClickAction: {
      control: { type: "boolean" },
      description: "是否在点击选项后关闭",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        required: false,
      },
    },
    closeOnClickOverlay: {
      control: { type: "boolean" },
      description: "是否在点击遮罩层后关闭菜单",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        required: false,
      },
    },
    closeOnClickOutside: {
      control: { type: "boolean" },
      description: "是否在点击外部元素后关闭菜单",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        required: false,
      },
    },

    // 事件
    onSelect: {
      description: "点击选项时触发",
      table: {
        category: "事件",
        type: { summary: "(action: PopoverAction, index: number) => void" },
        required: false,
      },
    },
    onClickOverlay: {
      description: "点击遮罩层时触发",
      table: {
        category: "事件",
        type: { summary: "(event: MouseEvent) => void" },
        required: false,
      },
    },
    onOpen: {
      description: "打开菜单时触发",
      table: {
        category: "事件",
        type: { summary: "() => void" },
        required: false,
      },
    },
    onClose: {
      description: "关闭菜单时触发",
      table: {
        category: "事件",
        type: { summary: "() => void" },
        required: false,
      },
    },
    onOpened: {
      description: "打开菜单且动画结束后触发",
      table: {
        category: "事件",
        type: { summary: "() => void" },
        required: false,
      },
    },
    onClosed: {
      description: "关闭菜单且动画结束后触发",
      table: {
        category: "事件",
        type: { summary: "() => void" },
        required: false,
      },
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Story = {
  name: "基础用法",
  render: (_args) => {
    const actions = [{ text: "选项一" }, { text: "选项二" }, { text: "选项三" }];
    const select = option => console.log(option.text);

    return (
      <Space>
        <Popover
          placement="bottom-start"
          actions={actions}
          onSelect={select}
          reference={<Button type="primary">浅色风格</Button>}
        />
        <Popover
          actions={actions}
          theme="dark"
          onSelect={select}
          reference={<Button type="primary">深色风格</Button>}
        />
      </Space>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "当 Popover 弹出时，会基于 `reference` 属性的内容进行定位。",
      },
      source: { code: `
const actions = [{ text: "选项一" }, { text: "选项二" }, { text: "选项三" }];
const select = (option) => console.log(option.text);

return (
  <Space>
      <Popover
        placement="bottom-start"
        actions={actions}
        onSelect={select}
        reference={<Button type="primary">浅色风格</Button>}
      />
      <Popover
        actions={actions}
        theme="dark"
        onSelect={select}
        reference={<Button type="primary">深色风格</Button>}
      />
  </Space>
);` },
    },
  },
};

// 弹出位置
export const Placement: Story = {
  name: "弹出位置",
  render: () => {
    return <PlacementExample />;
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `placement` 属性来控制气泡的弹出位置。",
      },
      source: { code: `
import { useRef, useState } from 'react';
import { Toast, Popover, Popup, Picker, Cell } from '@react-vant-next/ui';
import type { PopoverInstance, PopoverPlacement } from '@react-vant-next/ui';

const popupActions = [{ text: '选项一' }, { text: '选项二' }];

const placements = [
  'top',
  'top-start',
  'top-end',
  'left',
  'left-start',
  'left-end',
  'right',
  'right-start',
  'right-end',
  'bottom',
  'bottom-start',
  'bottom-end',
] as PopoverPlacement[];

export default function PlacementExample() {
  const popover = useRef<PopoverInstance>(null);
  const [visible, setVisible] = useState(false);
  const [placement, updatePlacement] = useState(placements[0]);

  const select = (option) => Toast.info(option.text);

  const onPickerChange = (plc) => {
    updatePlacement(plc);
    setTimeout(() => popover.current.show(), 0);
  };
  return (
    <>
      <Cell title="选择弹出位置" onClick={() => setVisible(true)} isLink />
      <Popup round position="bottom" visible={visible} onClose={() => setVisible(false)}>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '110px 0' }}>
          <Popover
            ref={popover}
            theme="dark"
            actions={popupActions}
            onSelect={select}
            placement={placement}
            reference={
              <div style={{ width: 60, height: 60, backgroundColor: '#3f45ff', borderRadius: 8 }} />
            }
          />
        </div>
        <Picker showToolbar={false} columns={placements} onChange={onPickerChange} />
      </Popup>
    </>
  );
};
` },
    },
  },
};

// 选项配置
export const Config: Story = {
  name: "选项配置",
  render: (_args) => {
    return (<ConfigExample />);
  },
  parameters: {
    docs: {
      description: {
        story: "在 `actions` 数组中，可以通过 `icon` 字段来定义选项的图标，可以通过 `disabled` 字段来禁用某个选项。",
      },
      source: {
        code: `
import { AddO, MoreO, MusicO } from "@react-vant-next/icons";
import { Button, Popover, Space, Toast } from "@react-vant-next/ui";

const iconActions = [
  { text: "选项一", icon: <AddO /> },
  { text: "选项二", icon: <MusicO /> },
  { text: "选项三", icon: <MoreO /> },
];

const disabledActions = [
  { text: "选项一", disabled: true },
  { text: "选项二", disabled: true },
  { text: "选项三" },
];
export default function ConfigExample() {
  const select = (option) => Toast.info(option.text);

  return (
    <Space>
      <Popover
        placement="bottom-start"
        actions={iconActions}
        onSelect={select}
        reference={<Button type="primary">展示图标</Button>}
      />
      <Popover
        actions={disabledActions}
        onSelect={select}
        reference={<Button type="primary">禁用选项</Button>}
      />
    </Space>
  );
};
`,
      },
    },
  },
};

// 自定义内容
export const CustomContent: Story = {
  name: "自定义内容",
  render: _args => (<CustomContentExample />),
  parameters: {
    docs: {
      description: {
        story: "通过 children，可以在 Popover 内部放置任意内容。",
      },
      source: {
        code: `
import type { PopoverInstance } from "@react-vant-next/ui";
import { PhotoO } from "@react-vant-next/icons";
import { Button, Grid, Popover } from "@react-vant-next/ui";
import React, { useRef } from "react";

export default function CustomContentExample() {
  const popover = useRef<PopoverInstance>(null);
  return (
    <>
      <Popover
        ref={popover}
        placement="top-start"
        reference={<Button type="primary">自定义内容</Button>}
      >
        <Grid square border={false} columnNum={3} style={{ width: 240 }}>
          {Array.from({ length: 6 }, (_, i) => (
            <Grid.Item
              onClick={() => popover.current?.hide()}
              key={i}
              icon={<PhotoO />}
              text="文字"
            />
          ))}
        </Grid>
      </Popover>
    </>
  );
};
`,
      },
    },
  },
};
