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
        d="M340 300h320c22.091 0 40 17.909 40 40v320c0 22.091-17.909 40-40 40H340c-22.091 0-40-17.909-40-40V340c0-22.091 17.909-40 40-40"
      />
    </svg>
  )
}
export function Stop(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={Stop.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default Stop
