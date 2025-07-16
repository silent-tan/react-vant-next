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
        stroke="#323233"
        d="M500 56.056c91.91 0 175.12 36.431 235.353 95.335 60.228 58.9 97.48 140.268 97.48 230.146 0 164.16-97.82 346.382-293.371 546.692q-.491.504-.998.996c-10.895 10.603-25.056 15.786-39.144 15.595-14.089-.192-28.104-5.758-38.707-16.653-195.6-200.987-293.446-383.189-293.446-546.63 0-89.878 37.252-171.247 97.48-230.146C324.88 92.487 408.09 56.056 500 56.056Zm0 221.222c-30.82 0-58.723 12.492-78.921 32.69s-32.69 48.1-32.69 78.92c0 30.821 12.492 58.724 32.69 78.922s48.1 32.69 78.921 32.69c30.82 0 58.723-12.492 78.921-32.69s32.69-48.1 32.69-78.921c0-30.82-12.492-58.723-32.69-78.921s-48.1-32.69-78.921-32.69Z"
      />
    </svg>
  )
}
function SvgLocation(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={SvgLocation.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default SvgLocation
