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
        d="M666.667 761.111v162.157c0 15.341-12.437 27.778-27.778 27.778-3.723 0-7.407-.748-10.835-2.2L521.67 903.78a55.56 55.56 0 0 0-43.338 0l-106.385 45.065c-14.126 5.983-30.429-.617-36.413-14.743a27.8 27.8 0 0 1-2.2-10.835V761.111c50.515 23.997 107.023 37.424 166.667 37.424s116.152-13.427 166.667-37.424M500 83.333c184.095 0 333.333 149.239 333.333 333.334S684.095 750 500 750 166.667 600.762 166.667 416.667 315.905 83.333 500 83.333m0 222.223c-61.365 0-111.111 49.746-111.111 111.11 0 61.366 49.746 111.112 111.111 111.112s111.111-49.746 111.111-111.111S561.365 305.556 500 305.556"
      />
    </svg>
  )
}
function SvgAward(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={SvgAward.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default SvgAward
