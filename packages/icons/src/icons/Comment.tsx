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
        d="m611.111 722.221-64.886 97.33a55.6 55.6 0 0 1-15.408 15.408c-25.53 17.02-60.022 10.12-77.042-15.409l-64.886-97.329H111.11c-30.682 0-55.555-24.873-55.555-55.555v-500c0-30.683 24.873-55.556 55.555-55.556H888.89c30.682 0 55.555 24.873 55.555 55.556v500c0 30.682-24.873 55.555-55.555 55.555zM305.556 277.777c-15.342 0-27.778 12.436-27.778 27.777s12.436 27.778 27.778 27.778h388.888c15.342 0 27.778-12.436 27.778-27.778 0-15.34-12.436-27.777-27.778-27.777zm0 166.666c-15.342 0-27.778 12.437-27.778 27.778S290.214 500 305.556 500h388.888c15.342 0 27.778-12.437 27.778-27.778s-12.436-27.778-27.778-27.778z"
      />
    </svg>
  )
}
export function Comment(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={Comment.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default Comment
