import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { ImageApiUrl } from "../../utils/ImageApiUrl";
import { MasonryMovieListProp } from "../../types/interface";

export const MasonryMovieList = ({
  item,
  index,
}: {
  item: MasonryMovieListProp;
  index: number;
}) => {
  const navigation = useNavigation();

  const even = index % 2 === 0;
  const cardHard = index % 3 === 0 ? 180 : 250;

  return (
    <Animated.View
      entering={FadeInDown.delay(index < 6 ? index * 40 : 0)}
      className={`pl-${!even ? 2 : 0}  pr-${even ? 2 : 0} pb-5 `}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("AboutMovieScreen", { itemId: item.id });
        }}
      >
        <Image
          source={{ uri: ImageApiUrl(item?.poster_path) }}
          resizeMode="stretch"
          style={{
            width: "auto",
            height: cardHard,
            opacity: 0.9,
            borderRadius: 20,
          }}
        />

        <Text className="text-white text-[12px] font-AlexBold py-[5px] text-left pl-2 ">
          {item.title ?? item.original_name}&nbsp;
          <Text className=" font-AlexRegular">
            (
            {item?.release_date?.split("-")[0] ??
              item?.first_air_date?.split("-")[0]}
            )
          </Text>
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
