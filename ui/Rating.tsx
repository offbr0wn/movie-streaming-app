import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Rating() {
  const rating = 4; // Example rating
  const stars = Array(5).fill("star-outline");

  for (let i = 0; i < Math.floor(rating); i++) {
    stars[i] = "star";
  }

  if (rating % 1 !== 0) {
    stars[Math.floor(rating)] = "star-half";
  }

  return (
    <View className="flex-row items-center">
      {stars.map((type, index) => (
        <Ionicons key={index} name={type} size={15} color="tomato" />
      ))}
    </View>
  );
}
