import type { Ref } from "react";
import { isObject } from "@react-vant-next/utils";
import { useCallback, useEffect, useRef, useState } from "react";

function isEmpty(val: Record<string, unknown>) {
  if (isObject(val)) {
    return JSON.stringify(val) === "{}";
  }
  return true;
}

export interface FormOption {
  /**
   * initialValues
   */
  value?: Record<string, unknown>;
  /**
   * sync
   */
  sync?: boolean;
}
export interface FormMethod {
  set: (values: unknown) => void;
  get: (name: string) => unknown;
  submit: () => void;
  getAll: () => Record<string, unknown>;
  clear: () => void;
}
export type FormState = [Ref<unknown>, FormMethod];

export function useFormSmart(option: FormOption = {}): FormState {
  const { value, sync } = option;
  const ref = useRef(null);
  const [once, setOnce] = useState<boolean>(false);
  const set = useCallback((values: unknown) => {
    ref?.current?.setFieldsValue(values);
  }, []);
  const get = useCallback((name: string) => {
    return ref?.current?.getFieldValue(name);
  }, []);

  const submit = useCallback(() => {
    ref?.current?.submit();
  }, []);

  const clear = useCallback(() => {
    ref?.current?.resetFields();
  }, []);

  const getAll = useCallback(() => {
    return ref?.current?.getFieldsValue();
  }, []);

  useEffect(() => {
    if (!isEmpty(value)) {
      if (sync) {
        set(value);
      }
      else if (!once) {
        set(value);
        setOnce(true);
      }
    }
  }, [value]);
  const methods = { set, get, submit, clear, getAll };
  return [ref, methods];
}
