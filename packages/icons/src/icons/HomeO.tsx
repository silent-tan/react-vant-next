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
      <g fillRule="nonzero">
        <path d="M111.111 444.444c-9.984-11.647-8.635-29.184 3.013-39.168l349.72-299.76c20.806-17.833 51.506-17.833 72.311 0l349.721 299.76c11.648 9.984 12.997 27.52 3.013 39.168s-27.52 12.997-39.168 3.013L500 147.697l-349.72 299.76c-11.649 9.984-29.185 8.635-39.169-3.013" />
        <path d="M222.222 637.132v140.646h555.556V637.132L500 405.65zm-55.555 0a55.56 55.56 0 0 1 19.99-42.679l277.777-231.481c20.603-17.17 50.53-17.17 71.132 0l277.778 231.481a55.56 55.56 0 0 1 19.99 42.679v140.646c0 30.682-24.874 55.555-55.556 55.555H222.222c-30.682 0-55.555-24.873-55.555-55.555z" />
      </g>
    </svg>
  )
}
export function HomeO(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={HomeO.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default HomeO
