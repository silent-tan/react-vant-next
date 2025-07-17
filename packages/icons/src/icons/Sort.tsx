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
        d="M650.285 872.508c-33.476 33.477-89.683 12.254-94.507-32.97l-.332-6.314V166.556C555.446 135.873 580.319 111 611 111c28.491 0 51.973 21.447 55.182 49.077l.374 6.479v532.557L793.94 571.718c20.027-20.027 51.54-21.568 73.334-4.622l5.234 4.622c20.027 20.027 21.568 51.54 4.622 73.333l-4.622 5.234zm-300.79-745.125c33.476-33.476 89.683-12.253 94.507 32.971l.332 6.313v666.669c0 30.682-24.873 55.555-55.555 55.555-28.491 0-51.973-21.446-55.182-49.076l-.374-6.48V300.78L205.84 428.174c-20.027 20.027-51.54 21.567-73.334 4.621l-5.234-4.621c-20.027-20.027-21.568-51.54-4.622-73.334l4.622-5.234z"
      />
    </svg>
  )
}
export function Sort(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={Sort.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default Sort
