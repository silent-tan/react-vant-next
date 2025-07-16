import type { Locale } from "./types";
import { deepAssign } from "@react-vant-next/utils";
import { base } from "./base";

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
};

export type PartialLocale = DeepPartial<Locale>;

const zhCN = deepAssign(base, {});

function mergeLocale(baseLocal: Locale, mergeLocal: PartialLocale): Locale {
  return deepAssign(baseLocal, mergeLocal) as Locale;
}

export { mergeLocale };

export default zhCN;
