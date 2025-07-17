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
    />
  )
}
export function Empty(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={Empty.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default Empty
