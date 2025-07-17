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
        d="M500 944.444C254.54 944.444 55.556 745.46 55.556 500S254.54 55.556 500 55.556 944.444 254.54 944.444 500 745.46 944.444 500 944.444m167.75-422.707a27.8 27.8 0 0 0 4.337-4.338c9.584-11.98 7.642-29.46-4.338-39.043L462.215 313.928a27.78 27.78 0 0 0-17.352-6.086c-15.342 0-27.778 12.436-27.778 27.777v328.854a27.78 27.78 0 0 0 6.087 17.353c9.584 11.98 27.064 13.922 39.043 4.338z"
      />
    </svg>
  )
}
export function PlayCircle(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={PlayCircle.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default PlayCircle
