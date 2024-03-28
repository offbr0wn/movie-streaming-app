import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import { BlurView } from "expo-blur";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface NavigationParams {
  screen: string;
  params?: {
    itemId: number;
    otherParam: string;
  };
}
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
  const navigation = useNavigation();
  const [isFlashListInUse, setIsFlashListInUse] = useState(false);
  const flashListRef = useRef(null);
  const navigateParams: NavigationParams = {
    screen: "Movie/Shows",
    params: {
      itemId: 86,
      otherParam: "anything you want here",
    },
  };
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
        <TouchableOpacity
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate(navigateParams.screen, navigateParams.params);
          }}
        >
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
          ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
            // onPress={() => {
            //   console.log(item.title);
            // }}
            // onLayout={handleInitialScroll}
            >
              <View
                // className="shadow-md shadow-gray-700"
                // style={{
                //   shadowColor: "white",
                //   elevation: 10,
                //   shadowOffset: { width: 1000, height: 200 },
                //   shadowOpacity: 1,
                //   shadowRadius: 10,
                // }}
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
                    justifyContent: "center",
                    elevation: 10,
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
                      width: "100%",
                   
                      

                      shadowColor: "white",
                      // shadowOffset: { width: 1000, height: 200 },
                      shadowOpacity: 1,
                      shadowRadius: 10,
                    }}
                  />
                  <Text className="text-white text-[16px]  font-AlexRegular absolute">
                    {item.title}
                  </Text>
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
