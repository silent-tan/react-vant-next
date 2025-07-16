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
        <path d="m684.878 119.138 117.884 117.885c10.851 10.851 10.851 28.444 0 39.295l-98.237 98.237-157.18-157.18 98.238-98.237c10.85-10.85 28.444-10.85 39.295 0m-19.648 58.943-39.295 39.295 78.59 78.59 39.295-39.295zm195.984 655.348c15.346 0 27.786 12.44 27.786 27.785S876.56 889 861.214 889H138.786C123.44 889 111 876.56 111 861.214c0-15.345 12.44-27.785 27.786-27.785zM508.05 256.67l157.18 157.18L350.87 728.21l-155.605 31.12c-15.047 3.01-29.686-6.748-32.695-21.796a27.8 27.8 0 0 1 0-10.899l31.12-155.605zm0 78.59L244.883 598.426l-19.647 98.238 98.237-19.648L586.64 413.85z" />
      </g>
    </svg>
  )
}
function SvgEdit(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={SvgEdit.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default SvgEdit
