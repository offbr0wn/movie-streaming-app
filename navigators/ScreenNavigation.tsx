import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./TabNavigation";
import AboutMovieScreen from "../pages/screens/AboutMovieScreen";
import LoadingScreen from "../utils/LoadingScreen";

import MovieScreenVideo from "../components/AboutMovieScreen/MovieScreenVideo";

export default function ScreenNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Tab"
        component={TabNavigation}
        // options={{ animation: "slide_from_bottom" }}
      />
      <Stack.Screen
        name="AboutMovieScreen"
        component={AboutMovieScreen}
        options={{ animation: "slide_from_bottom", animationDuration: 1000 ,headerTransparent:true}}
      />

      <Stack.Screen
        name="MovieScreenVideo"
        component={MovieScreenVideo}
        // options={{ animation: "slide_from_bottom" }}
      />
      <Stack.Screen
        name="LoadingScreen"
        component={LoadingScreen}
        options={{ animation: "fade_from_bottom" }}
      />
    </Stack.Navigator>
  );
}
