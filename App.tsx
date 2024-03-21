import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import React, { useCallback, useLayoutEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TabNavigation from "./navigators/TabNavigation";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import "@tamagui/core/reset.css";
import { TamaguiProvider } from "@tamagui/core";
import { tamaguiConfig } from "../movie-streaming-app/tamagui.config";
import { useColorScheme } from "react-native";

export default function App() {
  const colorScheme = useColorScheme();
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

  useLayoutEffect(() => {
    async function handleOnLayout() {
      await SplashScreen.preventAutoHideAsync();
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
          <TabNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
