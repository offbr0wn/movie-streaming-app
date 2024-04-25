import { View, Text, ScrollView, Platform } from "react-native";
import React, { useCallback, useState } from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import ClapperBoard from "../../assets/svg_icons/ClapperBoard";
import { Dropdown } from "react-native-element-dropdown";
import { ICarouselInstance } from "react-native-reanimated-carousel";
import HorizontalHomeCard from "../../components/HomeScreen/HorizontalHomeCard";
import CarouselComponent from "../../components/HomeScreen/CarouselComponent";
import { Navigation, RootStateDropDown } from "../../types/interface";
import {
  useGetDiscoverQuery,
  useGetNowTopAiringQuery,
  useGetPopularQuery,
  useGetTrendingQuery,
} from "../../redux/api/api";
import LoadingScreen from "../../utils/LoadingScreen";
import { ImageApiUrl } from "../../utils/ImageApiUrl";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import {
  selectDropDownValue,
  setDropDownValue,
} from "../../redux/selectors/dropDownSlice";
import { useMediaQuery } from "native-base";
import MediaQuery from "../../utils/MediaQuery";
import { useFocusEffect } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

//ignore tslint error

function HomeScreen({ navigation }: Navigation) {
  const [items, setItems] = useState([
    { label: "Movies", value: "movie" },
    { label: "TV Show", value: "tv" },
  ]);

  // const [dropDownValue, setDropDownValue] = useState("movie");
  // const {
  //   data: { results } = [],
  //   error,
  //   isLoading,
  // } = useGetDiscoverMovieQuery("");
  const ref = React.useRef<ICarouselInstance>(null);

  const selectDropDownValues = useSelector(selectDropDownValue);
  const dispatch = useDispatch();
  const {
    data: results,
    isFetching: isLoadingDiscover,
    refetch,
  } = useGetDiscoverQuery(selectDropDownValues);
  const { data: trending, isFetching: isLoadingTrending } =
    useGetTrendingQuery(selectDropDownValues);
  const { data: popular, isFetching: isLoadingPopular } =
    useGetPopularQuery(selectDropDownValues);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     return () => refetch();
  //   }, [])
  // );
  const navigateToAboutMovieScreen = useCallback(() => {
    navigation.navigate("LoadingScreen");
  }, [navigation]);

  return (
    <LinearGradient
      colors={[
        "rgba(0, 209, 255, 0.3)",
        "rgba(135, 91, 229, 0.2)",
        "rgba(237, 34, 34, 0.25)",
      ]}
      start={{ x: 0.4, y: 0 }}
      end={{ x: 0, y: 0.8 }}
      locations={[0, 0.6, 1]}
      className="flex-1 bg-[#15151B]"
    >
      <SafeAreaView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="space-y-[10px] "
          scrollEventThrottle={20}
          // scrollEnabled={true}
        >
          {/* Top Header */}
          <View className="flex-row items-center justify-start space-x-[10px] px-[20px]">
            <ClapperBoard />
            <Text className="text-white text-[30px] font-AlexBold">Movies</Text>
          </View>
          {/* Under Header selection movie */}
          <View className="flex-row items-center justify-between px-[20px]">
            <View className="w-[80%]">
              <Text
                className={`text-white ${
                  MediaQuery().isSmallScreen ? "text-[15px]" : "text-[25px]"
                }    tracking-[1px] font-AlexMedium `}
              >
                What would you like to see today?
              </Text>
              <View className=" absolute left-[68%] top-[30px]">
                <Dropdown
                  style={{
                    height: "auto",
                    borderBottomColor: "red",
                    borderBottomWidth: 4,
                    paddingVertical: 5,
                    width: 108,
                  }}
                  containerStyle={{
                    backgroundColor: "white",
                    borderColor: "transparent",
                    borderWidth: 0,
                    shadowColor: "transparent",
                  }}
                  itemTextStyle={{
                    color: "red",
                    fontSize: 18,
                    fontFamily: "Alexandria-Medium",
                    textAlign: "center",
                  }}
                  selectedTextStyle={{
                    display: "flex",
                    color: "red",
                    // width: 10,
                    fontSize: 20,
                    fontFamily: "Alexandria-Medium",
                  }}
                  iconStyle={{
                    justifyContent: "flex-end",
                  }}
                  placeholderStyle={{
                    color: "red",
                    fontSize: 20,
                    fontFamily: "Alexandria-Medium",

                    textAlign: "center",
                  }}
                  iconColor="red"
                  data={items}
                  placeholder={items[0].label}
                  // searchPlaceholder="Search..."
                  value={selectDropDownValues}
                  onChange={(event) => dispatch(setDropDownValue(event?.value))}
                  labelField="label"
                  valueField="value"
                  activeColor="transparent"
                />
              </View>
            </View>
            <Ionicons
              name="search"
              size={30}
              color="white"
              onPress={navigateToAboutMovieScreen}
            />
          </View>
          {/* Carousel section */}
          <View className="pb-[70px]">
            <CarouselComponent data={results?.results?.slice(0, 10)} />
            {/* Trending Now Section */}
            <HorizontalHomeCard
              data={trending?.results}
              name={"Trending Now"}
            />
            {/* Popular */}
            <HorizontalHomeCard data={popular?.results} name={"Popular"} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

export default HomeScreen;
