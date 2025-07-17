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
        d="m560.149 501.223 255.344 255.344c16.272 16.272 16.272 42.654 0 58.926s-42.654 16.272-58.926 0L501.223 560.149 245.88 815.493c-16.272 16.272-42.654 16.272-58.925 0-16.272-16.272-16.272-42.654 0-58.926l255.344-255.344L186.954 245.88c-16.272-16.272-16.272-42.654 0-58.925 16.271-16.272 42.653-16.272 58.925 0l255.344 255.344 255.344-255.344c16.272-16.272 42.654-16.272 58.926 0s16.272 42.653 0 58.925z"
      />
    </svg>
  )
}
export function Cross(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={Cross.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default Cross
