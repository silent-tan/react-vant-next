import { BORDER_BOTTOM } from "@react-vant-next/ui";
import { createNamespace } from "@react-vant-next/utils";
import cls from "clsx";
import React from "react";

interface SkuRowProps {
  skuRow: Record<any, any>;
  children?: React.ReactNode;
}

const [bem] = createNamespace("sku-row");

const SkuRow: React.FC<SkuRowProps> = (props) => {
  const { skuRow } = props;

  const renderTitle = () => {
    return (
      <div className={cls(bem("title"))}>
        {skuRow.k}
        {skuRow.is_multiple && (
          <span className={cls(bem("title-multiple"))}>（可多选）</span>
        )}
      </div>
    );
  };

  const renderContent = () => {
    const { largeImageMode } = skuRow;
    return largeImageMode
      ? (
          <div className={cls(bem("scroller"))}>
            <div className={cls(bem("row"))}>{props.children}</div>
          </div>
        )
      : (
          props.children
        );
  };

  return (
    <div className={cls(bem(), BORDER_BOTTOM)}>
      {renderTitle()}
      {renderContent()}
    </div>
  );
};

export default SkuRow;
