import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import { BlurView } from "expo-blur";

export default function HorizontalHomeCard() {
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

  const [isFlashListInUse, setIsFlashListInUse] = useState(false);
  const flashListRef = useRef(null);

  useEffect(() => {
    // Check if the FlashList is in use by checking if the ref is not null
    setIsFlashListInUse(false);
  }, [flashListRef]);

  const handleInitialScroll = () => {
    // console.log("Initial scroll detected");
    // Set isFlashListInUse to true when the initial scroll is detected
    setIsFlashListInUse(true);
  };
  return (
    <View className="flex-col pb-[20px]">
      <View className="flex-row items-center space-x-[200px] pl-[20px]">
        <Text className="text-white text-[25px] font-AlexSemiBold ">
          Trending
        </Text>
        <TouchableOpacity>
          <Text className="text-[#DD0404] text-[12px] font-AlexRegular ">
            View all
          </Text>
        </TouchableOpacity>
      </View>
      <View
        className="grow"
        style={{ paddingLeft: isFlashListInUse ? 0 : 20 }}
        onTouchStart={handleInitialScroll} // Add paddingTop dynamically based on state
      >
        <FlashList
          ref={flashListRef}
          data={DATA}
          horizontal={true}
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                console.log(item.title);
              }}
              onLayout={handleInitialScroll}
            >
              <View className="">
                <ImageBackground
                  source={{ uri: item.image }}
                  style={{
                    width: 150,
                    height: 200,
                    shadowColor: "#0000",
                    shadowOffset: { width: 0, height: 10 },
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                    borderRadius: 20,
                    overflow: "hidden",
                  }}
                  resizeMode="cover"
                >
                  <BlurView
                    intensity={80}
                    style={{
                      position: "absolute",
                      height: "20%",
                      width: "80%",
                      borderRadius: 20,
                      overflow: "hidden",

                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text className="text-white text-[15px] font-AlexLight">
                      {item.title}
                    </Text>
                  </BlurView>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          )}
          estimatedItemSize={10}
        />
      </View>
    </View>
  );
}
