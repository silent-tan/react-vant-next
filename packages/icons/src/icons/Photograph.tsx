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
        d="M618.416 111.111a55.56 55.56 0 0 1 46.225 24.739l57.581 86.372H888.89c30.682 0 55.555 24.873 55.555 55.556v555.555c0 30.683-24.873 55.556-55.555 55.556H111.11c-30.682 0-55.555-24.873-55.555-55.556V277.778c0-30.683 24.873-55.556 55.555-55.556h166.667l57.581-86.372a55.56 55.56 0 0 1 46.225-24.739zM500 333.333c-122.73 0-222.222 99.493-222.222 222.223S377.27 777.778 500 777.778s222.222-99.493 222.222-222.222S622.73 333.333 500 333.333m0 111.111c61.365 0 111.111 49.747 111.111 111.112S561.365 666.666 500 666.666s-111.111-49.745-111.111-111.11S438.635 444.444 500 444.444"
      />
    </svg>
  )
}
function SvgPhotograph(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={SvgPhotograph.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default SvgPhotograph
