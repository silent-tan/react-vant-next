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
        fillRule="evenodd"
        d="M500 55.556c245.46 0 444.444 198.984 444.444 444.444S745.46 944.444 500 944.444 55.556 745.46 55.556 500 254.54 55.556 500 55.556m27.778 333.333h-97.222v55.555h41.666v250h-55.555V750h166.666v-55.556h-55.555zM500 250c-23.012 0-41.667 18.655-41.667 41.667s18.655 41.666 41.667 41.666 41.667-18.654 41.667-41.666S523.012 250 500 250"
      />
    </svg>
  )
}
function SvgInfo(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={SvgInfo.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default SvgInfo
