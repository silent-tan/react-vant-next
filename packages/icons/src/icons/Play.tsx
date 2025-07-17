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
        d="M767.38 527.269 378.465 838.402c-11.98 9.584-29.46 7.641-39.044-4.338a27.78 27.78 0 0 1-6.087-17.353V194.444c0-15.34 12.437-27.777 27.778-27.777a27.78 27.78 0 0 1 17.353 6.087L767.38 483.887c11.979 9.584 13.921 27.064 4.338 39.044a27.8 27.8 0 0 1-4.338 4.338"
      />
    </svg>
  )
}
export function Play(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={Play.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default Play
