import type { Locale } from "@react-vant-next/ui";
import type { CouponCellProps, CouponInfo } from "../coupon-list/PropsType";
import { Cell, ConfigProviderContext } from "@react-vant-next/ui";
import { createNamespace, isDef, mergeProps } from "@react-vant-next/utils";
import cls from "clsx";
import React, { use } from "react";

function formatValue(
  coupons: CouponInfo[],
  chosenCoupon: number | string,
  currency: string,
  locale: Locale,
) {
  const coupon = coupons[+chosenCoupon];

  if (coupon) {
    let value = 0;

    if (isDef(coupon.value)) {
      ;({ value } = coupon);
    }
    else if (isDef(coupon.denominations)) {
      value = coupon.denominations;
    }

    return `-${currency} ${(value / 100).toFixed(2)}`;
  }

  return coupons.length === 0
    ? locale.noCoupon
    : locale.vanCouponCell.count(coupons.length);
}

const [bem] = createNamespace("coupon-cell");

const CouponCell: React.FC<CouponCellProps> = (p) => {
  const props = mergeProps(p, {
    border: true,
    editable: true,
    coupons: [],
    currency: "¥",
    chosenCoupon: -1,
  });
  const { locale } = use(ConfigProviderContext);

  const selected = props.coupons[+props.chosenCoupon];
  const value = formatValue(
    props.coupons,
    props.chosenCoupon,
    props.currency,
    locale,
  );

  return (
    <Cell
      style={props.style}
      className={cls(bem(), props.className)}
      value={value}
      title={props.title || locale.vanCouponCell.title}
      border={props.border}
      isLink={props.editable}
      valueClass={cls(bem("value", { selected }))}
      onClick={props.onClick}
    />
  );
};

export default CouponCell;
