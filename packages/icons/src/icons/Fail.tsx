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
        d="M444.455 125.97c-.183-8.206 5.676-14.859 14.278-14.859h82.534c8.069 0 14.47 6.24 14.278 14.86l-11.753 525.836c-.183 8.207-7.153 14.86-14.685 14.86h-58.214c-7.927 0-14.492-6.24-14.685-14.86zM500 833.334c-30.682 0-55.556-24.873-55.556-55.555 0-30.683 24.874-55.556 55.556-55.556s55.556 24.873 55.556 55.556-24.874 55.555-55.556 55.555"
      />
    </svg>
  )
}
export function Fail(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={Fail.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default Fail
