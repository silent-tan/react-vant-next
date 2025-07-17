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
        d="M888.888 722.222v46.46c-.82 113.295-54.113 176.047-153.866 176.047H528.01c-15.34 0-27.777-12.436-27.777-27.777s12.436-27.778 27.777-27.778h207.013c64.254 0 95.179-33.388 98.092-110.788l.02-.608h.2c30.375 0 55.057-24.378 55.547-54.637zm-55.555-277.778c0-184.094-149.238-333.333-333.333-333.333S166.667 260.35 166.667 444.444h55.555c30.683 0 55.556 24.874 55.556 55.556v222.222c0 30.683-24.873 55.556-55.556 55.556h-55.555c-30.683 0-55.556-24.873-55.556-55.556V444.444c0-214.777 174.112-388.888 388.889-388.888s388.889 174.111 388.889 388.888v222.222l-.004-.458c-.243-14.977-12.338-27.073-27.314-27.315l-.46-.004c-15.34 0-27.778 12.436-27.778 27.777v101.815a332 332 0 0 1-.137 7.472l-.063 1.825h-55.355c-30.683 0-55.556-24.873-55.556-55.556V500c0-30.682 24.873-55.556 55.556-55.556z"
      />
    </svg>
  )
}
export function Service(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={Service.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default Service
