import type { FormInstance } from "rc-field-form";
import type { NamePath } from "rc-field-form/es/interface";
import type { FC } from "react";
import { useIsomorphicUpdateLayoutEffect, useUpdate } from "@react-vant-next/hooks";
import { FieldContext, useWatch } from "rc-field-form";
import React, { memo, use } from "react";

type RenderChildren<Values = any> = (
  changedValues: Record<string, any>,
  form: FormInstance<Values>
) => React.ReactNode;
type ChildrenType<Values = any> = RenderChildren<Values>;

export interface FormSubscribeProps {
  to: NamePath[];
  children: ChildrenType;
}

export const Watcher = memo<{
  form: FormInstance;
  namePath: NamePath;
  onChange: () => void;
}>((props) => {
      const value = useWatch(props.namePath, props.form);
      useIsomorphicUpdateLayoutEffect(() => {
        props.onChange();
      }, [value]);
      return null;
    });

//  移植自antd mobile: https://github.com/ant-design/ant-design-mobile/blob/master/src/components/form/form-subscribe.tsx
export const FormSubscribe: FC<FormSubscribeProps> = (props) => {
  const update = useUpdate();
  const form = use(FieldContext);
  return (
    <>
      {props.children(form.getFieldsValue(props.to), form)}
      {props.to.map(namePath => (
        <Watcher
          key={namePath.toString()}
          form={form}
          namePath={namePath}
          onChange={update}
        />
      ))}
    </>
  );
};
