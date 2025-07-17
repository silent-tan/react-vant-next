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
        d="M537.5 537.5h-400c-20.71 0-37.5-16.79-37.5-37.5s16.79-37.5 37.5-37.5h725c20.71 0 37.5 16.79 37.5 37.5s-16.79 37.5-37.5 37.5z"
      />
    </svg>
  )
}
export function Minus(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={Minus.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default Minus
