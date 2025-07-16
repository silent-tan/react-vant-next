import type { LazyImageProps } from "./PropsType";
import { Photo, PhotoFail } from "@react-vant-next/icons";
import { createNamespace, mergeProps } from "@react-vant-next/utils";
import clsx from "clsx";
import React from "react";
import { COMPONENT_TYPE_KEY } from "../constants";
import Lazyload from "../lazyload";
import { IMAGE_KEY } from "./constants";
import Image from "./Image";
import { getLazyImagePlaceholder } from "./util";

const [bem] = createNamespace("image");

const LazyImage: React.FC<LazyImageProps> = (p) => {
  const props = mergeProps(p, {
    fit: "fill",
    errorIcon: <PhotoFail />,
    loadingIcon: <Photo />,
    showError: true,
    showLoading: true,
    block: true,
  });
  const { lazyload, ...imageProps } = props;
  const renderPlaceholder = () => {
    if (typeof lazyload === "boolean")
      return getLazyImagePlaceholder(bem);
    return lazyload.placeholder || getLazyImagePlaceholder(bem);
  };

  if (lazyload) {
    const { height, width } = imageProps;
    const lazyloadProps = typeof lazyload === "boolean" ? {} : lazyload;
    const attrs = {
      className: clsx(lazyloadProps.className, bem({ block: imageProps.block })),
      style: { ...lazyloadProps.style, height, width },
    };
    return (
      <Lazyload {...attrs} placeholder={renderPlaceholder()}>
        <Image {...imageProps} />
      </Lazyload>
    );
  }
  return <Image {...imageProps} />;
};

const ImageNamespace = Object.assign(LazyImage, {
  [COMPONENT_TYPE_KEY]: IMAGE_KEY,
});

export default ImageNamespace;
