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
