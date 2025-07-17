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
      <g fillRule="nonzero" transform="translate(55 55)">
        <path d="M445 833.889c214.777 0 388.889-174.112 388.889-388.889S659.777 56.111 445 56.111 56.111 230.223 56.111 445 230.223 833.889 445 833.889m0 55.555C199.54 889.444.556 690.46.556 445S199.54.556 445 .556 889.444 199.54 889.444 445 690.46 889.444 445 889.444" />
        <path d="M223.131 222.79c30.679 0 55.55 24.866 55.556 55.544h413.767c15.34 0 27.777 12.436 27.777 27.777 0 2.889-.45 5.76-1.335 8.51l-53.64 166.667a27.78 27.78 0 0 1-26.443 19.268H278.687v55.747h360.875c15.342 0 27.778 12.437 27.778 27.778s-12.436 27.778-27.778 27.778H278.687c-30.683 0-55.556-24.873-55.556-55.556v-55.748h-.353v-222.21h-27.425c-15.34 0-27.777-12.437-27.777-27.778s12.436-27.778 27.777-27.778zm431.202 111.099H278.687v111.11l339.885.001z" />
        <circle cx={278.333} cy={667.222} r={27.778} />
        <circle cx={611.667} cy={667.222} r={27.778} />
      </g>
    </svg>
  )
}
export function CartCircleO(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={CartCircleO.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default CartCircleO
