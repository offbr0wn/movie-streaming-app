import { Text } from "react-native";
import { Button } from "@rneui/themed";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ClearButtonProps } from "../types/interface";

export function ClearButton({
  name,
  style,
  fontSize,
  fontFamily,

  ...props
}: ClearButtonProps) {
  return (
    <Button
      {...props}
      ViewComponent={LinearGradient} // Don't forget this!
      linearGradientProps={{
        colors: ["rgba(255,255,255,0.2)", "transparent"],
        start: { x: 0, y: 0.5 },
        end: { x: 1, y: 1.6 },
      }}
      style={{
        ...style,
        opacity: 1,
        width: 100,
       
        borderRadius: 10,
        overflow: "hidden",
        padding: 0,
      }}
      type="clear"
    >
      <Text className={`text-white text-[${fontSize}] font-${fontFamily}`}>
        {name}
      </Text>
    </Button>
  );
}
