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
        d="m582.531 69.253.858.007c18.874.314 37.118 10.242 47.243 27.78l40.199 69.626h106.947c30.682 0 55.555 24.874 55.555 55.556v55.556h55.556c30.682 0 55.555 24.873 55.555 55.555v444.445c0 30.682-24.873 55.555-55.555 55.555H111.11c-30.682 0-55.555-24.873-55.555-55.555l-.001-459.47-.016.001v-69.444h.026l.002-.243c.724-44.644 36.554-80.754 81.088-81.926l.001-.047h262.297L554.74 76.705c8.77-5.062 18.344-7.463 27.79-7.452m306.358 264.08H111.11v444.445H888.89zm-586.16-111.13h-163.84v.02c-15.341 0-27.778 12.436-27.778 27.777s12.437 27.778 27.778 27.778l67.584-.001zm279.79-97.385L317.585 277.777H670.83zm152.462 152.959h42.797v-55.555h-74.872z"
      />
    </svg>
  )
}
function SvgPaid(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={SvgPaid.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default SvgPaid
