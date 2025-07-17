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
        d="m527.778 528.587 249.726-361.92H222.496l249.726 361.92V812.99l55.556 33.334zm-111.111 17.307L164.748 180.797a44.44 44.44 0 0 1-7.863-25.241c0-24.546 19.899-44.445 44.445-44.445h597.34c9.017 0 17.82 2.743 25.241 7.863 20.204 13.94 25.28 41.62 11.34 61.823L583.334 545.894v398.55l-166.666-100z"
      />
    </svg>
  )
}
export function FilterO(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={FilterO.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default FilterO
