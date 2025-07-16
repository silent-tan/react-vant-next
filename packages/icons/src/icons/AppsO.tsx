import type { SVGProps } from "react"
import type { IconBaseProps } from "./IconBase"
import IconBase from "./IconBase"

function SvgIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 1024 1024"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="nonzero"
        d="M708.333 166.667c-69.035 0-125 55.964-125 125 0 69.035 55.965 125 125 125 69.036 0 125-55.965 125-125 0-69.036-55.964-125-125-125m0-55.556c99.718 0 180.556 80.838 180.556 180.556S808.05 472.222 708.333 472.222s-180.555-80.837-180.555-180.555S608.615 111.11 708.333 111.11m-541.666 55.556v250h250v-250zm0-55.556h250c30.682 0 55.555 24.873 55.555 55.556v250c0 30.682-24.873 55.555-55.555 55.555h-250c-30.683 0-55.556-24.873-55.556-55.555v-250c0-30.683 24.873-55.556 55.556-55.556m0 472.222v250h250v-250zm0-55.555h250c30.682 0 55.555 24.873 55.555 55.555v250c0 30.683-24.873 55.556-55.555 55.556h-250c-30.683 0-55.556-24.873-55.556-55.556v-250c0-30.682 24.873-55.555 55.556-55.555m416.666 55.555v250h250v-250zm0-55.555h250c30.683 0 55.556 24.873 55.556 55.555v250c0 30.683-24.873 55.556-55.556 55.556h-250c-30.682 0-55.555-24.873-55.555-55.556v-250c0-30.682 24.873-55.555 55.555-55.555"
      />
    </svg>
  )
}
function SvgAppsO(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={SvgAppsO.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default SvgAppsO
