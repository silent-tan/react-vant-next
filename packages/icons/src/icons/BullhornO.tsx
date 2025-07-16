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
        <path d="m777.778 151.288-318.58 182.045H222.222v333.334h236.976l318.58 182.045zm55.555 0v697.424c0 30.683-24.873 55.556-55.555 55.556a55.56 55.56 0 0 1-27.563-7.32l-305.77-174.726H222.221c-30.682 0-55.555-24.873-55.555-55.555V333.333c0-30.682 24.873-55.555 55.555-55.555h222.222l305.77-174.726c26.64-15.223 60.577-5.967 75.8 20.672a55.56 55.56 0 0 1 7.32 27.564" />
        <path d="M500 277.778v444.444h-44.445l31.155 155.772c6.017 30.086-13.495 59.354-43.582 65.372a55.6 55.6 0 0 1-10.895 1.078h-53.355c-26.482 0-49.283-18.692-54.477-44.66l-46.623-233.117h166.666v-388.89zM398.9 722.222h-53.355l33.333 166.667h53.355z" />
      </g>
    </svg>
  )
}
function SvgBullhornO(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={SvgBullhornO.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default SvgBullhornO
