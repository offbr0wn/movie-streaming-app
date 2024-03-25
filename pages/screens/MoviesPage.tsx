import {
  View,
  Text,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "@rneui/themed";
import React, { useRef, useState } from "react";
import { ClearButton } from "../../ui/ClearButton";
import { useDebouncedCallback } from "use-debounce";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { MasonryFlashList } from "@shopify/flash-list";
import MasonryMovieList from "../../components/MoviesPage/MasonryMovieList";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function MoviesPage() {
  const [search, setSearch] = useState("");
  const searchResult = useRef();
  const [index, setIndex] = useState(0);
  const layout = useWindowDimensions();
  const navigation = useNavigation();

  const [routes] = useState([
    { key: "first", title: "Latest" },
    { key: "second", title: "Trending" },
    { key: "third", title: "Popular" },
  ]);

  const handleSearch = () => {
    searchResult.current;
  };

  const debounced = useDebouncedCallback(
    (value) => {
      console.log(value);
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

  const renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
      case "first":
        return <FirstRoute />;
      case "second":
        return console.log("second");
    }
  };

  const FirstRoute = () => {
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
      <View className="flex-1 pt-[20px] pb-[40px]">
        <MasonryFlashList
          data={DATA}
          numColumns={2}
          renderItem={({ item, index }) => (
            <MasonryMovieList item={item} index={index} />
          )}
          estimatedItemSize={200}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  };

  return (
    <SafeAreaView className=" px-[20px] pt-[30px]  flex-1 bg-gray-800">
      <View className="flex-1  space-y-[20px]">
        <Text className="text-white font-AlexMedium text-[18px]">
          Find Movies, Tv series, and more..
        </Text>
        {/* Transparent Buttons */}
        <View className="flex-row  ">
          <ClearButton name="Movies" />
          <View style={{ width: 20 }} />
          <ClearButton name="Tv Series" />
        </View>
        {/* Search Bar */}
        <View className="w-full ">
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
            onBlur={() => SearchBar.blur()}
          />
        </View>
        {/* Tabs to switch between movies and tv */}
        <View className=" flex-1 h-full ">
          <TabView
            lazy
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
    <View className="flex-1 py-[20px]">
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
    </View>
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
