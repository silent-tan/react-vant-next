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
        d="M500 55.556c245.46 0 444.444 198.984 444.444 444.444S745.46 944.444 500 944.444 55.556 745.46 55.556 500 254.54 55.556 500 55.556m222.61 475.907c-15.497-5.477-32.5 2.645-37.978 18.143-27.095 76.658-99.805 128.965-182.452 128.965-82.648 0-155.358-52.307-182.453-128.965-5.477-15.498-22.48-23.62-37.978-18.143s-23.62 22.481-18.143 37.979c35.438 100.264 130.503 168.653 238.574 168.653 108.07 0 203.135-68.39 238.573-168.653 5.478-15.498-2.645-32.501-18.142-37.979M347.003 345.238c-26.3 0-47.62 21.32-47.62 47.62 0 26.298 21.32 47.618 47.62 47.618s47.619-21.32 47.619-47.619c0-26.3-21.32-47.619-47.62-47.619m308.642 0c-26.3 0-47.62 21.32-47.62 47.62 0 26.298 21.32 47.618 47.62 47.618s47.619-21.32 47.619-47.619c0-26.3-21.32-47.619-47.62-47.619"
      />
    </svg>
  )
}
export function Smile(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={Smile.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default Smile
