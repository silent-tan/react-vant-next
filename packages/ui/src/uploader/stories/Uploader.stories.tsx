import type { Meta, StoryObj } from "@storybook/react-vite";

import BasicExample from "../demo/base";
import AsyncCloseExample from "../demo/close";
import FormDemo from "../demo/form";
import UploadLimitExample from "../demo/limit";
import CustomPreviewExample from "../demo/preview";
import AutoUploadExample from "../demo/upload";
import { Uploader } from "../index";

const meta = {
  id: "components-uploader",
  title: "Form/Uploader",
  component: Uploader,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "用于将本地的图片或文件上传至服务器。",
      },
    },
  },
  argTypes: {
    // 基础
    value: {
      description: "已上传的文件列表",
      table: {
        type: { summary: "UploaderValueItem[]" },
        required: false,
        category: "基础",
      },
    },
    defaultValue: {
      description: "默认上传的文件列表",
      table: {
        type: { summary: "UploaderValueItem[]" },
        defaultValue: { summary: "[]" },
        required: false,
        category: "基础",
      },
    },
    accept: {
      description: "允许上传的文件类型",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "image/*" },
        required: false,
        category: "基础",
      },
    },
    name: {
      description: "标识符，可以在回调函数的第二项参数中获取",
      table: {
        type: { summary: "number | string" },
        required: false,
        category: "基础",
      },
    },
    multiple: {
      description: "是否开启图片多选，部分安卓机型不支持",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
        category: "基础",
      },
    },
    disabled: {
      description: "是否禁用文件上传",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
        category: "基础",
      },
    },
    readOnly: {
      description: "是否将上传区域设置为只读状态",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
        category: "基础",
      },
    },
    maxSize: {
      description: "文件大小限制，单位为 byte",
      table: {
        type: { summary: "number | string | (file: File) => boolean" },
        required: false,
        category: "基础",
      },
    },
    maxCount: {
      description: "文件上传数量限制",
      table: {
        type: { summary: "number | string" },
        required: false,
        category: "基础",
      },
    },
    resultType: {
      description: "文件读取结果类型，可选值为 file text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "dataUrl" },
        required: false,
        category: "基础",
      },
    },
    upload: {
      description: "上传方法",
      table: {
        type: { summary: "(file: File) => Promise<UploaderValueItem>" },
        required: false,
        category: "基础",
      },
    },
    style: {
      description: "自定义样式",
      table: {
        type: { summary: "CSSProperties" },
        required: false,
        category: "基础",
      },
    },
    className: {
      description: "自定义类名",
      table: {
        type: { summary: "string" },
        required: false,
        category: "基础",
      },
    },
    children: {
      description: "自定义上传按钮",
      table: {
        type: { summary: "ReactNode" },
        required: false,
        category: "基础",
      },
    },
    // 外观
    isImageUrl: {
      description: "手动指定是否为图片，使用 <img /> 标签进行显示",
      table: {
        type: { summary: "(file: UploaderValueItem) => void" },
        required: false,
        category: "外观",
      },
    },
    previewSize: {
      description: "预览图和上传区域的尺寸，默认单位为 px",
      table: {
        type: { summary: "number | string" },
        defaultValue: { summary: "80px" },
        required: false,
        category: "外观",
      },
    },
    previewImage: {
      description: "是否在上传完成后展示预览图",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        required: false,
        category: "外观",
      },
    },
    previewFullImage: {
      description: "是否在点击预览图后展示全屏图片预览",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        required: false,
        category: "外观",
      },
    },
    previewCoverRender: {
      description: "自定义覆盖在预览区域上方的内容",
      table: {
        type: { summary: "(item: UploaderValueItem) => React.ReactNode" },
        required: false,
        category: "外观",
      },
    },
    previewOptions: {
      description: "全屏图片预览的配置项",
      table: {
        type: { summary: "object" },
        required: false,
        category: "外观",
      },
    },
    deletable: {
      description: "是否展示删除按钮",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        required: false,
        category: "外观",
      },
    },
    deleteRender: {
      description: "自定义删除按钮视图",
      table: {
        type: { summary: "(del: () => void) => ReactNode" },
        required: false,
        category: "外观",
      },
    },
    showUpload: {
      description: "是否展示上传区域",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        required: false,
        category: "外观",
      },
    },
    capture: {
      description: "图片选取模式，可选值为 camera (直接调起摄像头)",
      table: {
        type: { summary: "string" },
        required: false,
        category: "外观",
      },
    },
    uploadText: {
      description: "上传区域文字提示",
      table: {
        type: { summary: "string" },
        required: false,
        category: "外观",
      },
    },
    statusTextRender: {
      description: "自定义上传状态文案",
      table: {
        type: { summary: "(status: 'failed' | 'pending') => ReactNode" },
        required: false,
        category: "外观",
      },
    },
    imageFit: {
      description: "预览图裁剪模式",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "cover" },
        required: false,
        category: "外观",
      },
    },
    uploadIcon: {
      description: "上传区域图标",
      table: {
        type: { summary: "ReactNode" },
        defaultValue: { summary: "<Photograph />" },
        required: false,
        category: "外观",
      },
    },
    // 事件
    onChange: {
      description: "组件值更新时调用",
      table: {
        type: { summary: "(value: UploaderValueItem[]) => void" },
        required: false,
        category: "事件",
      },
    },
    onOversize: {
      description: "文件大小超过限制时触发",
      table: {
        type: { summary: "(files: File[]) => void" },
        required: false,
        category: "事件",
      },
    },
    onClickUpload: {
      description: "点击上传区域时触发",
      table: {
        type: { summary: "(event: MouseEvent) => void" },
        required: false,
        category: "事件",
      },
    },
    onClickPreview: {
      description: "点击预览图时触发",
      table: {
        type: { summary: "(item: UploaderValueItem, index: number) => void" },
        required: false,
        category: "事件",
      },
    },
    onClosePreview: {
      description: "关闭全屏图片预览时触发",
      table: {
        type: { summary: "() => void" },
        required: false,
        category: "事件",
      },
    },
    onDelete: {
      description: "删除文件预览时触发",
      table: {
        type: { summary: "(item: UploaderValueItem) => boolean|Promise<boolean>|void" },
        required: false,
        category: "事件",
      },
    },
  },
} satisfies Meta<typeof Uploader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Partial<Story> = {
  name: "基础用法",
  render: () => <BasicExample />,
  parameters: {
    docs: {
      description: {
        story: "基础用法展示了上传组件的基本功能，包括图片预览和文件上传。",
      },
      source: {
        code: `
import { Uploader } from "@react-vant-next/ui";
import "./style.less";

const defaultValue = [
  {
    url: "https://img.yzcdn.cn/vant/sand.jpg", // 图片文件
  },
  {
    url: "https://img.yzcdn.cn/vant/sand.text", // 其他文件
  },
];

export default function BasicExample() {
  return (
    <Uploader
      accept="*"
      defaultValue={defaultValue}
      onChange={v => console.log(v)}
    />
  );
};
        `,
      },
    },
  },
};

export const AutoUpload: Partial<Story> = {
  name: "自动上传",
  render: () => <AutoUploadExample />,
  parameters: {
    docs: {
      description: {
        story: "通过 `upload` 方法可以完成文件自动上传。",
      },
      source: {
        code: `
import { Uploader } from "@react-vant-next/ui";
import "./style.less";

const DEMO_UPLOAD_API = "https://nextjs-upload-service.vercel.app/api/upload";

// 实际业务中需要自己实现对应上传逻辑
export async function upload(file: File) {
  try {
    const body = new FormData();
    body.append("source", file);
    const resp = await fetch(DEMO_UPLOAD_API, {
      method: "POST",
      body,
    });
    const json = await resp.json();
    // return包含 url 的一个对象 例如: {url:'https://img.yzcdn.cn/vant/sand.jpg'}
    return json.image;
  }
  catch {
    return { url: \`demo_path/\${file.name}\` };
  }
}

export const demoData = [
  {
    url: "https://img.yzcdn.cn/vant/sand.jpg",
    filename: "图片名称",
  },
  {
    url: "https://img.yzcdn.cn/vant/tree.jpg",
    filename: "图片名称",
  },
];

export default function AutoUploadExample() {
  return <Uploader defaultValue={demoData} upload={upload} />;
};

        `,
      },
    },
  },
};

// 上传限制示例
export const UploadLimit: Partial<Story> = {
  name: "上传限制",
  render: () => {
    return (
      <UploadLimitExample />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "`maxCount` `maxSize` 可以设置最大上传尺寸和最大数量。",
      },
      source: {
        code: `
import { Toast, Uploader } from "@react-vant-next/ui";
import { demoData, upload } from "./utils";
import "./style.less";

export default function UploadLimitExample() {
  return (
    <Uploader
      multiple
      upload={upload}
      defaultValue={[demoData[0]]}
      maxCount={2}
      maxSize={15 * 1024}
      onOversize={() => Toast.info("文件大小不能超过15kb")}
    />
  );
};
        `,
      },
    },
  },
};

// 自定义预览示例
export const CustomPreview: Partial<Story> = {
  name: "自定义预览",
  render: () => (<CustomPreviewExample />),
  parameters: {
    docs: {
      description: {
        story: "- `previewCoverRender` 可以自定义预览信息\n- 想要自定义尺寸则可以使用 `previewSize`",
      },
      source: {
        type: "code",
        code: `
import { Fire } from "@react-vant-next/icons";
import { Uploader } from "@react-vant-next/ui";
import { demoData, upload } from "./utils";
import "./style.less";

export default function CustomPreviewExample() {
  return (
    <Uploader
      defaultValue={demoData}
      upload={upload}
      previewSize={60} // 自定义视图尺寸
      uploadIcon={<Fire />} // 自定义上传图标
      previewCoverRender={(
        item, // 自定义预览内容
      ) =>
        item.filename && (
          <div
            style={{
              position: "absolute",
              bottom: 0,
              width: " 100%",
              color: "#fff",
              fontSize: 12,
              textAlign: "center",
              background: "#00000030",
            }}
          >
            {item.filename}
          </div>
        )}
    />
  );
};
        `,
      },
    },
  },
};

export const AsyncClose: Partial<Story> = {
  name: "异步关闭",
  render: () => <AsyncCloseExample />,
  parameters: {
    docs: {
      description: {
        story: "`onDelete` 支持返回 `Promise`, 可以很方便的用 `Dialog` 来完成确认功能。",
      },
      source: {
        code: `
import { Dialog, Uploader } from "@react-vant-next/ui";
import { demoData, upload } from "./utils";
import "./style.less";

export default function AsyncCloseExample() {
  return (
    <Uploader
      defaultValue={demoData}
      upload={upload}
      onDelete={() => Dialog.confirm({ title: "提示", message: "确认删除?🤔" })}
    />
  );
};
        `,
      },
    },
  },
};

// 自定义上传区域示例
export const CustomUploadArea: Partial<Story> = {
  name: "自定义上传区域",
  render: () => {
    return (
      <Uploader>
        <div style={{
          width: "100px",
          height: "100px",
          background: "#f2f3f5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px dashed #dcdee0",
          borderRadius: "4px",
        }}
        >
          <span style={{ color: "#969799" }}>自定义上传区域</span>
        </div>
      </Uploader>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `children` 可以自定义上传区域的内容。",
      },
      source: {
        code: `
<Uploader>
  <div style={{
    width: "100px",
    height: "100px",
    background: "#f2f3f5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px dashed #dcdee0",
    borderRadius: "4px"
  }}>
    <span style={{ color: "#969799" }}>自定义上传区域</span>
  </div>
</Uploader>
        `,
      },
    },
  },
};

// 表单中使用示例
export const FormUsage: Partial<Story> = {
  name: "表单中使用",
  render: _args => <FormDemo />,
  parameters: {
    docs: {
      description: {
        story: "`Uploader` 组件天生支持 `Form.Item` 嵌套，请放心使用，如果你需要对数据结构进行处理，可以参考下面的例子",
      },
      source: {
        code: `
import type { UploaderValueItem } from "@react-vant-next/ui";
import { Button, Form, Uploader } from "@react-vant-next/ui";
import { useEffect, useRef, useState } from "react";
import { upload } from "./utils";
import "./style.less";

interface AvatarUploaderProps {
  value?: string;
  onChange?: (val: string) => void;
}

function AvatarUploader(props: AvatarUploaderProps) {
  const [tasks, setTasks] = useState<UploaderValueItem[]>([]);
  const idCountRef = useRef(0);

  useEffect(() => {
    if (props.value === undefined)
      return;
    if (!tasks[0] || props.value !== tasks[0].url) {
      setTasks([{ url: props.value, id: idCountRef.current++ }]);
    }
  }, [props.value]);

  const innerChange = (items: UploaderValueItem[]) => {
    setTasks(items);
    const currentUrl = items[0]?.url;
    props.onChange?.(currentUrl);
  };

  return (
    <Uploader
      value={tasks}
      upload={upload}
      maxCount={1}
      onChange={innerChange}
    />
  );
}

export default () => {
  const [form] = Form.useForm();

  const onFinish = async () => {
    const values = await form.validateFields();
    console.log(values);
  };
  return (
    <Form
      colon
      form={form}
      footer={(
        <Button
          style={{ marginTop: 20 }}
          onClick={onFinish}
          type="primary"
          round
          block
        >
          确认
        </Button>
      )}
    >
      <Form.Item
        rules={[{ required: true, message: "请上传头像" }]}
        label="上传头像"
        name="avatar"
        initialValue="https://iili.io/NZiS9e.png"
      >
        {/* 通过封装自定义表单组件，按需实现实际业务逻辑 */}
        <AvatarUploader />
      </Form.Item>
      <Form.Item
        rules={[{ required: true, message: "请上传头像" }]}
        label="上传附件"
        name="files"
      >
        <Uploader accept="*" />
      </Form.Item>
    </Form>
  );
};
        `,
      },
    },
  },
};
