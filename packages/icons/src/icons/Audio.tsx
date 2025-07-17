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
        d="M111.111 500c0-214.777 174.112-388.889 388.889-388.889S888.889 285.223 888.889 500v277.778c0 30.682-24.873 55.555-55.556 55.555h-55.555c-30.683 0-55.556-24.873-55.556-55.555V555.556c0-30.683 24.873-55.556 55.556-55.556h55.555c0-184.095-149.238-333.333-333.333-333.333S166.667 315.905 166.667 500h55.555c30.683 0 55.556 24.873 55.556 55.556v222.222c0 30.682-24.873 55.555-55.556 55.555h-55.555c-30.683 0-55.556-24.873-55.556-55.555z"
      />
    </svg>
  )
}
export function Audio(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={Audio.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default Audio
