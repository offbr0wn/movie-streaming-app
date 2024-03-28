import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import { FlashList } from "@shopify/flash-list";
import { BlurView } from "expo-blur";

export default function SimilarMovieCard() {
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
    <View>
      <FlashList
        //   ref={flashListRef}
        data={DATA}
        horizontal={true}
        ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View
              className="shadow-md shadow-gray-700"
              style={{
                shadowColor: "white",
                elevation: 10,
                shadowOffset: { width: 1000, height: 200 },
                shadowOpacity: 1,
                shadowRadius: 10,
              }}
            >
              <ImageBackground
                source={{ uri: item.image }}
                style={{
                  width: 120,
                  height: 180,
                  shadowColor: "#0000",
                  shadowOffset: { width: 0, height: 10 },
                  shadowOpacity: 0.5,
                  shadowRadius: 10,
                  borderRadius: 20,
                  overflow: "hidden",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
                resizeMode="cover"
              >
                <BlurView
                  intensity={70}
                  tint="systemThinMaterialLight"
                  style={{
                    height: "20%",
                    // width: "80%",
                    borderRadius: 20,
                    overflow: "hidden",

                    shadowColor: "white",
                    // shadowOffset: { width: 1000, height: 200 },
                    shadowOpacity: 1,
                    shadowRadius: 10,
                  }}
                />
                <Text className="text-white text-[18px]  font-AlexLight absolute">
                  {item.title}
                </Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        )}
        estimatedItemSize={10}
      />
    </View>
  );
}
