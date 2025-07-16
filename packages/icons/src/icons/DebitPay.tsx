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
        d="M888.889 166.667c30.667 0 55.555 24.833 55.555 55.555v555.556c0 30.722-24.888 55.555-55.555 55.555H111.11c-30.667 0-55.555-24.833-55.555-55.555V222.222c0-30.722 24.888-55.555 55.555-55.555Zm0 166.666H111.11v444.445H888.89zm0-111.11H111.11v55.555H888.89zM468.572 697.805c10.834 10.833 28.445 10.833 39.278 0l39.278-39.278c10.833-10.834 10.833-28.445 0-39.278s-28.445-10.833-39.278 0l-39.278 39.278c-10.833 10.833-10.833 28.444 0 39.278m150.39 0 39.277-39.278c10.833-10.834 10.833-28.445 0-39.278s-28.445-10.833-39.278 0l-39.278 39.278c-10.833 10.833-10.833 28.444 0 39.278s28.445 10.833 39.278 0m111.111 0 39.278-39.278c10.833-10.834 10.833-28.445 0-39.278s-28.444-10.833-39.278 0l-39.278 39.278c-10.833 10.833-10.833 28.444 0 39.278s28.445 10.833 39.278 0"
      />
    </svg>
  )
}
function SvgDebitPay(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={SvgDebitPay.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default SvgDebitPay
