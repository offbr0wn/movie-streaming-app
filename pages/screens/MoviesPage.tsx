import { View, Text, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useCallback, useRef, useState } from "react";
import { ClearButton } from "../../ui/ClearButton";
import { TabView, TabBar } from "react-native-tab-view";
import { MasonryFlashList } from "@shopify/flash-list";
import MasonryMovieList from "../../components/MoviesPage/MasonryMovieList";
import {
  useGetPopularQuery,
  useGetTopRatedQuery,
  useGetTrendingQuery,
} from "../../redux/api/api";
import LoadingScreen from "../../utils/LoadingScreen";
import { FirstRoute } from "../../components/MoviesPage/FirstRoute";
import { useDispatch } from "react-redux";
import { setDropDownValue } from "../../redux/selectors/dropDownSlice";
import { Navigation } from "../../types/interface";

export default function MoviesPage({
  navigation,
  route,
}: {
  navigation: Navigation;
  route: { params?: number };
}) {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const searchResult = useRef();
  const [index, setIndex] = useState(0);
  const layout = useWindowDimensions();
  const [buttonType, setButtonType] = useState("movie");
  const { params } = route;
  const { data: topRated, isLoading } = useGetTopRatedQuery(buttonType);
  const { data: trending } = useGetTrendingQuery(buttonType);
  const { data: popular } = useGetPopularQuery(buttonType);

  const [routes] = useState([
    { key: "first", title: "Latest" },
    { key: "second", title: "Trending" },
    { key: "third", title: "Popular" },
  ]);

  const handleSearch = () => {
    searchResult.current;
  };

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
    <SafeAreaView className=" px-[20px] pt-[30px]   flex-1 bg-gray-800">
      <View className="flex-1  space-y-[20px] ">
        <Text className="text-white font-AlexMedium text-[18px]">
          Find Movies, Tv series, and more..
        </Text>
        {/* Transparent Buttons */}
        <View className="flex-row  ">
          <ClearButton
            name="Movies"
            fontSize={"10"}
            fontFamily={"AlexBold"}
            onPress={() => buttonTypeSet("movie")}
          />
          <View style={{ width: 20 }} />
          <ClearButton
            name="Tv Series"
            fontSize={"10"}
            fontFamily={"AlexBold"}
            onPress={() => buttonTypeSet("tv")}
          />
        </View>
        {/* Search Bar */}
        {/* <View className="w-full ">
          <SearchBar
            placeholder="Type Here..."
            onChange={handleInputChange}
            value={search}
            containerStyle={{
              backgroundColor: "#211F30",
              borderRadius: 30,
              borderWidth: 0,
              borderBottomColor: "transparent",
              elevation: 10,
              shadowColor: "white",
              height: 50,
            }}
            inputContainerStyle={{
              backgroundColor: "#211F30",
              borderRadius: 30,
              borderWidth: 0,
              height: 20,
            }}
          />
        </View> */}
        {/* Tabs to switch between movies and tv */}
        <View className=" flex-1">
          <TabView
            lazyPreloadDistance={10}
            // animationEnabled  = {false}
            swipeEnabled={false}
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
  );
}

const SecondRoute = () => {
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

  return (
    <MasonryFlashList
      data={DATA}
      numColumns={2}
      renderItem={({ item, index }) => (
        <MasonryMovieList item={item} index={index} />
      )}
      estimatedItemSize={200}
      // optimizeItemArrangement={true}
      // overrideItemLayout={(props) => {
      //   console.log(props);
      // }}
      // disableAutoLayout = {true}
      refreshing={false}
      showsVerticalScrollIndicator={false}
    />
  );
};

const ThirdRoute = () => <View style={{ flex: 1, backgroundColor: "white" }} />;

const renderTabBar = (props) => (
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
