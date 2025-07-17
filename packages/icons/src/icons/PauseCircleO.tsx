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
        d="M409.722 333.333c19.177 0 34.722 15.546 34.722 34.723v263.888c0 19.177-15.545 34.723-34.722 34.723-19.176 0-34.722-15.546-34.722-34.723V368.056c0-19.177 15.546-34.723 34.722-34.723m180.556 0c19.176 0 34.722 15.546 34.722 34.723v263.888c0 19.177-15.546 34.723-34.722 34.723s-34.722-15.546-34.722-34.723V368.056c0-19.177 15.545-34.723 34.722-34.723M500 888.89c214.777 0 388.889-174.112 388.889-388.889S714.777 111.111 500 111.111 111.111 285.223 111.111 500 285.223 888.889 500 888.889m0 55.555C254.54 944.444 55.556 745.46 55.556 500S254.54 55.556 500 55.556 944.444 254.54 944.444 500 745.46 944.444 500 944.444"
      />
    </svg>
  )
}
export function PauseCircleO(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={PauseCircleO.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default PauseCircleO
