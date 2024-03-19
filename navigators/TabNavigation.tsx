import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../pages/screens/HomeScreen";
import MoviesPage from "../pages/screens/MoviesPage";
import SearchPage from "../pages/screens/SearchPage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
export default function TabNavigation() {
  const Tab = createBottomTabNavigator();

  const styles = StyleSheet.create({
    tabBarStyle: {
      paddingBottom: 0,
      paddingTop: 5,
      position: "absolute",
      height: 60,
      backgroundColor: "#1f2937",
      borderTopWidth: 0,
      elevation: 0,
      borderTopColor: "transparent",
      flex: 1,
    },
  });

  const tabBarIconLogic = ({
    route,
    focused,
    color,
    size,
  }: {
    route: any;
    focused: boolean;
    color: string;
    size: number;
  }) => {
    // console.log(route.name);
    let iconName;
    if (route.name === "HomeScreen") {
      iconName = !focused ? "home-outline" : "home-sharp";
    } else if (route.name === "SearchPage") {
      iconName = !focused ? "search-outline" : "search-sharp";
    } else {
      iconName = !focused ? "film-outline" : "film-sharp";
    }
    // You can return any component that you like here!

    return <Ionicons name={iconName} size={27} color={color} />;
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: styles.tabBarStyle,
        tabBarIcon: ({ focused, color, size }) =>
          tabBarIconLogic({ route, focused, color, size }),
        tabBarButton: (props) => (
          <TouchableOpacity
            onPress={props.onPress}
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {props.children}
          </TouchableOpacity>
        ),

        tabBarLabelStyle: { display: "none" },
        headerShown: false,
        tabBarActiveTintColor: "#DD0404",
        tabBarInactiveTintColor: "white",
        tabBarBackground: () => (
          <BlurView
            intensity={0}
            style={{ position: "absolute", height: "100%", width: "100%" }}
          />
        ),
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="SearchPage" component={SearchPage} />
      <Tab.Screen name="Movie/Shows" component={MoviesPage} />
    </Tab.Navigator>
  );
}

export const tabBarIconLogic = ({
  route,
  focused,
  color,
  size,
}: {
  route: any;
  focused: boolean;
  color: string;
  size: number;
}) => {
  // console.log(route.name);
  let iconName;
  if (route.name === "HomeScreen") {
    iconName = !focused ? "home-outline" : "home-sharp";
  } else if (route.name === "SearchPage") {
    iconName = !focused ? "search-outline" : "search-sharp";
  } else {
    iconName = !focused ? "film-outline" : "film-sharp";
  }
  // You can return any component that you like here!

  return <Ionicons name={iconName} size={27} color={color} />;
};
