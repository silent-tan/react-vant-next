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
        d="M277.778 444.444v-111.11c0-122.73 99.492-222.223 222.222-222.223s222.222 99.492 222.222 222.222v111.111h69.445c23.012 0 41.666 18.655 41.666 41.667v361.111c0 23.012-18.654 41.667-41.666 41.667H208.333c-23.012 0-41.666-18.655-41.666-41.667v-361.11c0-23.013 18.654-41.668 41.666-41.668zm83.333 0H638.89v-111.11c0-76.707-62.183-138.89-138.889-138.89s-138.889 62.183-138.889 138.89z"
      />
    </svg>
  )
}
function SvgLock(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={SvgLock.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default SvgLock
