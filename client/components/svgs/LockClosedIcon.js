import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = () => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M18.19 8H17V6.82A4.82 4.82 0 0 0 12.18 2h-.36A4.82 4.82 0 0 0 7 6.82V8H5.81A1.81 1.81 0 0 0 4 9.81v9.38A1.81 1.81 0 0 0 5.81 21h12.38A1.81 1.81 0 0 0 20 19.19V9.81A1.81 1.81 0 0 0 18.19 8ZM12 11a2 2 0 0 1 2 2 2 2 0 0 1-1 1.72V17a1 1 0 0 1-2 0v-2.28A2 2 0 0 1 10 13a2 2 0 0 1 2-2ZM9 6.82A2.83 2.83 0 0 1 11.82 4h.36A2.83 2.83 0 0 1 15 6.82V8H9V6.82Z"
      fill="#1B2F4D"
    />
  </Svg>
)

export default SvgComponent
