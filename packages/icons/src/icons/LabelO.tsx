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
        d="M777.778 854.554V111.11H222.222v743.443L500 715.664zM222.222 55.556h555.556c30.682 0 55.555 24.873 55.555 55.555v743.443c0 30.682-24.873 55.555-55.555 55.555a55.56 55.56 0 0 1-24.845-5.865L500 777.778 247.067 904.244c-27.443 13.722-60.814 2.598-74.535-24.845a55.56 55.56 0 0 1-5.865-24.845V111.11c0-30.682 24.873-55.555 55.555-55.555m138.89 222.222h277.777c15.341 0 27.778 12.436 27.778 27.778 0 15.34-12.437 27.777-27.778 27.777H361.11c-15.341 0-27.778-12.436-27.778-27.777s12.437-27.778 27.778-27.778m0 166.666h277.777c15.341 0 27.778 12.437 27.778 27.778S654.23 500 638.889 500H361.11c-15.341 0-27.778-12.437-27.778-27.778s12.437-27.778 27.778-27.778"
      />
    </svg>
  )
}
export function LabelO(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={LabelO.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default LabelO
