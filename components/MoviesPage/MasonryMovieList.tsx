import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

export default function MasonryMovieList({ item, index }) {
  const navigation = useNavigation();

  const even = index % 2 === 0;
  const cardHard = index % 3 === 0 ? 180 : 230;

  return (
    <TouchableOpacity
     onPress={()=> console.log( navigation.navigate('AboutMovieScreen', { itemId: item.id }))}
    >
      <Animated.View
        entering={FadeInDown.delay(index < 6 ? index * 80 : 0)}
        className={`pl-${!even ? 2 : 0}  pr-${even ? 2 : 0} pb-[20px] `}
      >
        <Image
          source={{ uri: item.image }}
          resizeMode="stretch"
          style={{
            width: "auto",
            height: cardHard,
            opacity: 0.9,
            borderRadius: 20,
          }}
        />

        <Text className="text-white text-[15px] font-AlexBold py-[12px] text-left pl-2 ">
          {item.title}&nbsp;
          <Text className=" font-AlexRegular">(2020)</Text>
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );
}
