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
        d="M500.004 166.667c-299.961 0-444.448 291.314-444.448 305.555 0 14.257 140.628 305.556 444.448 305.556 303.814 0 444.44-291.3 444.44-305.556 0-14.241-144.487-305.555-444.44-305.555m0 472.222c-92.05 0-166.67-74.62-166.67-166.669s74.62-166.664 166.67-166.664c92.042 0 166.663 74.615 166.663 166.664S592.046 638.89 500.004 638.89m0-250c-46.032 0-83.337 37.31-83.337 83.33 0 46.03 37.305 83.335 83.337 83.335 46.019 0 83.33-37.305 83.33-83.335 0-46.02-37.311-83.33-83.33-83.33"
      />
    </svg>
  )
}
function SvgEye(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={SvgEye.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default SvgEye
