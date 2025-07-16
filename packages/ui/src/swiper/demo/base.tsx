import { Swiper } from "@react-vant-next/ui";
import { items } from "./items";
import "./base.less";

export default function BaseDemo() {
  return (
    <div className="demo-swiper">
      <Swiper autoplay={5000}>{items}</Swiper>
    </div>
  );
};
