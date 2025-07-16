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
        d="M494.094 733.426a41.47 41.47 0 0 1-20.023-11.126L140.16 388.388c-16.272-16.271-16.272-42.653 0-58.925s42.653-16.272 58.925 0L503.66 634.037 808.186 329.51c16.271-16.272 42.653-16.272 58.925 0s16.272 42.654 0 58.926L533.2 722.347c-10.607 10.607-25.508 14.3-39.106 11.08"
      />
    </svg>
  )
}
function SvgArrowDown(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={SvgArrowDown.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default SvgArrowDown
