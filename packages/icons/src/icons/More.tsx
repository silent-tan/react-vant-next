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
        d="M500 55.556c245.46 0 444.444 198.984 444.444 444.444S745.46 944.444 500 944.444 55.556 745.46 55.556 500 254.54 55.556 500 55.556m0 388.888c-30.682 0-55.556 24.874-55.556 55.556s24.874 55.556 55.556 55.556 55.556-24.874 55.556-55.556-24.874-55.556-55.556-55.556m-222.222 0c-30.683 0-55.556 24.874-55.556 55.556s24.873 55.556 55.556 55.556 55.555-24.874 55.555-55.556-24.873-55.556-55.555-55.556m444.444 0c-30.682 0-55.555 24.874-55.555 55.556s24.873 55.556 55.555 55.556c30.683 0 55.556-24.874 55.556-55.556s-24.873-55.556-55.556-55.556"
      />
    </svg>
  )
}
export function More(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={More.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default More
