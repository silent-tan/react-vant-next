import { Area } from "@react-vant-next/campaign";
import { areaList } from "@vant/area-data";

export default () => {
  return (
    <Area title="标题" areaList={areaList} onConfirm={v => console.log(v)} />
  );
};
