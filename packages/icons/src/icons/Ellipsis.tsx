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
        d="M180.556 555.556c38.353 0 69.444-31.092 69.444-69.445s-31.091-69.444-69.444-69.444-69.445 31.091-69.445 69.444 31.091 69.445 69.445 69.445m319.444 0c38.353 0 69.444-31.092 69.444-69.445s-31.09-69.444-69.444-69.444-69.444 31.091-69.444 69.444 31.09 69.445 69.444 69.445m319.444 0c38.354 0 69.445-31.092 69.445-69.445s-31.091-69.444-69.445-69.444S750 447.758 750 486.11s31.091 69.445 69.444 69.445"
      />
    </svg>
  )
}
export function Ellipsis(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={Ellipsis.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default Ellipsis
