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
        d="M333.223 888.78V388.913q25.298-9.147 36.57-15.6 31.502-18.036 53.438-49.122c22.191-31.447 26.324-45.937 50.41-133.953q2.374-8.676 9.55-23.706 33.207-55.66 94.544-55.532 59.256 0 94.8 55.532 8.86 15.33 12.542 34.245 3.684 18.915 0 43.44l-43.731 152.608q-1.161 3.632 0 5.309 1.25 1.806 3.652 1.806h132.855l-.147.309h17.324c51.562 0 93.75 40.625 93.75 92.187 0 7.813-1.563 15.625-3.125 23.438l-46.757 298.593c-9.375 40.625-46.875 70.313-90.625 70.313zm-55.556 0H166.556c-30.683 0-55.556-24.873-55.556-55.556v-388.89c0-30.682 24.873-55.555 55.556-55.555h111.111z"
      />
    </svg>
  )
}
function SvgGoodJob(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={SvgGoodJob.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default SvgGoodJob
