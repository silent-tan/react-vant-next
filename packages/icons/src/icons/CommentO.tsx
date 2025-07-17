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
          d="m500 788.734 81.379-122.068h307.51v-500H111.11v500h307.51zm46.225 30.816a55.6 55.6 0 0 1-15.408 15.409c-25.53 17.02-60.022 10.12-77.042-15.409l-64.886-97.329H111.11c-30.682 0-55.555-24.873-55.555-55.555v-500c0-30.683 24.873-55.556 55.555-55.556H888.89c30.682 0 55.555 24.873 55.555 55.556v500c0 30.682-24.873 55.555-55.555 55.555H611.11z"
        />
        <path d="M305.556 277.777h388.888c15.342 0 27.778 12.436 27.778 27.777s-12.436 27.778-27.778 27.778H305.556c-15.342 0-27.778-12.436-27.778-27.778 0-15.34 12.436-27.777 27.778-27.777M305.556 444.443h388.888c15.342 0 27.778 12.437 27.778 27.778S709.786 500 694.444 500H305.556c-15.342 0-27.778-12.437-27.778-27.778s12.436-27.778 27.778-27.778" />
      </g>
    </svg>
  )
}
export function CommentO(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={CommentO.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default CommentO
