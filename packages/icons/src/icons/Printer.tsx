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
        d="M833.333 777.778V611.11H166.667v166.667H111.11c-30.682 0-55.555-24.873-55.555-55.556V388.89c0-30.683 24.873-55.556 55.555-55.556H888.89c30.682 0 55.555 24.873 55.555 55.556v333.333c0 30.683-24.873 55.556-55.555 55.556zM222.223 111.11h555.555c30.682 0 55.555 24.873 55.555 55.556v111.11H166.667v-111.11c0-30.683 24.873-55.556 55.555-55.556M819.443 500c23.012 0 41.667-18.655 41.667-41.667s-18.655-41.666-41.667-41.666c-23.011 0-41.666 18.654-41.666 41.666S796.433 500 819.444 500M222.222 666.667h555.556v166.666c0 30.683-24.873 55.556-55.556 55.556H277.778c-30.683 0-55.556-24.873-55.556-55.556z"
      />
    </svg>
  )
}
export function Printer(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={Printer.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default Printer
