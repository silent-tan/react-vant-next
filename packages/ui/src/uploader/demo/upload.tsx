import { Uploader } from "@react-vant-next/ui";
import { demoData, upload } from "./utils";
import "./style.less";

export default function AutoUploadExample() {
  return <Uploader defaultValue={demoData} upload={upload} />;
};
