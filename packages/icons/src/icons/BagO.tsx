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
        d="M258.088 333.333 223.366 888.89H771.76l-34.722-555.556zm-16.672-55.555H753.71c19.966 0 36.49 15.524 37.735 35.45l36.941 591.05c1.303 20.84-14.536 38.79-35.376 40.093q-1.179.073-2.359.073H204.475c-20.88 0-37.808-16.927-37.808-37.808q0-1.18.073-2.359l36.94-591.049c1.246-19.926 17.77-35.45 37.736-35.45m145.036 0h-55.555c0-92.048 73.286-166.667 163.69-166.667s163.69 74.62 163.69 166.667h-55.555c0-61.587-48.64-111.111-108.135-111.111s-108.135 49.524-108.135 111.11"
      />
    </svg>
  )
}
function SvgBagO(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={SvgBagO.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default SvgBagO
