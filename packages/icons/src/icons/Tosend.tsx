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
        d="m826.776 222.222-27.778-55.555H201.002l-27.778 55.555h-62.113l40.2-80.4a55.56 55.56 0 0 1 49.69-30.71h597.997a55.56 55.56 0 0 1 49.69 30.71l40.2 80.4v611.111c0 30.683-24.872 55.556-55.555 55.556H166.667c-30.683 0-55.556-24.873-55.556-55.556v-611.11zm6.557 55.556H166.667v555.555h666.666z"
      />
    </svg>
  )
}
function SvgTosend(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={SvgTosend.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default SvgTosend
