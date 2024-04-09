import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import TouchableScale from "react-native-touchable-scale";
import { ImageApiUrl } from "../utils/ImageApiUrl";
import { Cast } from "../types/interface";

export default function CastCard({
  item,
  index,
}: {
  item: Cast[];
  index: number;
}) {
  return (
    <TouchableScale
      onPress={() => console.log("Pressed!", item)}
      friction={90} //
      tension={200} // These props are passed to the parent component (here TouchableScale)
      activeScale={0.9}
    >
      <LinearGradient
        colors={["grey", "transparent", "black"]}
        start={{ x: 0.2, y: 4 }}
        end={{ x: 1.9, y: 0 }}
        style={{
          borderRadius: 100,
          shadowColor: "white",
          // shadowOffset: { width: 100, height: 200 },
          // shadowOpacity: 0.5,
          // shadowRadius: 10,
          elevation: 8,
          opacity: 0.8,
        }}
      >
        <View className="flex-row items-center space-x-1    pr-[15px]  ">
          <Image
            source={{
              uri: ImageApiUrl(item.profile_path),
            }}
            className="w-[50px] h-[50px] rounded-full overflow-hidden  "
          />

          <Text className="text-white font-AlexBold text-[10px]  ">
            {item.name}
          </Text>
        </View>
      </LinearGradient>
    </TouchableScale>
  );
}
