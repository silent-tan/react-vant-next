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
      <g fillRule="nonzero">
        <path d="m766.059 337.827 7.246 7.013c6.306 6.103 5.847 15.79-.763 22.188L456.809 672.594c-9.823 9.507-25.951 9.09-36.063-.696l-137.63-133.197c-6.24-6.04-7.25-15.432-1.749-22.153l12.862-15.716c5.272-6.442 15.135-8.06 22.105-3.551l111.327 72.018c5.872 3.8 15.979 3.305 21.462-1.007l294.171-231.317c6.612-5.2 16.97-4.757 22.765.852" />
        <path d="M500 888.889c214.777 0 388.889-174.112 388.889-388.889S714.777 111.111 500 111.111 111.111 285.223 111.111 500 285.223 888.889 500 888.889m0 55.555C254.54 944.444 55.556 745.46 55.556 500S254.54 55.556 500 55.556 944.444 254.54 944.444 500 745.46 944.444 500 944.444" />
      </g>
    </svg>
  )
}
function SvgPassed(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={SvgPassed.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default SvgPassed
