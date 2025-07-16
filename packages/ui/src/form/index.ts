import { List, useForm, useWatch } from "rc-field-form";
import _Form from "./Form";
import Item from "./FormItem";
import { FormSubscribe as Subscribe } from "./FormSubscribe";
import "./style/index.less";

const Form = Object.assign(_Form, { Item, useForm, List, Subscribe, useWatch });

export { Form };
export type { FormSubscribeProps } from "./FormSubscribe";
export type { FormInstance, FormItemProps, FormProps } from "./PropsType";
