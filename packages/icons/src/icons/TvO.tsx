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
        d="M166.667 111.111h666.666c30.723 0 55.556 24.833 55.556 55.556v500c0 30.722-24.833 55.555-55.556 55.555H527.778v111.111h166.666c15.342 0 27.778 12.437 27.778 27.778s-12.436 27.778-27.778 27.778H305.556c-15.342 0-27.778-12.437-27.778-27.778s12.436-27.778 27.778-27.778h166.666v-111.11H166.667c-30.723 0-55.556-24.834-55.556-55.556v-500c0-30.723 24.833-55.556 55.556-55.556m0 555.556h666.666v-500H166.667zm450.31-242.323-187.888 93.944c-13.721 6.86-30.407 1.299-37.268-12.423a27.8 27.8 0 0 1-2.932-12.422V305.556c0-15.342 12.436-27.778 27.778-27.778 4.312 0 8.565 1.004 12.422 2.932l187.887 93.944c13.722 6.86 19.284 23.546 12.423 37.268a27.78 27.78 0 0 1-12.423 12.422"
      />
    </svg>
  )
}
function SvgTvO(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={SvgTvO.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default SvgTvO
