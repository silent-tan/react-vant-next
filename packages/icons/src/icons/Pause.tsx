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
        d="M333.333 138.889c46.024 0 83.334 37.31 83.334 83.333v555.556c0 46.024-37.31 83.333-83.334 83.333S250 823.801 250 777.778V222.222c0-46.023 37.31-83.333 83.333-83.333m333.334 0c46.023 0 83.333 37.31 83.333 83.333v555.556c0 46.024-37.31 83.333-83.333 83.333-46.024 0-83.334-37.31-83.334-83.333V222.222c0-46.023 37.31-83.333 83.334-83.333"
      />
    </svg>
  )
}
function SvgPause(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={SvgPause.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default SvgPause
