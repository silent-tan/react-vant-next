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
        d="M500 444.444c92.047 0 166.667-74.619 166.667-166.666 0-92.048-74.62-166.667-166.667-166.667s-166.667 74.62-166.667 166.667S407.953 444.444 500 444.444M500 500c-122.73 0-222.222-99.492-222.222-222.222S377.27 55.556 500 55.556s222.222 99.492 222.222 222.222S622.73 500 500 500M345.911 611.111 166.667 696.66v192.229h666.666v-192.23L654.09 611.112h-19.966L500 745.234 365.877 611.111zM500 666.667l111.111-111.111h42.978c8.28 0 16.456 1.85 23.93 5.417l179.244 85.549a55.56 55.56 0 0 1 31.626 50.138v192.229c0 30.682-24.873 55.555-55.556 55.555H166.667c-30.683 0-55.556-24.873-55.556-55.555v-192.23a55.56 55.56 0 0 1 31.626-50.137l179.245-85.549a55.56 55.56 0 0 1 23.93-5.417h42.977z"
      />
    </svg>
  )
}
export function UserO(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={UserO.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default UserO
