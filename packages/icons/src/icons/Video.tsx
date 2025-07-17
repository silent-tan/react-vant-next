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
        d="M888.889 277.778H111.11V166.667c0-30.683 24.873-55.556 55.556-55.556h666.666c30.683 0 55.556 24.873 55.556 55.556zm0 55.555v500c0 30.683-24.873 55.556-55.556 55.556H166.667c-30.683 0-55.556-24.873-55.556-55.556v-500zM277.778 166.667l55.9 111.11h55.555l-55.9-111.11zm166.666 0 55.9 111.11H555.9L500 166.668zm166.667 0 55.9 111.11h55.555l-55.9-111.11zm5.865 441.512a27.78 27.78 0 0 0 12.423-12.423c6.86-13.722 1.299-30.407-12.423-37.268L429.09 464.545a27.8 27.8 0 0 0-12.422-2.933c-15.342 0-27.778 12.437-27.778 27.778v187.887c0 4.312 1.004 8.565 2.932 12.422 6.861 13.722 23.547 19.284 37.268 12.423z"
      />
    </svg>
  )
}
export function Video(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={Video.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default Video
