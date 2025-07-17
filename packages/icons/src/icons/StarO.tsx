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
        d="m703.801 621.775 166.747-186.618-244.592-52.965L500 165.938 374.044 382.192l-244.592 52.965 166.747 186.618-25.21 248.988L500 769.845l229.011 100.918zM500 830.555 249.75 940.833c-14.04 6.187-30.435-.179-36.621-14.217a27.8 27.8 0 0 1-2.217-14l27.547-272.08L56.25 436.61c-10.223-11.44-9.235-29 2.205-39.222a27.8 27.8 0 0 1 12.629-6.434l267.276-57.878 137.638-236.31c7.721-13.256 24.727-17.743 37.984-10.022a27.8 27.8 0 0 1 10.022 10.022l137.638 236.31 267.276 57.878c14.994 3.246 24.517 18.033 21.27 33.027a27.8 27.8 0 0 1-6.435 12.63L761.54 640.534l27.547 272.08c1.546 15.263-9.575 28.89-24.838 30.435-4.78.484-9.603-.28-14-2.218z"
      />
    </svg>
  )
}
export function StarO(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={StarO.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default StarO
