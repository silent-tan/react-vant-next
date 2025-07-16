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
        <path d="m499.665 460.936 137.492-137.493c10.848-10.848 28.436-10.848 39.284 0s10.848 28.436 0 39.284L538.948 500.22l137.493 137.493c10.848 10.848 10.848 28.436 0 39.284s-28.436 10.848-39.284 0L499.665 539.504 362.172 676.997c-10.848 10.848-28.436 10.848-39.284 0s-10.848-28.436 0-39.284L460.38 500.22 322.888 362.727c-10.848-10.848-10.848-28.436 0-39.284s28.436-10.848 39.284 0z" />
        <path
          fillRule="nonzero"
          d="M500 888.889c214.777 0 388.889-174.112 388.889-388.889S714.777 111.111 500 111.111 111.111 285.223 111.111 500 285.223 888.889 500 888.889m0 55.555C254.54 944.444 55.556 745.46 55.556 500S254.54 55.556 500 55.556 944.444 254.54 944.444 500 745.46 944.444 500 944.444"
        />
      </g>
    </svg>
  )
}
function SvgClose(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={SvgClose.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default SvgClose
