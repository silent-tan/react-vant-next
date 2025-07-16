import type { FormInstance } from "rc-field-form";
import type { FormProps } from "./PropsType";
import { createNamespace } from "@react-vant-next/utils";
import clsx from "clsx";
import RcForm from "rc-field-form";
import React from "react";
import { FormContext } from "./FormContext";

const [bem] = createNamespace("form");
function Form({ ref, ...props }: FormProps & { ref?: React.RefObject<FormInstance | null> }) {
  const {
    className,
    style,
    layout,
    footer,
    children,
    colon,
    required,
    border,
    labelAlign,
    controlAlign,
    showValidateMessage = true,
    ...formProps
  } = props;

  return (
    <RcForm
      className={clsx(bem(), className)}
      style={style}
      ref={ref}
      {...formProps}
    >
      <FormContext
        value={{
          layout,
          colon,
          border,
          required,
          showValidateMessage,
          controlAlign,
          labelAlign,
        }}
      >
        {children}
      </FormContext>
      {footer && <div className={clsx(bem("footer"))}>{footer}</div>}
    </RcForm>
  );
}

export default Form;
