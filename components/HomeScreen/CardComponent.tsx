import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";

interface CardIndex {
  index: number;
  currentIndex: number;
}
export default function CardComponent({ index, currentIndex }: CardIndex) {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const blurLogic = index === currentIndex ? 0 : 10;
  return (
    <TouchableOpacity className="items-center">
      <ImageBackground
        source={{
          uri: "https://www.themoviedb.org/t/p/w1280/i6yYcZ5sGHHM2l6dIgt2nZov7Hh.jpg",
        }}
        style={{
          width: width / 1.7,
          height: height / 2.7,
          borderRadius: 60,
          overflow: "hidden",
          shadowColor: "white",
          shadowOffset: { width: 1000, height: 200 },
          shadowOpacity: 1,
          shadowRadius: 10,
          elevation: 20,
        }}
        resizeMode="cover"
        blurRadius={blurLogic}
      >
        <BlurView
          intensity={100}
          style={{
            width: 80,
            height: 45,
            position: "absolute",
            paddingVertical: 2,
            left: 20,
            top: 30,
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          <View className="flex-row items-baseline  justify-center space-x-1 ">
            <Ionicons name="star" size={22} color="white" />
            <Text className="text-white text-[25px] font-AlexBold  ">7.2</Text>
          </View>
        </BlurView>
      </ImageBackground>
      {index === currentIndex && (
        <Text className="text-white text-[25px] font-AlexRegular tracking-[0.5px] ">
          {index}
        </Text>
      )}
    </TouchableOpacity>
  );
}
