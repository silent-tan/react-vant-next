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
        d="M888.889 166.667c30.667 0 55.555 24.889 55.555 55.555v555.556c0 30.666-24.888 55.555-55.555 55.555H111.11c-30.667 0-55.555-24.889-55.555-55.555V222.222c0-30.666 24.888-55.555 55.555-55.555Zm0 55.555H111.11v555.556H888.89zM333.044 537.04c23 0 41.667-18.667 41.667-41.667s-18.667-41.666-41.667-41.666-41.666 18.666-41.666 41.666 18.666 41.667 41.666 41.667m166.667 0c23 0 41.667-18.667 41.667-41.667s-18.667-41.666-41.667-41.666-41.667 18.666-41.667 41.666 18.667 41.667 41.667 41.667m166.667 0c23 0 41.666-18.667 41.666-41.667s-18.666-41.666-41.666-41.666-41.667 18.666-41.667 41.666 18.667 41.667 41.667 41.667"
      />
    </svg>
  )
}
export function OtherPay(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={OtherPay.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default OtherPay
