import { View, Text, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useCallback, useState } from "react";
import { ClearButton } from "../../ui/ClearButton";
import { TabView, TabBar, SceneRendererProps } from "react-native-tab-view";

import {
  useGetPopularQuery,
  useGetTopRatedQuery,
  useGetTrendingQuery,
} from "../../redux/api/api";
import LoadingScreen from "../../utils/LoadingScreen";
import { FirstRoute } from "../../components/MoviesPage/FirstRoute";
import { useDispatch } from "react-redux";
import { setDropDownValue } from "../../redux/selectors/dropDownSlice";
import { Navigation, TabBarProp } from "../../types/interface";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function MoviesPage({
  navigation,
  route,
}: {
  navigation: Navigation;
  route: { params?: number };
}) {
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const layout = useWindowDimensions();
  const [buttonType, setButtonType] = useState("movie");
  const { data: topRated, isLoading } = useGetTopRatedQuery(buttonType);
  const { data: trending } = useGetTrendingQuery(buttonType);
  const { data: popular } = useGetPopularQuery(buttonType);

  const [routes] = useState([
    { key: "first", title: "Latest" },
    { key: "second", title: "Trending" },
    { key: "third", title: "Popular" },
  ]);
  const navigateToAboutMovieScreen = useCallback(() => {
    navigation.navigate("SearchPage");
  }, [navigation]);

  const buttonTypeSet = useCallback(
    (type: string) => {
      if (type === "movie") {
        setButtonType("movie");
        dispatch(setDropDownValue("movie"));
      } else {
        setButtonType("tv");
        dispatch(setDropDownValue("tv"));
      }
    },
    [buttonType]
  );

  const renderScene = ({ route }: { route: { key: string } }) => {
    switch (route.key) {
      case "first":
        return <FirstRoute topRated={topRated} />;
      case "second":
        return <FirstRoute topRated={trending} />;
      case "third":
        return <FirstRoute topRated={popular} />;
    }
  };

  if (isLoading) {
    <LoadingScreen />;
  }

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
      <SafeAreaView className=" px-[20px]   flex-1 mt-[2%]">
        <View className="flex-1  space-y-[20px]  pb-20">
          <Text className="text-white font-AlexMedium text-[18px]">
            Find Movies, Tv series, and more..
          </Text>
          {/* Transparent Buttons */}
          <View className="flex-row  items-center justify-between ">
            <View className="flex-row">
              <ClearButton
                name="Movies"
                fontSize={"10"}
                fontFamily={"AlexBold"}
                style={{ width: 120 }}
                onPress={() => buttonTypeSet("movie")}
              />
              <View style={{ width: 20 }} />
              <ClearButton
                name="Tv Series"
                fontSize={"10"}
                style={{ width: 120 }}
                fontFamily={"AlexBold"}
                onPress={() => buttonTypeSet("tv")}
              />
            </View>
            <View>
              <Ionicons
                name="search"
                size={22}
                color="white"
                onPress={navigateToAboutMovieScreen}
              />
            </View>
          </View>

          {/* Tabs to switch between movies and tv */}
          <View className=" flex-1">
            <TabView
              lazy={true}
              lazyPreloadDistance={10}
              // animationEnabled  = {false}
              swipeEnabled={true}
              navigationState={{ index, routes }}
              onIndexChange={setIndex}
              initialLayout={{ width: layout.width }}
              renderScene={renderScene}
              sceneContainerStyle={{ backgroundColor: "transparent" }}
              renderTabBar={renderTabBar}
            />
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const renderTabBar = (props: SceneRendererProps & TabBarProp) => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: "#FF8F71",
    }}
    style={{
      backgroundColor: "transparent",
      borderRadius: 0,
      shadowColor: "transparent",
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0,
      shadowRadius: 0,
      elevation: 0,
    }}
    labelStyle={{
      textTransform: "capitalize",
      fontSize: 12,
      fontFamily: "Alexandria-Regular",
      textAlign: "left",
    }}
    tabStyle={{
      alignItems: "center",
    }}
    pressColor="transparent"
    activeColor="#FF8F71"
    inactiveColor="white"
  />
);
