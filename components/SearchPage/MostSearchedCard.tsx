import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { BlurView } from "expo-blur";

export const MostSearchedCardFlatList = ({
  item,
}: {
  item: { image: string; title: string };
}): JSX.Element => {
  return (
    <View>
      <Image
        source={{ uri: item.image }}
        style={{
          width: 110,
          height: 140,
          shadowColor: "white",
          shadowOffset: { width: 20, height: 0 },
          shadowOpacity: 0.5,
          shadowRadius: 10,
          borderRadius: 20,
          overflow: "hidden",
          // marginHorizontal:"auto"
        }}
        resizeMode="stretch"
      />
      <Text className="text-white font-AlexRegular text-[16px]  text-center pt-[2px] ">
        {item.title}
      </Text>
      <Text className="text-white font-AlexLight text-[14px]  text-center ">
        5.0
      </Text>
    </View>
  );
};

export default function MostSearchedCard() {
  const DATA = [
    {
      image:
        "https://www.themoviedb.org/t/p/w1280/7O4iVfOMQmdCSxhOg1WnzG1AgYT.jpg",
      title: "First Item",
    },
    {
      image:
        "https://www.themoviedb.org/t/p/w1280/6s5RtBxfHybu2vkg43Cexazf0mt.jpg",

      title: "Second Item",
    },
    {
      image:
        "https://www.themoviedb.org/t/p/w1280/8hoD5BQuUV9dDecAbiyVIxLjzZ9.jpg",

      title: "First Item",
    },
    {
      image:
        "https://www.themoviedb.org/t/p/w1280/6s5RtBxfHybu2vkg43Cexazf0mt.jpg",

      title: "Second Item",
    },
    {
      image:
        "https://www.themoviedb.org/t/p/w1280/8hoD5BQuUV9dDecAbiyVIxLjzZ9.jpg",

      title: "First Item",
    },
  ];
  return (
    <FlashList
      data={DATA}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <MostSearchedCardFlatList item={item} />
        </TouchableOpacity>
      )}
      estimatedItemSize={20}
      horizontal={false}
      ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
      showsHorizontalScrollIndicator={false}
      numColumns={3}
    />
  );
}
