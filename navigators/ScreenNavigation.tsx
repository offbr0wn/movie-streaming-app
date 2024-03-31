import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../pages/screens/HomeScreen";
import TabNavigation from "./TabNavigation";
import AboutMovieScreen from "../pages/screens/AboutMovieScreen";
import LoadingScreen from "../utils/LoadingScreen";

export default function ScreenNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Tab"
        component={TabNavigation}
        options={{ animation: "fade" }}
      />
      <Stack.Screen
        name="AboutMovieScreen"
        component={AboutMovieScreen}
        options={{ animation: "slide_from_bottom" }}
      />
      <Stack.Screen
        name="LoadingScreen"
        component={LoadingScreen}
        options={{ animation: "fade" }}
      />
    </Stack.Navigator>
  );
}
