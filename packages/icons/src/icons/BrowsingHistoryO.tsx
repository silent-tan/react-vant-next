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
          d="M500 888.889c214.777 0 388.889-174.112 388.889-388.889S714.777 111.111 500 111.111 111.111 285.223 111.111 500 285.223 888.889 500 888.889m0 55.555C254.54 944.444 55.556 745.46 55.556 500S254.54 55.556 500 55.556 944.444 254.54 944.444 500 745.46 944.444 500 944.444"
        />
        <path d="M500.002 333.333c187.471 0 277.776 158.9 277.776 166.667 0 7.776-87.892 166.667-277.776 166.667-189.887 0-277.78-158.89-277.78-166.667 0-7.768 90.305-166.667 277.78-166.667m0 55.556c-67.851 0-125.167 24.714-172.386 66.478-16.227 14.352-30.182 29.878-41.188 44.895 10.763 14.894 24.442 30.27 40.418 44.494 46.805 41.67 104.243 66.355 173.156 66.355 68.912 0 126.349-24.685 173.152-66.355 15.977-14.224 29.655-29.6 40.418-44.494-11.006-15.017-24.96-30.543-41.187-44.895-47.219-41.764-104.533-66.478-172.383-66.478M500 444.444c30.682 0 55.556 24.874 55.556 55.556S530.682 555.556 500 555.556 444.444 530.682 444.444 500s24.874-55.556 55.556-55.556" />
      </g>
    </svg>
  )
}
export function BrowsingHistoryO(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={BrowsingHistoryO.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default BrowsingHistoryO
