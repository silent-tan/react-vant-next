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
      <g fillRule="evenodd">
        <path
          fillRule="nonzero"
          d="M500 888.889c214.777 0 388.889-174.112 388.889-388.889S714.777 111.111 500 111.111 111.111 285.223 111.111 500 285.223 888.889 500 888.889m0 55.555C254.54 944.444 55.556 745.46 55.556 500S254.54 55.556 500 55.556 944.444 254.54 944.444 500 745.46 944.444 500 944.444"
        />
        <path d="M463.896 257.624c-.128-5.745 3.974-10.402 9.995-10.402h57.774c5.648 0 10.13 4.368 9.994 10.402l-8.227 368.085c-.128 5.745-5.007 10.402-10.28 10.402h-40.749c-5.549 0-10.145-4.367-10.28-10.402zm38.882 495.154c-21.478 0-38.89-17.411-38.89-38.89 0-21.477 17.412-38.888 38.89-38.888s38.889 17.411 38.889 38.889-17.411 38.889-38.89 38.889" />
      </g>
    </svg>
  )
}
function SvgWarningO(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={SvgWarningO.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default SvgWarningO
