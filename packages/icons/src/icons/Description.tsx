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
        d="M611.111 865.889V722.222h143.667zm-388.889 23V111.11h555.556v555.556H611.11c-30.722 0-55.555 24.833-55.555 55.555V888.89zM777.778 55.556H222.222c-30.722 0-55.555 24.833-55.555 55.555V888.89c0 30.722 24.833 55.555 55.555 55.555h365.89a55.5 55.5 0 0 0 39.277-16.277l39.278-39.278 111.11-111.111 39.279-39.278c10.444-10.389 16.277-24.556 16.277-39.278v-588.11c0-30.723-24.833-55.556-55.555-55.556m-138.89 166.672H361.112c-15.333 0-27.778 12.444-27.778 27.778s12.445 27.777 27.778 27.777H638.89c15.333 0 27.778-12.444 27.778-27.777s-12.445-27.778-27.778-27.778m0 111.11H361.11c-15.333 0-27.778 12.445-27.778 27.779s12.445 27.777 27.778 27.777H638.89c15.333 0 27.778-12.444 27.778-27.777s-12.445-27.778-27.778-27.778M527.778 444.45H361.11c-15.333 0-27.778 12.444-27.778 27.778s12.445 27.778 27.778 27.778h166.667c15.333 0 27.778-12.445 27.778-27.778 0-15.334-12.445-27.778-27.778-27.778"
      />
    </svg>
  )
}
function SvgDescription(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={SvgDescription.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default SvgDescription
