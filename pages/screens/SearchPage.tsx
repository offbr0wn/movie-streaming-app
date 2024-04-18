import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "@rneui/themed";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useDebouncedCallback } from "use-debounce";
import MostSearchedCard from "../../components/SearchPage/MostSearchedCard";
import SpidermanImage from "../../assets/svg_icons/SpidermanImage";
import DekuImage from "../../assets/svg_icons/DekuImage";
import React from "react";
import { useGetMovieSearchQuery } from "../../redux/api/api";

export default function SearchPage() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const { data, isFetching } = useGetMovieSearchQuery(debouncedSearch);

  const debounced = useDebouncedCallback(
    (value) => {
      setDebouncedSearch(value);
    },

    1000
  );

  const handleInputChange = (
    event: NativeSyntheticEvent<TextInputChangeEventData> | undefined
  ) => {
    if (event?.nativeEvent?.text) {
      setSearch(event.nativeEvent.text);
      debounced(event?.nativeEvent?.text);
    }
  };

  return (
    <SafeAreaView className="flex-1 pt-[40px]  bg-gray-800 ">
      <View className=" flex-1  space-y-[10px]">
        {/* Main Title */}
        <Text className="text-[20px]  px-[20px] text-white font-AlexRegular">
          Search for a content
        </Text>
        {/* Search Bar */}
        <View className="w-full  px-[20px]">
          <LinearGradient
            start={{ x: 0, y: 2.5 }}
            end={{ x: 1, y: 2.5 }}
            colors={["transparent", "#19A1BE", "#7D4192", "transparent"]}
            style={{
              position: "absolute",
              left: 10,
              right: 10,
              top: -3,

              height: "110%",
              zIndex: -99,
              borderRadius: 30,
              overflow: "hidden",
              elevation: 100,
            }}
          />
          <SearchBar
            placeholder="Search for a content..."
            defaultValue="Hello"
            onChange={handleInputChange}
            // onChange={(event) => setSearch(event.nativeEvent.text)}
            value={search}
            showLoading={isFetching}
            searchIcon={false}
            containerStyle={{
              borderRadius: 24,
            }}
          />
        </View>

        {/* Movies / TV Shows Image  */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="flex-1 pb-[100px]"
        >
          <View className=" items-start  space-x-[-2px]  pt-[20px]">
            <Text className="text-[20px] text-white font-AlexRegular px-[20px]">
              Catagories
            </Text>
            <View className="flex-row  ">
              <TouchableOpacity>
                <View>
                  <SpidermanImage />
                  <Text className="absolute top-[30%] right-10  text-white font-AlexRegular">
                    Movies
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View className="relative items-center">
                  <DekuImage />
                  <Text className="absolute top-[30%]   text-white font-AlexRegular">
                    TV Shows
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Most searched section  */}
          <View className="flex-1 px-[20px]  pb-[100px] ">
            {data?.results?.length === 0 && (
              <Text className="text-[20px] text-white font-AlexRegular pb-[10px]">
                Most Searched
              </Text>
            )}

            {data?.results?.length > 0 && <MostSearchedCard data={data} />}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
