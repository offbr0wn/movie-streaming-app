import { View, Text, ScrollView } from "react-native";
import React, { useCallback, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import ClapperBoard from "../../assets/svg_icons/ClapperBoard";
import { Dropdown } from "react-native-element-dropdown";
import { ICarouselInstance } from "react-native-reanimated-carousel";
import HorizontalHomeCard from "../../components/HomeScreen/HorizontalHomeCard";
import CarouselComponent from "../../components/HomeScreen/CarouselComponent";
import { Navigation } from "../../types/interface";
import {
  useGetDiscoverQuery,
  useGetPopularQuery,
  useGetTrendingQuery,
} from "../../redux/api/api";
import LoadingScreen from "../../utils/LoadingScreen";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDropDownValue,
  setDropDownValue,
} from "../../redux/selectors/dropDownSlice";
import MediaQuery from "../../utils/MediaQuery";
import { LinearGradient } from "expo-linear-gradient";

//ignore tslint error

function HomeScreen({ navigation }: Navigation) {
  const [items, setItems] = useState([
    { label: "Movies", value: "movie" },
    { label: "TV Show", value: "tv" },
  ]);

  const ref = React.useRef<ICarouselInstance>(null);
  const navigateToAboutMovieScreen = useCallback(() => {
    navigation.navigate("SearchPage");
  }, [navigation]);
  const dispatch = useDispatch();
  const selectDropDownValues = useSelector(selectDropDownValue);
  const { data: discover, isLoading: isLoadingDiscover } =
    useGetDiscoverQuery(selectDropDownValues);
  const { data: trending, isLoading: isLoadingTrending } =
    useGetTrendingQuery(selectDropDownValues);
  const { data: popular, isLoading } = useGetPopularQuery(selectDropDownValues);

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
      <SafeAreaView className="flex-1 mt-[2%]">
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="space-y-[10px] "
          scrollEventThrottle={10}
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
              <View className=" absolute left-[65%] top-[25%]">
                <Dropdown
                  style={{
                    height: "auto",
                    borderBottomColor: "red",
                    borderBottomWidth: 4,
                    paddingVertical: 5,
                    width: 108,
                    marginTop: 10,
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
          <View className="mb-[20%] ">
            <CarouselComponent data={discover?.results} />
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
