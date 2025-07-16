import LazyImage from "./LazyImage";
import "./style/index.less";

const Image = LazyImage;

Image.displayName = "Image";

export default Image;
export { Image };
export type { ImageFit, ImageProps } from "./PropsType";
