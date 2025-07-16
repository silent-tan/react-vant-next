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
        d="M500.617 247.708c7.533-.345 15.179 2.358 20.931 8.11l275.124 275.124c10.853 10.853 10.853 28.45 0 39.303s-28.45 10.853-39.304 0L528.292 341.168v506.415c0 15.35-12.443 27.792-27.792 27.792s-27.792-12.443-27.792-27.792V341.168L243.632 570.245c-10.854 10.853-28.45 10.853-39.304 0-10.853-10.853-10.853-28.45 0-39.303l275.124-275.124c5.782-5.782 13.478-8.483 21.048-8.105ZM222.583 125h555.834c15.349 0 27.791 12.443 27.791 27.792s-12.442 27.791-27.791 27.791H222.583c-15.349 0-27.791-12.442-27.791-27.791S207.234 125 222.583 125"
      />
    </svg>
  )
}
function SvgBackTop(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={SvgBackTop.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default SvgBackTop
