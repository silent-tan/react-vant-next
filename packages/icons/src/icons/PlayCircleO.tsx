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
        d="M667.75 521.737 462.214 686.164c-11.98 9.584-29.46 7.642-39.043-4.338a27.78 27.78 0 0 1-6.087-17.353V335.62c0-15.34 12.436-27.777 27.778-27.777a27.78 27.78 0 0 1 17.352 6.086L667.75 478.356c11.98 9.583 13.922 27.064 4.338 39.043a27.8 27.8 0 0 1-4.338 4.338M500 888.89c214.777 0 388.889-174.112 388.889-388.889S714.777 111.111 500 111.111 111.111 285.223 111.111 500 285.223 888.889 500 888.889m0 55.555C254.54 944.444 55.556 745.46 55.556 500S254.54 55.556 500 55.556 944.444 254.54 944.444 500 745.46 944.444 500 944.444"
      />
    </svg>
  )
}
export function PlayCircleO(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={PlayCircleO.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default PlayCircleO
