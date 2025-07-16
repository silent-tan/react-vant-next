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
        d="M888.889 166.667c30.722 0 55.555 24.833 55.555 55.555v555.556c0 30.722-24.833 55.555-55.555 55.555H111.11c-30.667 0-55.555-24.833-55.555-55.555V222.222c0-30.722 24.888-55.555 55.555-55.555Zm0 166.666H111.11v444.445H888.89zm0-111.11H111.11v55.555H888.89zM416.667 694.443h166.666c15.334 0 27.778-12.444 27.778-27.777s-12.444-27.778-27.778-27.778H444.444v-55.556h138.89c15.333 0 27.777-12.444 27.777-27.777s-12.444-27.778-27.778-27.778H444.444v-55.556h138.89c15.333 0 27.777-12.444 27.777-27.778s-12.444-27.777-27.778-27.777H416.667c-15.334 0-27.778 12.444-27.778 27.777v222.223c0 15.333 12.444 27.777 27.778 27.777"
      />
    </svg>
  )
}
function SvgEcardPay(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={SvgEcardPay.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default SvgEcardPay
