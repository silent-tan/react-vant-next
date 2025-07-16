import { Picker } from "@react-vant-next/ui";

export default function LoadingPicker() {
  return (
    <Picker
      loading
      columns={[
        ["周一", "周二", "周三", "周四", "周五"],
        ["上午", "下午", "晚上"],
      ]}
    />
  );
};
