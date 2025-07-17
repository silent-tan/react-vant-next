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
        d="m630.638 416.666-131.53 474.682-140.614-474.682zm297.916 0-349.801 395.3 109.534-395.3zm-628.002 0L416.53 808.18 72.46 416.666zm77.575-305.555-72.788 250H64.789l97.312-249.681a.5.5 0 0 1 .466-.319zm163.57 0 85.482 250H363.202l72.788-250zm294.71 0a.5.5 0 0 1 .464.315l99.245 249.685H685.892l-85.482-250z"
      />
    </svg>
  )
}
export function Gem(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={Gem.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default Gem
