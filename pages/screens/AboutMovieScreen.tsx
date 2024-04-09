import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Platform,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";

import { ClearButton } from "../../ui/ClearButton";
import { Button, Divider } from "@rneui/themed";
import { CastItem, Navigation } from "../../types/interface";
// @ts-ignore
import CastCard from "../../ui/CastCard";
import Rating from "../../ui/Rating";
import SimilarMovieCard from "../../components/SimilarMovieCard";
import { useGetCreditsQuery, useGetDetailsQuery } from "../../redux/api/api";
import { ImageApiUrl } from "../../utils/ImageApiUrl";
import LoadingScreen from "../../utils/LoadingScreen";
import { useSelector } from "react-redux";
export default function AboutMovieScreen({ navigation, route }: Navigation) {
  const topMargin = Platform.OS === "ios" ? "" : "mt-2";
  const height = Math.round(Dimensions.get("window").height);
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const IMG_HEIGHT = height / 1.6;
  const moment = require("moment");
  const { params } = route;

  const selectDropDownValue = useSelector(
    (state) => state?.dropDown?.dropDownValue
  );
  const { data: details, isLoading } = useGetDetailsQuery({
    type: selectDropDownValue,
    id: params?.itemId,
  });

  const { data: credits } = useGetCreditsQuery({
    type: selectDropDownValue,
    id: params?.itemId,
  });

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.8]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [5, 1, 2.5]
          ),
        },
      ],
    };
  });

  if (isLoading) {
    <LoadingScreen />;
  }


  return (
    <View className="flex-1 bg-gray-800">
      {/* Back navigation button */}
      <SafeAreaView
        className={
          "absolute z-[50]  flex-row items-center justify-between   " +
          topMargin
        }
        // style={[headerAnimatedStyle]}
      >
        <TouchableOpacity className="rounded-xl p-5">
          <Ionicons
            name="arrow-back-outline"
            size={35}
            color="white"
            // style={{ opacity: headerAnimatedStyle.opacity }}
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
      </SafeAreaView>

      <ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        {/* Background Image */}

        <Animated.Image
          source={{
            uri: ImageApiUrl(details?.backdrop_path),
          }}
          resizeMode="cover"
          className="w-full "
          style={[{ height: IMG_HEIGHT }, imageAnimatedStyle]}
        />

        <LinearGradient
          // Background Linear Gradient
          colors={["transparent", "rgba(23,23,23,0.8)", "rgba(23,23,23,1)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1.5 }}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: IMG_HEIGHT,
          }}
        />
        {/* Movie Titles */}
        <View className="items-center absolute bottom-[71%] z-50  px-[20px] flex-row  justify-between w-full">
          <View className="self-start ">
            <View className="flex-row space-x-3 space-y-2  w-[70%]">
              <Text className="text-white text-[30px] font-AlexExtraBold    ">
                {details?.original_title ?? details?.name}
              </Text>
              <Text className="text-[#848484] font-AlexRegular text-[12px] self-center">
                {details?.release_date?.split("-")[0] ?? details?.first_air_date?.split("-")[0]}
              </Text>
            </View>

            <View className=" ">
              <Text className="text-[#848484] font-AlexRegular text-[16px] self-start ">
                {details?.production_companies[0].name}
              </Text>
            </View>
          </View>

          <View className="self-center ">
            <Rating rating={details?.vote_average} />
          </View>
        </View>

        {/* Watch Now Button */}
        <View className="absolute bottom-[67%] z-50 self-center">
          <Button
            ViewComponent={LinearGradient} // Don't forget this!
            linearGradientProps={{
              colors: ["#DD0404", "transparent"],
              start: { x: 0, y: 0.5 },
              end: { x: 2.5, y: 0.5 },
            }}
            style={{
              // Ensure the button has a higher z-index
              opacity: 0.9,
              backgroundColor: "transparent",
              shadowColor: "white",
              width: 250,
            }}
          >
            <Text className="text-white font-AlexBold font-[16px] p-1">
              Watch Now
            </Text>
          </Button>
        </View>

        {/* Main content */}
        <View
          style={{ height: height + 100, flex: 1 }}
          className="flex-1 bg-gray-800 pt-[20px]  space-y-5"
        >
          <View className="px-[25px] space-y-5">
            <View className="flex-row  items-start justify-between ">
              <View className="text-left space-y-4">
                <Text className="text-[16px] text-white font-AlexMedium">
                  Release Date
                </Text>
                <Text className="text-[12px] text-white font-AlexLight">
                  {moment(details?.release_date).format("dddd, MMM D YYYY")}
                </Text>
              </View>
              <View>
                <Text className="text-[20px] text-white font-AlexRegular">
                  Genre
                </Text>
                <View className="flex-row">
                  {details?.genres.map(
                    (genre: { id: number; name: string }) => (
                      <ClearButton
                        key={genre.id}
                        name={genre.name}
                        style={{
                          borderColor: "rgb(100 116 139)",
                          borderWidth: 0.5,
                          borderRadius: 10,
                          width: 60,
                        }}
                        fontSize={"10px"}
                        fontFamily={"AlexRegular"}
                      />
                    )
                  )}
                </View>
              </View>
            </View>

            {/* Divider */}
            <View className="opacity-30">
              <LinearGradient
                // Background Linear Gradient
                colors={["transparent", "white", "transparent"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={{
                  height: 10,
                  zIndex: 100,
                  opacity: 0.6,
                }}
              >
                <Divider
                  style={{ position: "absolute" }}
                  insetType="middle"
                  width={2}
                />
              </LinearGradient>
            </View>

            {/* Overview */}
            <View className=" text-left">
              <Text className="text-[16px] font-AlexMedium  text-white">
                Overview
              </Text>
              <Text className="text-[12px] font-AlexExtraLight text-white">
                {details?.overview}
              </Text>
            </View>

            {/* Cast Card */}

            <View className=" items-start space-y-2">
              <Text className="text-[16px] font-AlexMedium  text-white">
                Cast
              </Text>

              <View className="flex-row flex-wrap  ">
                {credits?.cast.slice(0, 6).map((item: CastItem) => (
                  <View
                    key={item?.id}
                    // style={{ width: cardWidth }}
                    className="pb-5 pr-4 w-[50%]"
                  >
                    <CastCard item={item} index={item?.id} />
                  </View>
                ))}
              </View>
            </View>
          </View>

          {/* Similar Movies */}

          <View>
            <Text className="text-[16px] font-AlexMedium  text-white px-[25px] pb-3">
              Similar Movies
            </Text>
            <SimilarMovieCard movieId={params?.itemId} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
