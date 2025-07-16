import type { Meta, StoryObj } from "@storybook/react-vite";

import { Form } from "..";
import BaseExample from "../demo/base";
import CustomFieldExample from "../demo/custom";
import DynamicFormExample from "../demo/list";
import FormMethodsExample from "../demo/method";
import RulesExample from "../demo/rules";
import ComplexFormExample from "../demo/shouldUpdate";
import FormSubscribeExample from "../demo/subscribe";
import TypeExample from "../demo/type";
import FormWatchExample from "../demo/watch";

const meta: Meta<typeof Form> = {
  id: "component-form",
  title: "Form/Form",
  component: Form,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "用于数据录入、校验，支持输入框、单选框、复选框、文件上传等类型。",
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
    layout: {
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
      description: "表单布局方式",
      table: {
        category: "基础",
        type: { summary: "string" },
        defaultValue: { summary: "horizontal" },
      },
    },
    footer: {
      control: { type: "text" },
      description: "表单底部内容",
      table: {
        category: "基础",
        type: { summary: "React.ReactNode" },
      },
    },

    // 外观
    border: {
      control: { type: "boolean" },
      description: "统一设置表单项底部边框显示",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    colon: {
      control: { type: "boolean" },
      description: "配置 Form.Item 的 colon 的默认值。表示是否显示 label 后面的冒号",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    labelAlign: {
      control: { type: "radio" },
      options: ["left", "center", "right"],
      description: "统一设置左侧文本对齐方式",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "left" },
      },
    },
    controlAlign: {
      control: { type: "radio" },
      options: ["left", "center", "right"],
      description: "统一设置右侧内容对齐方式",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "left" },
      },
    },

    // 状态
    required: {
      control: { type: "boolean" },
      description: "配置 Form.Item 的 required 的默认值",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    showValidateMessage: {
      control: { type: "boolean" },
      description: "是否显示验证错误信息",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },

    // 事件
    onFinish: {
      description: "提交表单且数据验证成功后回调事件",
      table: {
        category: "事件",
        type: { summary: "(values: any) => void" },
      },
    },
    onFinishFailed: {
      description: "提交表单且数据验证失败后回调事件",
      table: {
        category: "事件",
        type: { summary: "(errorInfo: any) => void" },
      },
    },
    onValuesChange: {
      description: "字段值更新时触发回调事件",
      table: {
        category: "事件",
        type: { summary: "(changedValues: any, allValues: any) => void" },
      },
    },
    onFieldsChange: {
      description: "字段更新时触发回调事件",
      table: {
        category: "事件",
        type: { summary: "(changedFields: any[], allFields: any[]) => void" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Form>;

export const Default: Story = {
  name: "基础用法",
  render: () => BaseExample(),
  parameters: {
    docs: {
      description: {
        story: "在表单中，每个 Form.Item 组件代表一个表单项，使用 Form.Item 的 `rules` 属性定义校验规则。",
      },
      source: {
        code: `import { Button, Form, Input } from "@react-vant-next/ui";

export default function BaseExample() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      footer={(
        <div style={{ margin: "16px 16px 0" }}>
          <Button round nativeType="submit" type="primary" block>
            提交
          </Button>
        </div>
      )}
    >
      <Form.Item
        tooltip={{
          message:
            "A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.",
        }}
        intro="确保这是唯一的用户名"
        rules={[{ required: true, message: "请填写用户名" }]}
        name="username"
        label="用户名"
      >
        <Input placeholder="请输入用户名" />
      </Form.Item>
      <Form.Item
        rules={[{ required: true, message: "请填写密码" }]}
        name="password"
        label="密码"
      >
        <Input placeholder="请输入密码" />
      </Form.Item>
    </Form>
  );
};
`,
      },
    },
  },
};

export const ValidationRules: Story = {
  name: "校验规则",
  render: () => RulesExample(),
  parameters: {
    docs: {
      description: {
        story: "通过 `rules` 定义表单校验规则，查看更多 rule 文档。",
      },
      source: {
        code: `
import { Button, Form, Input, Toast } from "@react-vant-next/ui";

export default function RulesExample() {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form
      onFinish={onFinish}
      footer={(
        <div style={{ margin: "16px 16px 0" }}>
          <Button round nativeType="submit" type="primary" block>
            提交
          </Button>
        </div>
      )}
    >
      <Form.Item
        name="text1"
        label="正则校验"
        rules={[{ pattern: /^\d{6}$/, message: "请输入6位数字" }]}
      >
        <Input placeholder="正则校验" />
      </Form.Item>
      <Form.Item
        name="text2"
        label="函数校验"
        rules={[
          {
            validator: (_, value) => {
              if (/^1\d{10}$/.test(value)) {
                return Promise.resolve(true);
              }
              return Promise.reject(new Error("请输入正确的手机号码"));
            },
          },
        ]}
      >
        <Input placeholder="函数校验" />
      </Form.Item>
      <Form.Item
        label="异步函数校验"
        name="text3"
        rules={[
          {
            validator: (_, value) => {
              return new Promise((resolve, reject) => {
                Toast.loading("验证中...");

                setTimeout(() => {
                  if (/^\d{6}$/.test(value)) {
                    resolve(true);
                  }
                  else {
                    reject(new Error("请输入正确内容"));
                  }
                  Toast.clear();
                }, 1000);
              });
            },
          },
        ]}
      >
        <Input placeholder="异步函数校验" />
      </Form.Item>
    </Form>
  );
};
        `,
      },
    },
  },
};

export const FormTypeStory: Story = {
  name: "表单项类型",
  render: () => <TypeExample />,
  parameters: {
    docs: {
      description: {
        story: "展示不同类型的表单项。",
      },
      source: {
        code: `
import {
  Button,
  Calendar,
  Checkbox,
  DatetimePicker,
  Form,
  Input,
  Picker,
  Radio,
  Rate,
  Slider,
  Stepper,
  Switch,
  Uploader,
} from "@react-vant-next/ui";

export default function TypeExample() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form
      colon
      form={form}
      onFinish={onFinish}
      footer={(
        <div style={{ margin: "16px 16px 0" }}>
          <Button round nativeType="submit" type="primary" block>
            提交
          </Button>
        </div>
      )}
    >
      <Form.Item name="switch" label="开关" valuePropName="checked">
        <Switch size={20} />
      </Form.Item>
      <Form.Item name="checkbox" label="复选框" valuePropName="checked">
        <Checkbox shape="square" />
      </Form.Item>
      <Form.Item
        name="checkbox_group"
        label="复选框组"
        initialValue={["c1", "c2"]}
      >
        <Checkbox.Group direction="horizontal">
          <Checkbox shape="square" name="c1">
            复选框1
          </Checkbox>
          <Checkbox shape="square" name="c2">
            复选框2
          </Checkbox>
        </Checkbox.Group>
      </Form.Item>
      <Form.Item name="radio" label="单选框">
        <Radio.Group direction="horizontal">
          <Radio name="r1">单选框1</Radio>
          <Radio name="r2">单选框2</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item name="stepper" label="步进器" initialValue={1}>
        <Stepper />
      </Form.Item>
      <Form.Item name="rate" label="评分" initialValue={3}>
        <Rate />
      </Form.Item>
      <Form.Item name="slider" label="滑块" initialValue={25}>
        <Slider />
      </Form.Item>
      <Form.Item
        isLink
        name="picker"
        label="城市选择"
        trigger="onConfirm"
        onClick={(_, action) => {
          action.current?.open();
        }}
      >
        <Picker
          popup
          columns={[
            "南京",
            "苏州",
            "常州",
            "淮安",
            "扬州",
            "南通",
            "宿迁",
            "泰州",
            "无锡",
          ]}
        >
          {val => val || "请选择城市"}
        </Picker>
      </Form.Item>
      <Form.Item
        isLink
        name="date"
        label="日期选择"
        trigger="onConfirm"
        onClick={(_, action) => {
          action.current?.open();
        }}
      >
        <DatetimePicker popup type="date">
          {(val: Date) => (val ? val.toDateString() : "请选择日期")}
        </DatetimePicker>
      </Form.Item>
      <Form.Item
        isLink
        name="calendar"
        label="日历选择"
        trigger="onConfirm"
        onClick={(_, action) => {
          action.current?.open();
        }}
      >
        <Calendar>
          {(val: Date) => (val ? val.toDateString() : "请选择日历")}
        </Calendar>
      </Form.Item>
      <Form.Item
        name="uploader"
        label="上传文件"
        rules={[{ required: true, message: "请选择文件" }]}
        initialValue={[
          {
            url: "https://img.yzcdn.cn/vant/sand.jpg",
          },
        ]}
      >
        <Uploader />
      </Form.Item>
      <Form.Item name="textarea" label="详细地址">
        <Input.TextArea rows={3} autoSize maxLength={140} showWordLimit />
      </Form.Item>
    </Form>
  );
};`,
      },
    },
  },
};

export const CustomField: Story = {
  name: "自定义表单项",
  render: () => CustomFieldExample(),
  parameters: {
    docs: {
      description: {
        story: "自定义或第三方的表单控件，也可以与 Form 组件一起使用。只要该组件遵循以下的约定：提供受控属性 `value` 值同名的属性，提供 `onChange` 事件。",
      },
      source: {
        code: `
import { ArrowDown } from "@react-vant-next/icons";
import { Button, Form, Input, Picker, Space } from "@react-vant-next/ui";
import React from "react";

const columns = [
  { text: "86 🇨🇳", value: "86" },
  { text: "87 🇺🇸", value: "87" },
  { text: "88 🏳️‍🌈", value: "88" },
  { text: "89 🏳️‍⚧️", value: "89" },
  { text: "90 🇴🇲", value: "90" },
  { text: "91 🇵🇪", value: "91" },
  { text: "92 🇩🇪", value: "92" },
];

interface MobileInputValue {
  prefix: string;
  value: string;
}

interface MobileInputProps {
  value?: MobileInputValue;
  onChange?: (value: MobileInputValue) => void;
}

// 自定义表单项
const MobileInput: React.FC<MobileInputProps> = ({
  value = { prefix: "", value: "" },
  onChange,
}) => {
  const trigger = (changedValue: Partial<MobileInputValue>) => {
    onChange?.({ ...value, ...changedValue });
  };

  const onMobileChange = (value: string) => {
    trigger({ value });
  };

  const onPrefixChange = (prefix: string) => {
    trigger({ prefix });
  };
  return (
    <>
      <Picker
        popup
        value={value.prefix}
        placeholder={false}
        columns={columns}
        onConfirm={onPrefixChange}
      >
        {(_, selectRow: any, actions) => {
          return (
            <Space>
              <Space align="center" onClick={() => actions.open()}>
                <div>
                  +
                  {selectRow?.text}
                </div>
                <ArrowDown style={{ display: "block" }} />
              </Space>
              <Input
                value={value.value}
                placeholder="请输入手机号"
                onChange={onMobileChange}
              />
            </Space>
          );
        }}
      </Picker>
    </>
  );
};

export default function CustomFieldExample() {
  const [form] = Form.useForm();

  const checkMobileInput = (_, value: MobileInputValue) => {
    if (value.prefix && value.value) {
      return Promise.resolve();
    }
    if (!value.prefix)
      Promise.reject(new Error("请选择国家区号!"));
    return Promise.reject(new Error("手机号不能为空!"));
  };

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={onFinish}
      footer={(
        <div style={{ margin: "16px 16px 0" }}>
          <Button round nativeType="submit" type="primary" block>
            提交
          </Button>
        </div>
      )}
    >
      <Form.Item name="name" label="姓名">
        <Input placeholder="请输入用户姓名" />
      </Form.Item>
      <Form.Item
        initialValue={{ prefix: "86", value: "" }}
        name="mobile"
        label="手机号"
        rules={[{ required: true }, { validator: checkMobileInput }]}
      >
        <MobileInput />
      </Form.Item>
    </Form>
  );
};`,
      },
    },
  },
};

export const FormSubscribe: Story = {
  name: "Form.Subscribe 实现更新订阅",
  render: () => FormSubscribeExample(),
  parameters: {
    docs: {
      description: {
        story: "在某些场景，例如修改某个字段值后出现新的字段选项、或希望表单任意变化都对某一个区域进行渲染，可以通过 `Form.Subscribe` 实现。",
      },
      source: {
        code: `
import { Button, Form, Input, NoticeBar, Radio, Space } from "@react-vant-next/ui";

export default function FormSubscribeExample() {
  const [form] = Form.useForm();
  console.log("rerender");
  return (
    <Form
      form={form}
      initialValues={{
        type: "mobile",
        account: "18888888888",
      }}
      footer={(
        <>
          <Form.Subscribe to={["type", "account"]}>
            {({ type, account }) => (
              <NoticeBar>
                你将使用
                {" "}
                {type === "mobile" ? "手机号" : "邮箱"}
                {" "}
                {account}
                {" "}
                登录
              </NoticeBar>
            )}
          </Form.Subscribe>
          <div style={{ margin: "16px 16px 0" }}>
            <Button round nativeType="submit" type="primary" block>
              提交
            </Button>
          </div>
        </>
      )}
    >
      <Form.Item name="type" label="登录方式">
        <Radio.Group>
          <Space>
            <Radio name="mobile">手机号</Radio>
            <Radio name="email">邮箱</Radio>
          </Space>
        </Radio.Group>
      </Form.Item>

      <Form.Subscribe to={["type"]}>
        {({ type }) => {
          return (
            <>
              {type === "mobile" && (
                <Form.Item name="account" label="手机号">
                  <Input placeholder="请输入手机号" />
                </Form.Item>
              )}
              {type === "email" && (
                <Form.Item name="account" label="邮箱">
                  <Input placeholder="请输入邮箱" />
                </Form.Item>
              )}
            </>
          );
        }}
      </Form.Subscribe>
    </Form>
  );
}
`,
      },
    },
  },
};

export const FormWatch: Story = {
  name: "Form.useWatch 实现更新订阅",
  render: () => FormWatchExample(),
  parameters: {
    docs: {
      description: {
        story: "在某些场景，例如修改某个字段值后出现新的字段选项、或希望表单任意变化都对某一个区域进行渲染，可以通过 \`Form.useWatch\` hook 实现。",
      },
      source: {
        code: `
import { Button, Form, Input, NoticeBar, Radio, Space } from "@react-vant-next/ui";

interface FieldType { account?: string; loginMethod?: "mobile" | "email" }

export default function FormWatchExample() {
  const [form] = Form.useForm<FieldType>();

  const account = Form.useWatch("account", form);
  const type = Form.useWatch("type", form);

  console.log("watch rerender");
  return (
    <Form
      form={form}
      initialValues={{
        type: "mobile",
        account: "18888888888",
      }}
      footer={(
        <>
          <NoticeBar>
            你将使用
            {" "}
            {type === "mobile" ? "手机号" : "邮箱"}
            {" "}
            {account}
            {" "}
            登录
          </NoticeBar>
          <div style={{ margin: "16px 16px 0" }}>
            <Button round nativeType="submit" type="primary" block>
              提交
            </Button>
          </div>
        </>
      )}
    >
      <Form.Item name="type" label="登录方式">
        <Radio.Group>
          <Space>
            <Radio name="mobile">手机号</Radio>
            <Radio name="email">邮箱</Radio>
          </Space>
        </Radio.Group>
      </Form.Item>
      {type === "mobile" && (
        <Form.Item name="account" label="手机号">
          <Input placeholder="请输入手机号" />
        </Form.Item>
      )}
      {type === "email" && (
        <Form.Item name="account" label="邮箱">
          <Input placeholder="请输入邮箱" />
        </Form.Item>
      )}
    </Form>
  );
}
`,
      },
    },
  },
};

export const ComplexForm: Story = {
  name: "复杂联动",
  render: () => ComplexFormExample(),
  parameters: {
    docs: {
      description: {
        story: "大部分场景下，你只需要编写代码或者与 `dependencies` 属性配合校验即可。而在某些特定场景，例如修改某个字段值后出现新的字段选项、或者纯粹希望表单任意变化都对某一个区域进行渲染。你可以通过 `shouldUpdate` 修改 `Form.Item` 的更新逻辑。",
      },
      source: {
        code: `
import { Button, Form, Input, Picker, Selector, Typography } from "@react-vant-next/ui";
import React, { Fragment } from "react";

const columns = [
  "南京",
  "苏州",
  "常州",
  "淮安",
  "扬州",
  "南通",
  "宿迁",
  "泰州",
  "无锡",
];

export default function ComplexFormExample() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form
      colon
      form={form}
      onFinish={onFinish}
      footer={(
        <div style={{ margin: "16px 16px 0" }}>
          <Button round nativeType="submit" type="primary" block>
            提交
          </Button>
        </div>
      )}
    >
      <Form.Item name="type" label="联系方式" initialValue={["mobile"]}>
        <Selector
          options={[
            {
              label: "手机号",
              value: "mobile",
            },
            {
              label: "住址",
              value: "address",
            },
          ]}
          multiple={true}
        />
      </Form.Item>
      <Form.Item noStyle shouldUpdate={(p, n) => p.type !== n.type}>
        {({ getFieldValue }) => {
          const type = getFieldValue("type") || [];
          const content = [];
          if (type.includes("mobile")) {
            content.push(
              <Form.Item key="mobile" name="mobile" label="手机号">
                <Input placeholder="请输入手机号" />
              </Form.Item>,
            );
          }
          if (type.includes("address")) {
            content.push(
              <Fragment key="address">
                <Form.Item
                  name="area"
                  label="区域"
                  trigger="onConfirm"
                  onClick={(_, actions) => actions.current?.open()}
                >
                  <Picker popup columns={columns}>
                    {val =>
                      val
                        ? (
                            <Typography.Text>{val}</Typography.Text>
                          )
                        : (
                            "请选择地址"
                          )}
                  </Picker>
                </Form.Item>
                <Form.Item name="area_address" label="详细地址">
                  <Input.TextArea placeholder="请输入详细地址" />
                </Form.Item>
              </Fragment>,
            );
          }
          return content;
        }}
      </Form.Item>
    </Form>
  );
};
`,
      },
    },
  },
};

export const DynamicForm: Story = {
  name: "动态增减表单项",
  render: () => <DynamicFormExample />,
  parameters: {
    docs: {
      description: {
        story: "动态增减表单项，展示如何使用 `Form.List` 组件实现动态增减表单项。",
      },
      source: {
        code: `
import { AddO, Delete } from "@react-vant-next/icons";
import { Button, Cell, Form, Input, Space } from "@react-vant-next/ui";
import "./style.less";

export default function DynamicFormExample() {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="demo-form">
      <Form
        onFinish={onFinish}
        footer={(
          <div style={{ margin: "16px 16px 0" }}>
            <Button round nativeType="submit" type="primary" block>
              提交
            </Button>
          </div>
        )}
      >
        <Cell.Group>
          <Form.List
            name="users"
            initialValue={[{ name: "@react-vant-next/ui", age: "1" }]}
          >
            {(fields, { add, remove }) => (
              <>
                {fields.map((field, idx) => (
                  <div className="form-list-item" key={field.key}>
                    <h6>
                      <Space block align="center" justify="between">
                        <strong>
                          用户
                          {idx + 1}
                          :
                        </strong>
                        <Delete
                          color="grey"
                          fontSize={18}
                          onClick={() => remove(idx)}
                        />
                      </Space>
                    </h6>
                    <div className="form-list-item__control">
                      <Form.Item
                        label="姓名"
                        name={[field.name, "name"]}
                        rules={[
                          {
                            type: "string",
                            min: 2,
                            max: 6,
                            message: "姓名最少两个字，最多6个字",
                          },
                        ]}
                      >
                        <Input placeholder="请输入用户姓名" />
                      </Form.Item>
                      <Form.Item
                        label="年龄"
                        name={[field.name, "age"]}
                        rules={[
                          {
                            type: "number",
                            message: "请输入数字",
                            transform: v => Number(v),
                          },
                        ]}
                      >
                        <Input placeholder="请输入用户年龄" />
                      </Form.Item>
                    </div>
                  </div>
                ))}
                <div style={{ padding: 10 }}>
                  <Button
                    round
                    block
                    plain
                    icon={<AddO />}
                    size="small"
                    onClick={() => add()}
                  >
                    新增用户
                  </Button>
                </div>
              </>
            )}
          </Form.List>
        </Cell.Group>
      </Form>
    </div>
  );
};
`,
      },
    },
  },
};

export const FormMethods: Story = {
  name: "表单方法",
  render: () => <FormMethodsExample />,
  parameters: {
    docs: {
      description: {
        story: "表单方法，展示如何使用表单实例的方法，如设置表单值、重置表单等。",
      },
      source: {
        code: `import { Button, Form, Input } from "@react-vant-next/ui";

export default function FormMethodsExample() {
  const [form] = Form.useForm();

  const onFill = () => {
    form.setFieldsValue({
      username: "张三",
      password: "123456",
    });
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      <Form
        form={form}
        footer={(
          <div style={{ margin: "16px 16px 0" }}>
            <Button round nativeType="submit" type="primary" block>
              提交
            </Button>
          </div>
        )}
      >
        <Form.Item
          name="username"
          label="用户名"
          rules={[{ required: true, message: "请输入用户名" }]}
        >
          <Input placeholder="请输入用户名" />
        </Form.Item>
        <Form.Item
          name="password"
          label="密码"
          rules={[{ required: true, message: "请输入密码" }]}
        >
          <Input type="password" placeholder="请输入密码" />
        </Form.Item>
      </Form>
      <div style={{ margin: "16px", display: "flex", gap: "8px" }}>
        <Button type="primary" onClick={onFill} size="small">
          填充表单
        </Button>
        <Button onClick={onReset} size="small">
          重置表单
        </Button>
      </div>
    </>
  );
}
`,
      },
    },
  },
};
