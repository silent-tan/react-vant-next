import type { Meta, StoryObj } from "@storybook/react-vite";
import BaseDemo from "../demo/base";
import FloatingBall from "../FloatingBall";

const meta = {
  id: "components-floating-ball",
  title: "Display/FloatingBall",
  component: FloatingBall,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "悬浮球用于提供全局悬浮快捷操作入口，可以自由拖动，支持 1 ～ 5 个操作选项。",
      },
      toc: false,
    },
  },
  argTypes: {
    // 基础
    children: {
      description: "悬浮球包裹的内容",
      table: {
        category: "基础",
        type: { summary: "ReactNode | ({ active, indenting }) => ReactNode" },
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

    // 外观
    offset: {
      description: "初始位置",
      table: {
        category: "外观",
        type: { summary: "OffsetProps" },
        defaultValue: { summary: "{ right: 0, bottom: '30vh' }" },
      },
    },

    // 状态
    disabled: {
      control: { type: "boolean" },
      description: "是否禁用",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    disabledClassName: {
      description: "禁用时的 class",
      table: {
        category: "状态",
        type: { summary: "string" },
      },
    },
    draggable: {
      control: { type: "boolean" },
      description: "是否开启拖拽",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    boundary: {
      control: { type: "boolean" },
      description: "限制拖动范围在屏幕边界内",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    adsorb: {
      description: "近边吸附能力",
      table: {
        category: "状态",
        type: { summary: "boolean | AdsorbProps" },
        defaultValue: { summary: "true" },
      },
    },

    // 其他
    menu: {
      description: "菜单配置项",
      table: {
        category: "其他",
        type: { summary: "MenuProps" },
      },
    },
  },
} satisfies Meta<typeof FloatingBall>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CompleteDemo: Story = {
  name: "完整示例",
  render: () => <BaseDemo />,
  parameters: {
    docs: {
      description: {
        story: "展示悬浮球的完整配置和使用方式，包括拖拽、近边吸附、菜单等功能。",
      },
      source: {
        code: `
import type { FloatingBallProps } from "@react-vant-next/ui";
import { Cell, Field, Form, hooks, Radio, Stepper, Switch } from "@react-vant-next/ui";
import { useState } from "react";
import Bubble from "./bubble";
import Menu from "./menu";
import "./style.less";

export default function BaseDemo() {
  const [form] = Form.useForm();
  const [formUpdated, setFormUpdated] = useState(0);
  const [config, updateConfig] = useState<
    FloatingBallProps & Record<string, unknown>
  >({});

  const handleFormChange = () => setFormUpdated(v => v + 1);

  hooks.useUpdateEffect(() => {
    const getValue = async () => {
      const values = await form.getFieldsValue();
      if (!values.adsorb_show)
        values.adsorb = false;

      delete values.adsorb_show;
      updateConfig(values);
    };
    getValue();
  }, [formUpdated]);

  return (
    <div className="demo-floating-box">
      <Cell title="设置悬浮球" />
      <Form form={form} onValuesChange={handleFormChange}>
        <Form.Item name="type" label="DEMO" initialValue="0">
          <Radio.Group>
            <Radio name="0">普通悬浮球</Radio>
            <Radio name="1">带菜单的悬浮球</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          valuePropName="checked"
          name="disabled"
          label="禁用"
          initialValue={false}
        >
          <Switch size={20} />
        </Form.Item>
        <Form.Item
          valuePropName="checked"
          name="draggable"
          label="拖动"
          initialValue={true}
        >
          <Switch size={20} />
        </Form.Item>
        <Form.Item
          tooltip="拖动结束后，会吸附在更靠近的屏幕一侧"
          valuePropName="checked"
          name="adsorb_show"
          label="近边停靠"
          initialValue={true}
        >
          <Switch size={20} />
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prev, next) => prev.adsorb_show !== next.adsorb_show}
        >
          {() => {
            const show = form.getFieldValue("adsorb_show");
            if (!show)
              return null;
            return (
              <>
                <Form.Item
                  tooltip="吸附在屏幕一侧时距离侧边的距离"
                  name={["adsorb", "distance"]}
                  label="停靠距离"
                  initialValue={20}
                >
                  <Field rightIcon={<div>PX</div>} />
                </Form.Item>
                <Form.Item
                  tooltip="滚动时悬浮球移动到屏外的比率"
                  name={["adsorb", "indent"]}
                  label="滚动缩进"
                  initialValue={0.5}
                >
                  <Stepper min={0} max={1} step={0.1} />
                </Form.Item>
              </>
            );
          }}
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prev, next) => prev.type !== next.type}
        >
          {() => {
            const type = form.getFieldValue("type");
            if (+type === 0)
              return null;
            return (
              <Form.Item
                name={["menu", "direction"]}
                label="菜单展开方向"
                initialValue="around"
              >
                <Radio.Group>
                  <Radio name="around">around</Radio>
                  <Radio name="vertical">vertical</Radio>
                  <Radio name="horizontal">horizontal</Radio>
                </Radio.Group>
              </Form.Item>
            );
          }}
        </Form.Item>
      </Form>
      {+config.type === 1 ? <Menu {...config} /> : <Bubble {...config} />}
      <div style={{ height: 1000 }} />
    </div>
  );
};
`,
      },
    },
  },
};
