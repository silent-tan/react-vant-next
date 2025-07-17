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
        d="M389.422 360.863h222.222c15.342 0 27.778 12.437 27.778 27.778v222.222c0 15.342-12.436 27.778-27.778 27.778H389.422c-15.341 0-27.778-12.436-27.778-27.778V388.641c0-15.341 12.437-27.778 27.778-27.778M500 888.89c214.777 0 388.889-174.112 388.889-388.889S714.777 111.111 500 111.111 111.111 285.223 111.111 500 285.223 888.889 500 888.889m0 55.555C254.54 944.444 55.556 745.46 55.556 500S254.54 55.556 500 55.556 944.444 254.54 944.444 500 745.46 944.444 500 944.444"
      />
    </svg>
  )
}
export function StopCircleO(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={StopCircleO.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default StopCircleO
