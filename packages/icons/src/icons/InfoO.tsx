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
      <g fillRule="evenodd" transform="translate(55 55)">
        <path
          fillRule="nonzero"
          d="M445 833.889c214.777 0 388.889-174.112 388.889-388.889S659.777 56.111 445 56.111 56.111 230.223 56.111 445 230.223 833.889 445 833.889m0 55.555C199.54 889.444.556 690.46.556 445S199.54.556 445 .556 889.444 199.54 889.444 445 690.46 889.444 445 889.444"
        />
        <path d="M472.778 639.444h27.778c15.34 0 27.777 12.437 27.777 27.778S515.897 695 500.556 695H389.444c-15.34 0-27.777-12.437-27.777-27.778s12.436-27.778 27.777-27.778h27.778v-250h-13.889c-15.34 0-27.777-12.436-27.777-27.777s12.436-27.778 27.777-27.778H445c15.341 0 27.778 12.436 27.778 27.778z" />
        <circle cx={445} cy={236.667} r={41.667} />
      </g>
    </svg>
  )
}
export function InfoO(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={InfoO.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default InfoO
