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
          d="M500 857.143c197.245 0 357.143-159.898 357.143-357.143S697.245 142.857 500 142.857 142.857 302.755 142.857 500 302.755 857.143 500 857.143m0 59.524C269.881 916.667 83.333 730.119 83.333 500S269.881 83.333 500 83.333 916.667 269.881 916.667 500 730.119 916.667 500 916.667"
        />
        <circle cx={347.002} cy={392.857} r={47.619} />
        <circle cx={655.644} cy={392.857} r={47.619} />
        <path
          fillRule="nonzero"
          d="M684.632 549.606c5.477-15.498 22.481-23.62 37.979-18.143s23.62 22.481 18.142 37.979C705.315 669.706 610.25 738.095 502.18 738.095s-203.136-68.39-238.574-168.653c-5.478-15.498 2.645-32.501 18.143-37.979 15.497-5.477 32.5 2.645 37.978 18.143 27.095 76.658 99.805 128.965 182.453 128.965s155.357-52.307 182.452-128.965"
        />
      </g>
    </svg>
  )
}
export function SmileO(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={SmileO.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default SmileO
