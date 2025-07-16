import _Swiper from "./Swiper";
import SwiperItem from "./SwiperItem";
import "./style/index.less";

const Swiper = Object.assign(_Swiper, { Item: SwiperItem });

export default Swiper;
export { Swiper };
export type { SwiperInstance, SwiperProps } from "./PropsType";
