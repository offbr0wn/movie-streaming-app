import React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

export default function HomeIcon(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      {...props}
    >
      <Path
        stroke={props.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M25.5 26.53H14.275"
      />
      <Path
        stroke={props.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M26.667 35H13.333A8.333 8.333 0 0 1 5 26.667v-8a8.333 8.333 0 0 1 3.128-6.508l6.666-5.333a8.333 8.333 0 0 1 10.412 0l6.666 5.333A8.333 8.333 0 0 1 35 18.668v8A8.333 8.333 0 0 1 26.667 35Z"
        clipRule="evenodd"
      />
    </Svg>
  );
}
