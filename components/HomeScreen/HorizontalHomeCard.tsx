import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { FlashList, useBlankAreaTracker } from "@shopify/flash-list";
import { BlurView } from "expo-blur";
import { Button } from "react-native";
import {
  useNavigation,
  NavigatorScreenParams,
  NavigationState,
} from "@react-navigation/native";
import { ImageApiUrl, ImageApiUrlBack, ImageApiUrlBackdrop } from "../../utils/ImageApiUrl";

interface NavigationParams {
  screen: string;
  params?: {
    itemId: number;
    otherParam: string;
  };
}

export default function HorizontalHomeCard({
  data,
  name,
}: {
  data: any;
  name: string;
}) {
  const navigation = useNavigation();
  const [isFlashListInUse, setIsFlashListInUse] = useState(false);
  const flashListRef = useRef(null);
    // You can make a call when to ingest this data. We recommend that you ingest when the list unmounts.
    const [blankAreaTrackerResult, onBlankArea] = useBlankAreaTracker(flashListRef);

  const MovieAndTvShow = useCallback(
    () => navigation.navigate("Movie/Shows", { type: name }),
    [name, navigation]
  );

  useLayoutEffect(() => {
    setIsFlashListInUse(false);
  }, []);

  const handleInitialScroll = () => {
    // console.log("Initial scroll detected");
    // console.log(blankAreaTrackerResult);
    // Set isFlashListInUse to true when the initial scroll is detected
    setIsFlashListInUse(true);
  };

  return (
    <View className="flex-col pb-[20px]">
      <View className="flex-row items-center flex-1 w-full justify-between px-[20px]">
        <Text className="text-white text-[20px] font-AlexSemiBold ">
          {name}
        </Text>
        <TouchableOpacity onPress={MovieAndTvShow}>
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
        // onTouchStart={handleInitialScroll} // Add paddingTop dynamically based on state
      >
        <FlashList
          ref={flashListRef}
          data={data ? data : []}
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
                  source={{ uri: ImageApiUrlBackdrop(item?.poster_path) }}
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
