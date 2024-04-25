import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchPage from "../pages/screens/SearchPage";
import HomeScreen from "../pages/screens/HomeScreen";
import MoviesPage from "../pages/screens/MoviesPage";

export default function TabNavigation() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const height = Dimensions.get("window").height / 8;
  const styles = StyleSheet.create({
    tabBarStyle: {
      paddingTop: 5,
      position: "absolute",
      height: height,
      backgroundColor: "none",
      borderTopWidth: 0,
      elevation: 0,
      borderTopColor: "transparent",
      flex: 1,
      zIndex: 99,
      backfaceVisibility: "hidden",
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
    let iconName: string;
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
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarHideOnKeyboard: true,

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

        tabBarActiveTintColor: "#DD0404",
        tabBarInactiveTintColor: "white",
        tabBarBackground: () => (
          <BlurView
            intensity={100}
            tint="systemThickMaterialDark"
            style={{ height: height, width: "100%" }}
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
