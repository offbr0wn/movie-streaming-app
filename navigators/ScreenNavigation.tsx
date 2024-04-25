import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./TabNavigation";
import AboutMovieScreen from "../pages/screens/AboutMovieScreen";
import LoadingScreen from "../utils/LoadingScreen";
import {
  useGetDiscoverQuery,
  useGetPopularQuery,
  useGetTrendingQuery,
} from "../redux/api/api";
import { useSelector } from "react-redux";
import { selectDropDownValue } from "../redux/selectors/dropDownSlice";
import MovieScreenVideo from "../components/AboutMovieScreen/MovieScreenVideo";

export default function ScreenNavigation() {
  const Stack = createNativeStackNavigator();

  const selectDropDownValues = useSelector(selectDropDownValue);

  const { data: results, isLoading: isLoadingDiscover } =
    useGetDiscoverQuery(selectDropDownValues);
  const { data: trending, isLoading: isLoadingTrending } =
    useGetTrendingQuery(selectDropDownValues);
  const { data: popular, isLoading: isLoadingPopular } =
    useGetPopularQuery(selectDropDownValues);

  if (isLoadingDiscover && isLoadingTrending && isLoadingPopular) {
    return <LoadingScreen />;
  }

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
        name="MovieScreenVideo"
        component={MovieScreenVideo}
        options={{ animation: "slide_from_bottom" }}
      />
      <Stack.Screen
        name="LoadingScreen"
        component={LoadingScreen}
        options={{ animation: "fade_from_bottom" }}
      />
    </Stack.Navigator>
  );
}
