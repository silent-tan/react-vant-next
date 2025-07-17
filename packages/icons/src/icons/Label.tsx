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
        d="M638.633 333.333H360.856c-15.334 0-27.778-12.444-27.778-27.777s12.444-27.778 27.778-27.778h277.777c15.334 0 27.778 12.444 27.778 27.778s-12.444 27.777-27.778 27.777m0 166.667H360.856c-15.334 0-27.778-12.444-27.778-27.778s12.444-27.778 27.778-27.778h277.777c15.334 0 27.778 12.445 27.778 27.778 0 15.334-12.444 27.778-27.778 27.778m138.89-444.444H221.966c-30.723 0-55.556 24.833-55.556 55.555v805.5c0 20.667 21.778 34.111 40.222 24.833l268.278-134.11c15.611-7.778 34.056-7.778 49.667 0l268.278 134.11c18.444 9.278 40.222-4.166 40.222-24.833v-805.5c0-30.722-24.834-55.555-55.556-55.555"
      />
    </svg>
  )
}
export function Label(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={Label.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default Label
