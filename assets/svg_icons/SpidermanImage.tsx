import * as React from "react";
import Svg, {
  SvgProps,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SpidermanImage = (props: SvgProps) => (
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
        d="M24 69.106c0-12.069 8.963-22.26 20.933-23.803l115-14.816C174.287 28.637 187 39.818 187 54.29V151c0 13.255-10.745 24-24 24H48c-13.255 0-24-10.745-24-24V69.106Z"
      />
    </G>
    <Path
      fill="url(#c)"
      d="M24 69.106c0-12.069 8.963-22.26 20.933-23.803l115-14.816C174.287 28.637 187 39.818 187 54.29V151c0 13.255-10.745 24-24 24H48c-13.255 0-24-10.745-24-24V69.106Z"
    />
    <Defs>
      <LinearGradient
        id="b"
        x1={105.5}
        x2={105.5}
        y1={27}
        y2={175}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#16CAF1" />
        <Stop offset={0.786} stopColor="#0143A7" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={105.5}
        x2={105.5}
        y1={27}
        y2={175}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#16CAF1" />
        <Stop offset={0.786} stopColor="#0143A7" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SpidermanImage;
