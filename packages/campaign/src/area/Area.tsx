import type { PickerColumn } from "@react-vant-next/ui";
import type {
  AreaColumnOption,
  AreaInstance,
  AreaList,
  AreaProps,
} from "./PropsType";
import { Picker } from "@react-vant-next/ui";
import { createNamespace, mergeProps, pick } from "@react-vant-next/utils";
import clsx from "clsx";
import React, { useMemo } from "react";

const INHERIT_PROPS = [
  "title",
  "visible",
  "popup",
  "value",
  "defaultValue",
  "loading",
  "readOnly",
  "itemHeight",
  "swipeDuration",
  "visibleItemCount",
  "cancelButtonText",
  "confirmButtonText",
  "toolbar",
  "columnsTop",
  "columnsBottom",
  "optionRender",
  "placeholder",
  "onChange",
  "onCancel",
  "onConfirm",
  "children",
] as const;

function parseVanAreaList(
  data: AreaList,
  columnsNum: number,
): PickerColumn<AreaColumnOption> {
  const { province_list = {}, city_list = {}, county_list = {} } = data;

  const provinces = Object.entries(province_list).map(([value, text]) => ({
    value,
    text,
  }));

  const citys = Object.entries(city_list).map(([value, text]) => ({
    value,
    text,
  }));
  const countrys = Object.entries(county_list).map(([value, text]) => ({
    value,
    text,
  }));

  if (columnsNum > 2) {
    citys.forEach((city: any) => {
      const value = city.value?.slice(0, 4);
      const children = countrys.filter(
        country => country.value?.slice(0, 4) === value,
      );
      city.children = children;
    });
  }

  if (columnsNum > 1) {
    provinces.forEach((province: any) => {
      const provinceCode = province.value?.slice(0, 2);
      const children = citys.filter(
        city => city.value?.slice(0, 2) === provinceCode,
      );
      province.children = children;
    });
  }

  return provinces;
}

const [bem] = createNamespace("area");

function Area({ ref, ...p }: AreaProps<AreaColumnOption> & { ref?: React.RefObject<AreaInstance | null> }) {
  const props = mergeProps(p, {
    areaList: {},
    columnsNum: 3,
    itemHeight: 44,
    visibleItemCount: 5,
    swipeDuration: 300,
    showToolbar: true,
    placeholder: true,
    toolbarPosition: "top",
  });
  const columns = useMemo(
    () => props.columns ?? parseVanAreaList(props.areaList, +props.columnsNum),
    [props.columnsNum, props.areaList, props.columns],
  );

  return (
    <Picker<AreaColumnOption>
      ref={ref}
      style={props.style}
      className={clsx(bem(), props.className)}
      columns={columns}
      {...pick(props, INHERIT_PROPS)}
    />
  );
}

export default Area;
