import { Text } from "react-native";
import { Button } from "@rneui/themed";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export function ClearButton(props: { name: string }) {
  return (
    <Button
      ViewComponent={LinearGradient} // Don't forget this!
      linearGradientProps={{
        colors: ["rgba(255,255,255,0.2)", "transparent"],
        start: { x: 0, y: 0.5 },
        end: { x: 0.5, y: 2.5 },
      }}
      style={{ opacity: 1, width: 100, borderRadius: 15, overflow: "hidden" }}
      type="clear"
    >
      <Text className="text-white font-AlexBold text-[13px]">{props.name}</Text>
    </Button>
  );
}
