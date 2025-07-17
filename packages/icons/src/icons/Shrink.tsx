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
        d="M166.667 166.667v666.666h666.666V166.667zm0-55.556h666.666c30.683 0 55.556 24.873 55.556 55.556v666.666c0 30.683-24.873 55.556-55.556 55.556H166.667c-30.683 0-55.556-24.873-55.556-55.556V166.667c0-30.683 24.873-55.556 55.556-55.556M650.395 388.89H750c15.341 0 27.778 12.436 27.778 27.778 0 15.34-12.437 27.777-27.778 27.777H583.333c-15.34 0-27.777-12.436-27.777-27.777V250c0-15.341 12.436-27.778 27.777-27.778S611.111 234.66 611.111 250v99.605l119.247-119.247c10.848-10.848 28.436-10.848 39.284 0s10.848 28.436 0 39.284zM349.605 611.11H250c-15.341 0-27.778-12.436-27.778-27.778 0-15.34 12.437-27.777 27.778-27.777h166.667c15.34 0 27.777 12.436 27.777 27.777V750c0 15.341-12.436 27.778-27.777 27.778S388.889 765.34 388.889 750v-99.605L269.642 769.642c-10.848 10.848-28.436 10.848-39.284 0s-10.848-28.436 0-39.284z"
      />
    </svg>
  )
}
export function Shrink(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={Shrink.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default Shrink
