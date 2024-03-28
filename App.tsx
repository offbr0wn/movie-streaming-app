import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TabNavigation from "./navigators/TabNavigation";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { useColorScheme } from "react-native";
import ScreenNavigation from "./navigators/ScreenNavigation";
import BottomNavBar from "./utils/BottomNavBar";
import * as NavigationBar from "expo-navigation-bar";

export default function App() {
  const visibility = NavigationBar.useVisibility();

  const [fontsLoaded] = useFonts({
    "Alexandria-Regular": require("./assets/fonts/Alexandria-Regular.ttf"),
    "Alexandria-Medium": require("./assets/fonts/Alexandria-Medium.ttf"),
    "Alexandria-SemiBold": require("./assets/fonts/Alexandria-SemiBold.ttf"),
    "Alexandria-Light": require("./assets/fonts/Alexandria-Light.ttf"),
    "Alexandria-ExtraBold": require("./assets/fonts/Alexandria-ExtraBold.ttf"),
    "Alexandria-Black": require("./assets/fonts/Alexandria-Black.ttf"),
    "Alexandria-ExtraLight": require("./assets/fonts/Alexandria-ExtraLight.ttf"),
    "Alexandria-Bold": require("./assets/fonts/Alexandria-Bold.ttf"),
  });

  console.log(visibility);
  useEffect(() => {
    if (visibility === "visible" || visibility === null) {
      BottomNavBar();
    }
  }, [visibility]);

  useLayoutEffect(() => {
    async function handleOnLayout() {
      await SplashScreen.preventAutoHideAsync();
      setTimeout(SplashScreen.hideAsync, 5000);
    }

    handleOnLayout();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <GestureHandlerRootView style={{ flexGrow: 1 }}>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <NavigationContainer>
          <ScreenNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
