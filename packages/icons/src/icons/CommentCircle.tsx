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
        d="M500 55.556c245.46 0 444.444 198.984 444.444 444.444S745.46 944.444 500 944.444 55.556 745.46 55.556 500 254.54 55.556 500 55.556m218.75 222.222h-437.5c-17.259 0-31.25 13.99-31.25 31.25v331.039c0 17.259 13.991 31.25 31.25 31.25h26.72l32.35 62.325c7.95 15.318 26.814 21.29 42.132 13.34a31.25 31.25 0 0 0 13.34-13.34l32.35-62.325H718.75c17.259 0 31.25-13.991 31.25-31.25v-331.04c0-17.258-13.991-31.25-31.25-31.25m-24.306 55.555v282.428h-300.06l-26.328 50.726-26.33-50.726h-36.17V333.333z"
      />
    </svg>
  )
}
export function CommentCircle(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={CommentCircle.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default CommentCircle
