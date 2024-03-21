import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { BlurView } from "expo-blur";

export const MostSearchedCardFlatList = ({ item }: { item: { image: string, title: string } }): JSX.Element => {
  console.log(item);
  return (
    <View
      className="shadow-md shadow-gray-700  "
      style={{
        shadowColor: "white",
        elevation: 10,
        // shadowOffset: { width: 100, height: 200 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
    
        
        
      }}
    >
      <Image
        source={{ uri: item.image }}
        style={{
          width: 120,
          height: 150,
          shadowColor: "white",
          shadowOffset: { width:20, height: 0 },
          shadowOpacity: 0.5,
          shadowRadius: 10,
          borderRadius: 20,
          overflow: "hidden",
          
          
        }}
        resizeMode="stretch"
        className="px-[20px] "
       
      />
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
    <TouchableOpacity>
      <FlashList
        data={DATA}
        renderItem={({ item }) => <MostSearchedCardFlatList item={item} />}
        estimatedItemSize={200}
        horizontal={false}
        ItemSeparatorComponent={() => (
          <View style={{height: 50, gap: 10}} />
        )}
        showsHorizontalScrollIndicator={false}
        numColumns={3}
        
        
      />
    </TouchableOpacity>
  );
}
