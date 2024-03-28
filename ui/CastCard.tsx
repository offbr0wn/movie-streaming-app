import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import TouchableScale from "react-native-touchable-scale";

export default function CastCard({ index }: { index: number }) {
  return (
    <TouchableScale
      onPress={() => console.log("Pressed!", index)}
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
              uri: "https://www.themoviedb.org/t/p/w1280/lr3cYNDlJcpT1EWzFH42aSIvkab.jpg",
            }}
            className="w-[50px] h-[50px] rounded-full overflow-hidden  "
          />

          <Text className="text-white font-AlexBold text-[10px]  ">
            Robert Downey Jr.
          </Text>
        </View>
      </LinearGradient>
    </TouchableScale>
  );
}
