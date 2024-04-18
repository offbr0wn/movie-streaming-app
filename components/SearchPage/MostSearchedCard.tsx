import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { BlurView } from "expo-blur";
import { ImageApiUrl } from "../../utils/ImageApiUrl";
import { useNavigation } from "@react-navigation/native";

export const MostSearchedCardFlatList = ({
  item,
}: {
  item: {
    poster_path: string;
    original_title: string;
    id: number;
    name: string;
    media_type: string;
    vote_average: number;
  };
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("AboutMovieScreen", {
          itemId: item.id,
          section: "settings",
          mediaType: item.media_type,
        })
      }
    >
      <View>
        <Image
          source={{ uri: ImageApiUrl(item.poster_path) }}
          style={{
            width: 110,
            height: 140,
            shadowColor: "white",
            shadowOffset: { width: 20, height: 0 },
            shadowOpacity: 0.5,
            shadowRadius: 10,
            borderRadius: 20,
            overflow: "hidden",
          }}
          resizeMode="stretch"
        />
        <Text className="text-white font-AlexRegular text-[16px] text-center pt-[2px]">
          {item.original_title ?? item?.name}
        </Text>
        <Text className="text-white font-AlexLight text-[14px] text-center">
          {item?.vote_average > 0 ? item?.vote_average?.toFixed(1) : null}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default function MostSearchedCard({ data }) {
  return (
    <FlashList
      data={data?.results}
      renderItem={({ item }) => <MostSearchedCardFlatList item={item} />}
      estimatedItemSize={20}
      horizontal={false}
      ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
      showsHorizontalScrollIndicator={false}
      numColumns={3}
    />
  );
}
