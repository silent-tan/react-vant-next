import { Button, Form, Input } from "@react-vant-next/ui";

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
