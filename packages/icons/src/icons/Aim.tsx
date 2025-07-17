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
        d="M500 55.556c245.444 0 444.444 199 444.444 444.444S745.444 944.444 500 944.444 55.556 745.444 55.556 500 254.556 55.556 500 55.556m27.778 57V250c0 15.333-12.5 27.778-27.778 27.778S472.222 265.333 472.222 250V112.556C280 126.222 126.222 279.944 112.5 472.222H250c15.278 0 27.778 12.5 27.778 27.778 0 15.333-12.5 27.778-27.778 27.778H112.5C126.222 720.056 280 873.833 472.222 887.5V750c0-15.278 12.5-27.778 27.778-27.778s27.778 12.5 27.778 27.778v137.5C720 873.833 873.778 720.056 887.5 527.778H750c-15.278 0-27.778-12.445-27.778-27.778 0-15.278 12.5-27.778 27.778-27.778h137.5c-13.722-192.278-167.5-346-359.722-359.666M500 444.466c30.667 0 55.556 24.834 55.556 55.556s-24.89 55.556-55.556 55.556c-30.667 0-55.556-24.834-55.556-55.556s24.89-55.555 55.556-55.555"
      />
    </svg>
  )
}
export function Aim(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={Aim.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default Aim
