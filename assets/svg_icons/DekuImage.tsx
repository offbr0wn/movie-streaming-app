import * as React from "react"
import Svg, {
  SvgProps,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const DekuImage = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={200}
    height={200}
    fill="none"
    {...props}
  >
    <G filter="url(#a)" opacity={0.5}>
      <Path
        fill="url(#b)"
        d="M193 69.106c0-12.069-8.963-22.26-20.933-23.803l-115-14.816C42.713 28.637 30 39.818 30 54.29V151c0 13.255 10.745 24 24 24h115c13.255 0 24-10.745 24-24V69.106Z"
      />
    </G>
    <Path
      fill="url(#c)"
      d="M193 69.106c0-12.069-8.963-22.26-20.933-23.803l-115-14.816C42.713 28.637 30 39.818 30 54.29V151c0 13.255 10.745 24 24 24h115c13.255 0 24-10.745 24-24V69.106Z"
    />
    <Defs>
      <LinearGradient
        id="b"
        x1={112}
        x2={111.5}
        y1={67}
        y2={175}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF2E2E" />
        <Stop offset={1} stopColor="#E08939" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={112}
        x2={111.5}
        y1={67}
        y2={175}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF2E2E" />
        <Stop offset={1} stopColor="#E08939" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default DekuImage
