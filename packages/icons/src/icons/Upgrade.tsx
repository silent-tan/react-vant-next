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
      <g fillRule="evenodd">
        <path
          fillRule="nonzero"
          d="M500 888.889c214.777 0 388.889-174.112 388.889-388.889S714.777 111.111 500 111.111 111.111 285.223 111.111 500 285.223 888.889 500 888.889m0 55.555C254.54 944.444 55.556 745.46 55.556 500S254.54 55.556 500 55.556 944.444 254.54 944.444 500 745.46 944.444 500 944.444"
        />
        <path d="m501.58 277.383 39.283 39.284L678.356 454.16c10.848 10.848 10.848 28.435 0 39.283s-28.436 10.848-39.284 0l-111.69-111.69V694.05c0 15.34-12.436 27.777-27.777 27.777s-27.778-12.436-27.778-27.777V385.702l-107.74 107.741c-10.849 10.848-28.437 10.848-39.284 0-10.848-10.848-10.848-28.435 0-39.283l137.493-137.493z" />
      </g>
    </svg>
  )
}
export function Upgrade(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={Upgrade.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default Upgrade
