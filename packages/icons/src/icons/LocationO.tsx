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
          d="M500.335 55C684.431 55 833.67 200.948 833.67 380.983q0 246.385-293.515 547.044-.497.51-1.007 1.005c-21.988 21.399-57.16 20.921-78.559-1.067Q167 626.29 167 380.983C167 200.948 316.24 55 500.335 55m0 55.556c-153.687 0-277.78 121.355-277.78 270.427 0 146.484 91.26 316.508 277.846 508.235 186.503-191.041 277.713-361.035 277.713-508.235 0-149.072-124.092-270.427-277.779-270.427m0 444.447c-76.707 0-138.89-62.183-138.89-138.89s62.183-138.89 138.89-138.89 138.89 62.183 138.89 138.89-62.183 138.89-138.89 138.89m0-55.556c46.024 0 83.334-37.31 83.334-83.334s-37.31-83.334-83.334-83.334-83.334 37.31-83.334 83.334 37.31 83.334 83.334 83.334"
        />
      </g>
    </svg>
  )
}
export function LocationO(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={LocationO.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default LocationO
