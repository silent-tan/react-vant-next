import type { ImagePreviewProps } from "./PropsType";
import type { SlidesRef } from "./slides";
import { createNamespace, mergeProps, pick } from "@react-vant-next/utils";
import cls from "clsx";
import React, { useRef, useState } from "react";
import Popup from "../popup";
import SwiperPagIndicator from "../swiper/SwiperPagIndicator";
import { Slides } from "./slides";

export type ImagePreviewRef = SlidesRef;

const [bem] = createNamespace("image-preview");

function ImagePreview({ ref, ...p }: ImagePreviewProps & { ref?: React.RefObject<ImagePreviewRef | null> }) {
  const props = mergeProps(p, {
    overlay: true,
    showIndex: true,
    images: [],
    swipeDuration: 300,
    startPosition: 0,
    closeIconPosition: "top-right" as const,
    showIndicators: false,
    closeOnlyClickCloseIcon: false,
    maxZoom: 3,
  });
  const slidesRef = useRef<SlidesRef>(null);
  const [active, setActive] = useState(() => props.startPosition);

  const currentImage = React.useMemo(
    () => props.images[active],
    [active, props.images],
  );

  const onSwipeChange = (idx: number) => {
    if (active !== idx) {
      setActive(idx);
      props.onChange?.(idx);
    }
  };

  const onClose = () => {
    props.onClose?.({ url: currentImage, index: active });
  };

  const renderContent = () => (
    <div className={cls(bem("content"))}>
      {props.images && (
        <Slides
          ref={slidesRef}
          defaultIndex={props.startPosition}
          onIndexChange={onSwipeChange}
          images={props.images}
          lazyload={props.lazyload}
          onTap={() => {
            if (!props.closeOnlyClickCloseIcon) {
              onClose();
            }
          }}
          maxZoom={props.maxZoom}
        />
      )}
    </div>
  );

  const renderClose = () => {
    if (props.closeable && props.closeIcon) {
      return React.cloneElement<any>(props.closeIcon as React.ReactElement, {
        className: cls(bem("close-icon", props.closeIconPosition)),
        onClick: onClose,
      });
    }
    return null;
  };

  const renderIndex = () => {
    if (props.showIndex) {
      return (
        <div className={cls(bem("index"))}>
          {props.indexRender
            ? props.indexRender({ index: active, len: props.images.length })
            : `${active + 1} / ${props.images.length}`}
        </div>
      );
    }
    return null;
  };

  const renderIndicator = () => {
    if (props.showIndicators) {
      return (
        <div className={cls(bem("indicator"))}>
          <SwiperPagIndicator total={props.images.length} current={active} />
        </div>
      );
    }
    return null;
  };

  React.useImperativeHandle(ref, () => ({
    swipeTo: (index: number, immediate?: boolean) => {
      setActive(index);
      slidesRef.current?.swipeTo(index, immediate);
    },
  }));

  return (
    <Popup
      className={cls(bem(), props.className)}
      overlayClass={cls(bem("overlay"))}
      {...pick(props, [
        "visible",
        "overlayStyle",
        "closeOnPopstate",
        "onClosed",
        "beforeClose",
        "teleport",
      ])}
    >
      {renderClose()}
      {renderContent()}
      {renderIndex()}
      {renderIndicator()}
    </Popup>
  );
}

export default ImagePreview;
