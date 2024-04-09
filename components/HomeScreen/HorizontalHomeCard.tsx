import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import { BlurView } from "expo-blur";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ImageApiUrl, ImageApiUrlW100 } from "../../utils/ImageApiUrl";

interface NavigationParams {
  screen: string;
  params?: {
    itemId: number;
    otherParam: string;
  };
}
export default function HorizontalHomeCard({ data, name }) {
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
  }, []);

  const handleInitialScroll = () => {
    // console.log("Initial scroll detected");
    // Set isFlashListInUse to true when the initial scroll is detected
    setIsFlashListInUse(true);
  };

  return (
    <View className="flex-col pb-[20px]">
      <View className="flex-row items-center flex-1 w-full justify-between px-[20px]">
        <Text className="text-white text-[20px] font-AlexSemiBold ">
          {name}
        </Text>
        <TouchableOpacity
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate("Movie/Shows", { type: name });
          }}
        >
          <Text className="text-[#DD0404] text-[12px] font-AlexRegular ">
            View all
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingLeft: isFlashListInUse ? 0 : 20,

          flex: 1,
        }}
        onTouchStart={handleInitialScroll} // Add paddingTop dynamically based on state
      >
        <FlashList
          ref={flashListRef}
          data={data?.results.slice(0, 8)}
          horizontal={true}
          ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
          showsHorizontalScrollIndicator={false}
          estimatedItemSize={10}
          estimatedListSize={{ height: 200, width: 120 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              // onPress={() => {
              //   console.log(target);
              // }}
              // onLayout={handleInitialScroll}
              onPress={() =>
                navigation.navigate("AboutMovieScreen", {
                  itemId: item.id,
                })
              }
            >
              <View>
                <ImageBackground
                  source={{ uri: ImageApiUrlW100(item?.poster_path) }}
                  style={{
                    width: 120,
                    height: 200,
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
                  <Text className="text-white text-[10px]  font-AlexRegular absolute">
                    {item?.title ?? item?.name}
                  </Text>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
