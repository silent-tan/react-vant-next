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
        d="m607.651 120.192 324.795 316.981c16.478 16.106 16.602 42.164.308 58.206L607.342 815.552c-16.313 16.042-29.538 10.121-29.538-12.809V635.287C109.358 635.287 57.572 880.73 56 888.779l.45-17.767c4.604-91.379 51.475-502.827 521.354-570.618V132.917c0-23.098 13.225-28.935 29.847-12.725m32.684 120.169.037 60.033c0 31.772-22.94 58.7-53.8 63.152C386.401 392.425 258.8 488.09 184.921 630.456a552 552 0 0 0-11.054 22.547l-3.663 8.373 9.905-5.718c92.745-51.281 215.82-81.075 372.651-83.926l25.044-.226c32.087 0 58.533 24.622 62.147 56.343l.42 7.438-.036 59.127 231.624-227.951z"
      />
    </svg>
  )
}
export function ShareO(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={ShareO.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default ShareO
