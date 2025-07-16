import { Image, Swiper } from "@react-vant-next/ui";
import { images } from "./images";
import "./images.less";

export default function LazyloadComponent() {
  return (
    <div className="demo-swiper">
      <Swiper>
        {images.map(image => (
          <Swiper.Item key={image}>
            <Image lazyload src={image} />
          </Swiper.Item>
        ))}
      </Swiper>
    </div>
  );
};
