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
        d="M159.722 222.222h680.556c26.847 0 48.61 21.764 48.61 48.611 0 26.848-21.763 48.611-48.61 48.611H159.722c-26.847 0-48.61-21.763-48.61-48.61 0-26.848 21.763-48.612 48.61-48.612m0 243.056h680.556c26.847 0 48.61 21.764 48.61 48.61 0 26.848-21.763 48.612-48.61 48.612H159.722c-26.847 0-48.61-21.764-48.61-48.611s21.763-48.611 48.61-48.611m0 243.055h680.556c26.847 0 48.61 21.764 48.61 48.611 0 26.848-21.763 48.612-48.61 48.612H159.722c-26.847 0-48.61-21.764-48.61-48.612 0-26.847 21.763-48.61 48.61-48.61"
      />
    </svg>
  )
}
export function WapNav(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={WapNav.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default WapNav
