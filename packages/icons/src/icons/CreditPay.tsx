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
        d="M888.889 166.667c30.667 0 55.555 24.889 55.555 55.555v555.556c0 30.722-24.888 55.555-55.555 55.555H111.11c-30.667 0-55.555-24.833-55.555-55.555V222.222c0-30.666 24.888-55.555 55.555-55.555Zm0 166.666H111.11v444.445H888.89zm0-111.11H111.11v55.555H888.89zM583.044 667.088h166.667c15.333 0 27.778-12.445 27.778-27.778s-12.445-27.778-27.778-27.778H583.044c-15.333 0-27.777 12.445-27.777 27.778s12.444 27.778 27.777 27.778"
      />
    </svg>
  )
}
export function CreditPay(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={CreditPay.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default CreditPay
