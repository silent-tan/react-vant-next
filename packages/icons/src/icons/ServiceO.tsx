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
      <g fillRule="evenodd">
        <path d="M888.889 444.444v277.778c0 30.683-24.873 55.556-55.556 55.556h-55.555c-30.683 0-55.556-24.873-55.556-55.556V500c0-30.682 24.873-55.556 55.556-55.556zM833.333 500h-55.555v222.222h55.555zM112.111 777.778a1 1 0 0 1-1-1V444.444h111.111c30.683 0 55.556 24.874 55.556 55.556v222.222c0 30.683-24.873 55.556-55.556 55.556zM222.222 500h-55.555v222.222h55.555zM500 55.556c214.777 0 388.889 174.111 388.889 388.888h-55.556c0-184.094-149.238-333.333-333.333-333.333l-5.512.045c-181.553 2.943-327.821 151.035-327.821 333.288H111.11c0-214.777 174.112-388.888 388.889-388.888" />
        <path d="M833.333 452.274c0-15.341 12.437-27.777 27.778-27.777 15.342 0 27.778 12.436 27.778 27.778v316.407c-.822 113.295-54.114 176.047-153.867 176.047H528.01c-15.34 0-27.777-12.436-27.777-27.777s12.436-27.778 27.777-27.778h207.013c66.931 0 97.698-36.229 98.31-120.693z" />
      </g>
    </svg>
  )
}
export function ServiceO(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={ServiceO.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default ServiceO
