import { View, Text, ScrollView, Platform } from "react-native";
import React, { useState } from "react";
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
function HomeScreen({ navigation }: any) {
  const [value, setValue] = useState("Movies");
  const [items, setItems] = useState([
    { label: "Movies", value: "movies" },
    { label: "TV Show", value: "tvShows" },
  ]);
  const ref = React.useRef<ICarouselInstance>(null);

  const navigateToAboutMovieScreen = () => {
    navigation.navigate("AboutMovieScreen");
  };
console.log(navigation)
  return (
    <SafeAreaView className={`bg-gray-800  flex-1 `}>
      <View className="flex-1 ">
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="space-y-[10px] "
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
              <Text className="text-white text-[25px] tracking-[1px] font-AlexMedium ">
                What would you like to see today?
              </Text>
              <View className=" absolute left-[68%] top-[25px]">
                <Dropdown
                  style={{
                    height: "auto",
                    borderBottomColor: "red",
                    borderBottomWidth: 4,
                    paddingVertical: 5,

                    width: 108,
                  }}
                  containerStyle={{
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                    borderWidth: 0,
                  }}
                  itemTextStyle={{
                    color: "red",
                    fontSize: 15,
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
                    justifyContent: "center",

                    left: 5,
                  }}
                  placeholderStyle={{
                    color: "red",
                    fontSize: 25,
                    fontFamily: "Alexandria-Medium",
                  }}
                  iconColor="red"
                  data={items}
                  placeholder={value}
                  // searchPlaceholder="Search..."
                  value={value}
                  onChange={function (item: {
                    label: string;
                    value: string;
                  }): void {
                    console.log(item);
                  }}
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
            <CarouselComponent />
            {/* Trending Now Section */}
            <HorizontalHomeCard />
            {/* Popular */}
            <HorizontalHomeCard />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
