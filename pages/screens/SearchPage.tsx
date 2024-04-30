import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "@rneui/themed";
import { useCallback, useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useDebouncedCallback } from "use-debounce";
import SpidermanImage from "../../assets/svg_icons/SpidermanImage";
import DekuImage from "../../assets/svg_icons/DekuImage";
import React from "react";
import { useGetMovieSearchQuery } from "../../redux/api/api";
import { MostSearchedCard } from "../../components/SearchPage/MostSearchedCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ClearButton } from "../../ui/ClearButton";
const SEARCH_HISTORY_KEY = "searchHistory";

export default function SearchPage() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const { data, isFetching } = useGetMovieSearchQuery(debouncedSearch);
  const [selectedType, setSelectedType] = useState<Array<string>>([]);
  const [searchHistory, setSearchHistory] = useState<Array<string>>([]);

  const debounced = useDebouncedCallback((value) => {
    setDebouncedSearch(value);
    // addToSearchHistory();
  }, 1000);

  const handleInputChange = (
    event: NativeSyntheticEvent<TextInputChangeEventData> | undefined
  ) => {
    if (event?.nativeEvent?.text) {
      setSearch(event.nativeEvent.text);
      debounced(event?.nativeEvent?.text);
    }
  };

  const filteredData = useCallback(
    data?.results?.filter(
      (item: { media_type: string | string[] }) =>
        item?.media_type === selectedType[0]
    ),
    [selectedType]
  );

  const addToSearchHistory = async () => {
    // Create a new search history array with the new term added
    const newSearchHistory = [data?.results, ...searchHistory];

    // Update the state variable with the new search history
    setSearchHistory(newSearchHistory);

    // Save the search history to AsyncStorage
    try {
      await AsyncStorage.setItem(
        SEARCH_HISTORY_KEY,
        JSON.stringify(newSearchHistory)
      );
    } catch (error) {
      console.error("Error saving search history:", error);
    }
  };

  const readSearchHistory = async () => {
    try {
      const history = await AsyncStorage.getItem(SEARCH_HISTORY_KEY);
      if (history !== null) {
        const parsedHistory = JSON.parse(history);
        setSearchHistory(parsedHistory);
      }
    } catch (error) {
      console.error("Error loading search history:", error);
    }
  };

  const removeSearchHistory = async () => {
    try {
      await AsyncStorage.removeItem(SEARCH_HISTORY_KEY);
      setSearchHistory([]);
    } catch (error) {
      console.error("Error removing search history:", error);
    }
  };

  useEffect(() => {
    readSearchHistory();
  }, []);

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
      // style={{ backgroundColor: "#15151B" }}
    >
      <SafeAreaView className="flex-1 mt-[2%]">
        <View className=" flex-1  space-y-[10px]">
          {/* Main Title */}
          <Text className="text-[20px]  px-[20px] text-white font-AlexRegular ">
            Search for a content
          </Text>
          {/* Search Bar */}
          <View className="w-full  px-[20px] ">
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
              onClear={() => {
                setSelectedType([]);
                setDebouncedSearch("");
              }}
              onChangeText={addToSearchHistory}
            />
          </View>
          <View className="w-full  px-[20px] ">
            <ClearButton
              name={"Clear History"}
              style={{
                borderColor: "rgb(100 116 139)",
                borderWidth: 0.5,
                borderRadius: 10,
              }}
              fontSize={"12 px"}
              fontFamily={"AlexRegular"}
              onPress={removeSearchHistory}
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
                <TouchableOpacity onPress={() => setSelectedType(["movie"])}>
                  <View>
                    <SpidermanImage />
                    <Image
                      source={require("../../assets/images/Movie1.png")}
                      className=" w-[75%] h-[75%]  top-0 left-0          absolute "
                    />
                    <Text className="absolute top-[30%] right-10  text-white font-AlexRegular">
                      Movies
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedType(["tv"])}>
                  <View className="relative items-center">
                    <DekuImage />
                    <Image
                      source={require("../../assets/images/Anime1.png")}
                      className=" w-[75%] h-[75%]   left-[35%]         absolute "
                    />
                    <Text className="absolute top-[30%]  right-20  text-white font-AlexRegular">
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

              {data?.results?.length === 0 &&
                searchHistory.flat()?.length > 0 && (
                  <MostSearchedCard
                    data={searchHistory?.flat()?.slice(0, 40)}
                  />
                )}

              {data?.results?.length > 0 && (
                <MostSearchedCard
                  data={filteredData?.length > 0 ? filteredData : data?.results}
                />
              )}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
