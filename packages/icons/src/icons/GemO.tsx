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
        d="M817.895 111.111c11.38 0 21.61 6.942 25.814 17.518L942.7 377.676a27.78 27.78 0 0 1-5.01 28.668L519.905 878.468c-10.167 11.489-27.722 12.56-39.21 2.394q-1.306-1.156-2.458-2.465L63.294 406.237a27.78 27.78 0 0 1-5.016-28.423l97.052-249.012a27.78 27.78 0 0 1 25.882-17.69zM627.191 416.666h-265.6l137.494 340.032zm227.18 0H686.558l-124.418 330.24zm-552.707 0H146.42L433.972 743.87zm60.282-250H200.2l-75.786 194.445h180.925zm194.6 0H419.808l-56.607 194.445H626.49zm242.499 0H615.587l69.942 194.445h190.803z"
      />
    </svg>
  )
}
function SvgGemO(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={SvgGemO.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default SvgGemO
