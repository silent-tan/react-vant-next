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
        d="M500 111.111c245.46 0 444.444 174.112 444.444 388.889S745.46 888.889 500 888.889c-90.56 0-174.793-23.7-245.042-64.397l-142.484 46.015a27.78 27.78 0 0 1-19.069-.73c-14.195-5.816-20.988-22.04-15.172-36.235l49.555-120.943C82.112 651.497 55.556 578.462 55.556 500c0-214.777 198.984-388.889 444.444-388.889m0 333.333c-30.682 0-55.556 24.874-55.556 55.556s24.874 55.556 55.556 55.556 55.556-24.874 55.556-55.556-24.874-55.556-55.556-55.556m-222.222 0c-30.683 0-55.556 24.874-55.556 55.556s24.873 55.556 55.556 55.556 55.555-24.874 55.555-55.556-24.873-55.556-55.555-55.556m444.444 0c-30.682 0-55.555 24.874-55.555 55.556s24.873 55.556 55.555 55.556c30.683 0 55.556-24.874 55.556-55.556s-24.873-55.556-55.556-55.556"
      />
    </svg>
  )
}
function SvgChat(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={SvgChat.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default SvgChat
