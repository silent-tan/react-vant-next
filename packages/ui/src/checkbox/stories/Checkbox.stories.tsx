import type { Meta, StoryObj } from "@storybook/react-vite";
import type { CheckboxGroupInstance } from "../index";
import { ShopO } from "@react-vant-next/icons";
import { useRef, useState } from "react";
import Button from "../../button";
import Cell from "../../cell";
import Toast from "../../toast";

import Checkbox from "../index";
import "../demo/custom.less";
import "../demo/style.less";

const meta = {
  id: "form-checkbox",
  title: "Form/Checkbox",
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: "用于在选中和非选中状态之间进行切换。",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: { type: "boolean" },
      description: "是否为选中状态",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "状态",
      },
    },
    defaultChecked: {
      control: { type: "boolean" },
      description: "默认选中状态",
      table: {
        type: { summary: "boolean" },
        category: "状态",
      },
    },
    name: {
      control: { type: "text" },
      description: "标识符",
      table: {
        type: { summary: "number | string" },
        category: "数据",
      },
    },
    shape: {
      control: { type: "select" },
      options: ["round", "square"],
      description: "形状",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "round" },
        category: "外观",
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "是否禁用复选框",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "状态",
      },
    },
    labelDisabled: {
      control: { type: "boolean" },
      description: "是否禁用复选框文本点击",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "状态",
      },
    },
    labelPosition: {
      control: { type: "select" },
      options: ["left", "right"],
      description: "文本位置",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "right" },
        category: "外观",
      },
    },
    iconSize: {
      control: { type: "text" },
      description: "图标大小，默认单位为 px",
      table: {
        type: { summary: "number | string" },
        defaultValue: { summary: "20px" },
        category: "外观",
      },
    },
    checkedColor: {
      control: { type: "color" },
      description: "选中状态颜色",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "#3f45ff" },
        category: "外观",
      },
    },
    bindGroup: {
      control: { type: "boolean" },
      description: "是否与复选框组绑定",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "行为",
      },
    },
    onChange: {
      description: "当绑定值变化时触发的事件",
      table: {
        type: { summary: "(checked: boolean) => void" },
        category: "事件",
      },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  name: "基础用法",
  parameters: {
    docs: {
      description: {
        story: "通过 `defaultChecked` 值默认复选框的勾选状态。通过设置 `disabled` 属性可以禁用复选框。设置 `labelDisabled` 属性后，点击图标以外的内容不会触发复选框切换。",
      },
      source: {
        code: `<div className="demo-checkbox">
  <Checkbox checked={checked} onChange={setChecked}>
    复选框
  </Checkbox>
  <Checkbox defaultChecked onChange={val => console.log(val)}>
    默认勾选
  </Checkbox>
  <br />
  <Checkbox disabled>禁用复选框</Checkbox>
  <br />
  <Checkbox defaultChecked labelDisabled>
    禁止文本点击
  </Checkbox>
</div>`,
      },
      canvas: {
        sourceState: "shown",
      },
    },
  },
  render: () => {
    return BasicExample();
  },
};

export const Custom: Story = {
  name: "自定义样式",
  parameters: {
    docs: {
      description: {
        story: `
- 将 \`shape\` 属性设置为 \`square\`，复选框的形状会变成方形。
- 通过 \`checkedColor\` 属性设置选中状态的图标颜色。
- 通过 \`iconSize\` 属性可以自定义图标的大小
`,
      },
      source: {
        code: `
function CustomExample() {
  const activeIcon = "https://img.yzcdn.cn/vant/user-active.png";
  const inactiveIcon = "https://img.yzcdn.cn/vant/user-inactive.png";
  return (
    <div className="demo-checkbox">
      <Checkbox defaultChecked shape="square">
        自定义形状
      </Checkbox>
      <br />
      <Checkbox defaultChecked checkedColor="#ee0a24">
        自定义颜色
      </Checkbox>
      <br />
      <Checkbox defaultChecked iconSize={24}>
        自定义大小
      </Checkbox>
      <br />
      <Checkbox
        defaultChecked
        iconRender={({ checked: isActive }) => (
          <img alt="" src={isActive ? activeIcon : inactiveIcon} />
        )}
      >
        自定义图标
      </Checkbox>
    </div>
  );
}`,
      },
      canvas: {
        sourceState: "shown",
      },
    },
  },
  render: () => {
    return CustomExample();
  },
};

export const AsyncUpdate: Story = {
  name: "异步更新",
  parameters: {
    docs: {
      description: {
        story: "设置 `checked` 属性后，点击图标状态不会改变，而是直接执行 `onChange` 方法，在此方法中更换状态。",
      },
      source: {
        code: `
function AsyncUpdateExample() {
  const [value, setValue] = useState(false);

  return (
    <div className="demo-checkbox">
      <Checkbox
        checked={value}
        onChange={(val) => {
          Toast.loading({ forbidClick: true, duration: 0 });

          setTimeout(() => {
            Toast.clear();
            setValue(val);
          }, 500);
        }}
      >
        复选框
      </Checkbox>
    </div>
  );
}`,
      },
      canvas: {
        sourceState: "shown",
      },
    },
  },
  render: () => {
    return AsyncUpdateExample();
  },
};

export const CheckboxGroup: Story = {
  name: "复选框组",
  parameters: {
    docs: {
      description: {
        story: "复选框可以与复选框组一起使用，复选框组通过 `defaultValue` 数组默认复选框的勾选状态。",
      },
      source: {
        code: `
function CheckboxGroupExample() {
  return (
    <div className="demo-checkbox">
      <Checkbox.Group onChange={v => console.log(v)} defaultValue={["a", "b"]}>
        <Checkbox name="a">复选框组a</Checkbox>
        <Checkbox name="b">复选框组b</Checkbox>
        <Checkbox name="c">复选框组c</Checkbox>
      </Checkbox.Group>
    </div>
  );
}`,
      },
      canvas: {
        sourceState: "shown",
      },
    },
  },
  render: () => {
    return CheckboxGroupExample();
  },
};

export const Horizontal: Story = {
  name: "水平排列",
  parameters: {
    docs: {
      description: {
        story: "将 `direction` 属性设置为 `horizontal` 后，复选框组会变成水平排列。",
      },
      source: {
        code: `
<div className="demo-checkbox">
  <Checkbox.Group defaultValue={[]} direction="horizontal">
    <Checkbox name="a">复选框a</Checkbox>
    <Checkbox name="b">复选框b</Checkbox>
  </Checkbox.Group>
</div>`,
      },
      canvas: {
        sourceState: "shown",
      },
    },
  },
  render: () => (
    <div className="demo-checkbox">
      <Checkbox.Group defaultValue={[]} direction="horizontal">
        <Checkbox name="a">复选框a</Checkbox>
        <Checkbox name="b">复选框b</Checkbox>
      </Checkbox.Group>
    </div>
  ),
};

export const MaxCount: Story = {
  name: "最大可选数",
  parameters: {
    docs: {
      description: {
        story: "通过 `max` 属性可以限制复选框组的最大可选数。",
      },
      source: {
        code: `
<div className='demo-checkbox'>
  <Checkbox.Group defaultValue={[]} max={2}>
    <Checkbox name='a'>复选框a</Checkbox>
    <Checkbox name='b'>复选框b</Checkbox>
    <Checkbox name='c'>复选框c</Checkbox>
  </Checkbox.Group>
</div>`,
      },
      canvas: {
        sourceState: "shown",
      },
    },
  },
  render: () => (
    <div className="demo-checkbox">
      <Checkbox.Group defaultValue={[]} max={2}>
        <Checkbox name="a">复选框a</Checkbox>
        <Checkbox name="b">复选框b</Checkbox>
        <Checkbox name="c">复选框c</Checkbox>
      </Checkbox.Group>
    </div>
  ),
};

export const ToggleAll: Story = {
  name: "全选与反选",
  parameters: {
    docs: {
      description: {
        story: "通过 `CheckboxGroup` 实例上的`toggleAll`方法可以实现全选与反选。",
      },
      source: {
        code: `
function ToggleAllExample() {
  const ref = useRef<CheckboxGroupInstance>(null);
  const [checkAll, setCheckAll] = useState(["a"]);

  return (
    <div className="demo-checkbox">
      <Checkbox.Group ref={ref} value={checkAll} onChange={setCheckAll}>
        <Checkbox name="a">复选框组a</Checkbox>
        <Checkbox name="b">复选框组b</Checkbox>
        <Checkbox name="c">复选框组c</Checkbox>
      </Checkbox.Group>
      <div className="demo-checkbox-buttons">
        <Button type="primary" onClick={() => ref.current?.toggleAll(true)}>
          全选
        </Button>
        <Button type="primary" onClick={() => ref.current?.toggleAll()}>
          反选
        </Button>
      </div>
    </div>
  );
}`,
      },
      canvas: {
        sourceState: "shown",
      },
    },
  },
  render: () => {
    return ToggleAllExample();
  },
};

export const WithCell: Story = {
  name: "搭配单元格组件使用",
  parameters: {
    docs: {
      description: {
        story: "此时你需要再引入 `Cell` 和 `Cell.Group` 组件。",
      },
      source: {
        code: `
function WithCellExample() {
  const [cellCheck, setCellCheck] = useState([]);

  const toggle = (name: string) => {
    const newValue = cellCheck.includes(name)
      ? cellCheck.filter(el => el !== name)
      : [...cellCheck, name];
    setCellCheck(newValue);
  };

  return (
    <div className="demo-checkbox">
      <Checkbox.Group value={cellCheck} onChange={setCellCheck}>
        <Cell.Group>
          <Cell
            clickable
            title="单选框1"
            icon={<ShopO />}
            onClick={() => toggle("a")}
            rightIcon={<Checkbox name="a" />}
          />
          <Cell
            clickable
            title="单选框2"
            icon={<ShopO />}
            onClick={() => toggle("b")}
            rightIcon={<Checkbox name="b" />}
          />
        </Cell.Group>
      </Checkbox.Group>
    </div>
  );
}`,
      },
      canvas: {
        sourceState: "shown",
      },
    },
  },
  render: () => {
    return WithCellExample();
  },
};

function WithCellExample() {
  const [cellCheck, setCellCheck] = useState([]);

  const toggle = (name: string) => {
    const newValue = cellCheck.includes(name)
      ? cellCheck.filter(el => el !== name)
      : [...cellCheck, name];
    setCellCheck(newValue);
  };

  return (
    <div className="demo-checkbox">
      <Checkbox.Group value={cellCheck} onChange={setCellCheck}>
        <Cell.Group>
          <Cell
            clickable
            title="单选框1"
            icon={<ShopO />}
            onClick={() => toggle("a")}
            rightIcon={<Checkbox name="a" />}
          />
          <Cell
            clickable
            title="单选框2"
            icon={<ShopO />}
            onClick={() => toggle("b")}
            rightIcon={<Checkbox name="b" />}
          />
        </Cell.Group>
      </Checkbox.Group>
    </div>
  );
}

function ToggleAllExample() {
  const ref = useRef<CheckboxGroupInstance>(null);
  const [checkAll, setCheckAll] = useState(["a"]);

  return (
    <div className="demo-checkbox">
      <Checkbox.Group ref={ref} value={checkAll} onChange={setCheckAll}>
        <Checkbox name="a">复选框组a</Checkbox>
        <Checkbox name="b">复选框组b</Checkbox>
        <Checkbox name="c">复选框组c</Checkbox>
      </Checkbox.Group>
      <div className="demo-checkbox-buttons">
        <Button type="primary" onClick={() => ref.current?.toggleAll(true)}>
          全选
        </Button>
        <Button type="primary" onClick={() => ref.current?.toggleAll()}>
          反选
        </Button>
      </div>
    </div>
  );
}

function CheckboxGroupExample() {
  return (
    <div className="demo-checkbox">
      <Checkbox.Group onChange={v => console.log(v)} defaultValue={["a", "b"]}>
        <Checkbox name="a">复选框组a</Checkbox>
        <Checkbox name="b">复选框组b</Checkbox>
        <Checkbox name="c">复选框组c</Checkbox>
      </Checkbox.Group>
    </div>
  );
}

function AsyncUpdateExample() {
  const [value, setValue] = useState(false);

  return (
    <div className="demo-checkbox">
      <Checkbox
        checked={value}
        onChange={(val) => {
          Toast.loading({ forbidClick: true, duration: 0 });

          setTimeout(() => {
            Toast.clear();
            setValue(val);
          }, 500);
        }}
      >
        复选框
      </Checkbox>
    </div>
  );
}

function CustomExample() {
  const activeIcon = "https://img.yzcdn.cn/vant/user-active.png";
  const inactiveIcon = "https://img.yzcdn.cn/vant/user-inactive.png";
  return (
    <div className="demo-checkbox">
      <Checkbox defaultChecked shape="square">
        自定义形状
      </Checkbox>
      <br />
      <Checkbox defaultChecked checkedColor="#ee0a24">
        自定义颜色
      </Checkbox>
      <br />
      <Checkbox defaultChecked iconSize={24}>
        自定义大小
      </Checkbox>
      <br />
      <Checkbox
        defaultChecked
        iconRender={({ checked: isActive }) => (
          <img alt="" src={isActive ? activeIcon : inactiveIcon} />
        )}
      >
        自定义图标
      </Checkbox>
    </div>
  );
}

function BasicExample() {
  const [checked, setChecked] = useState(false);
  return (
    <div style={{ padding: "16px" }}>
      <Checkbox checked={checked} onChange={setChecked}>
        复选框
      </Checkbox>
      <br />
      <Checkbox defaultChecked onChange={val => console.log(val)}>
        默认勾选
      </Checkbox>
      <br />
      <Checkbox disabled>禁用复选框</Checkbox>
      <br />
      <Checkbox defaultChecked labelDisabled>
        禁止文本点击
      </Checkbox>
    </div>
  );
}
