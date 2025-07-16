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
        d="M472.25 498.767v388.889h-250c-30.722 0-55.556-24.834-55.556-55.556V498.767zm361.111 0V832.1c0 30.722-24.833 55.556-55.555 55.556h-250v-388.89zM290.722 128.384c33.5-33.723 101.167-16.723 157.167 39.277 26.944 26.945 44.611 56.611 52.167 83.89 7.5-27.279 25.166-56.945 52.166-83.945 56-56.056 123.722-72.834 157.167-39.278 31.778 31.889 17.778 94.111-31.278 148.222H833.39c30.667 0 55.555 24.834 55.555 55.556v55.555c0 30.723-24.888 55.556-55.555 55.556H527.833V276.55h-55.555v166.667H166.667c-30.667 0-55.556-24.833-55.556-55.556v-55.555c0-30.722 24.889-55.556 55.556-55.556h155.277c-49.11-54.166-63.055-116.333-31.222-148.166m379.39 39.222c-4.945-5-40.556 1.278-78.612 39.278-28.611 28.61-39.111 55.833-40.556 69.666h38.223c12.555-6.333 26.61-15.278 41.666-30.333 38-38.056 44.167-73.722 39.278-78.611"
      />
    </svg>
  )
}
function SvgPointGift(props: Omit<IconBaseProps, "name">) {
  return (
    <IconBase name={SvgPointGift.name} {...props}>
      <SvgIcon />
    </IconBase>
  )
}
export default SvgPointGift
