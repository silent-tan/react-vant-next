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
        d="M574.975 74.022 741.64 185.133c16.493 10.995 16.493 35.23 0 46.225L574.975 342.47c-18.46 12.307-43.186-.926-43.186-23.112V218.86c-142.994-13.088-282.443 70.705-333.864 211.984C136.71 599.032 223.428 785 391.615 846.215s354.155-25.503 415.37-193.69a326.7 326.7 0 0 0 14.287-52.363q.283-1.535.636-3.04a32.5 32.5 0 0 1 1.763-7.498c6.122-16.82 24.718-25.491 41.537-19.37 16.819 6.122 25.49 24.719 19.37 41.537-3.458 21.173-9.134 42.15-16.687 62.902-73.458 201.824-296.62 305.886-498.444 232.428S63.56 610.5 137.019 408.677c61.002-167.602 225.242-267.785 394.77-254.873v-56.67c0-22.185 24.726-35.419 43.186-23.112"
      />
    </svg>
  )
}
function SvgReplay(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={SvgReplay.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default SvgReplay
