import { StatusBar } from "expo-status-bar";
import HomeScreen from "./pages/screens/HomeScreen";
import SearchPage from "./pages/screens/SearchPage";
import MoviesPage from "./pages/screens/MoviesPage";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import { useCallback, useLayoutEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TabNavigator from "./navigators/TabNavigation";
import TabNavigation from "./navigators/TabNavigation";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const Tab = createBottomTabNavigator();
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

  useLayoutEffect(() => {
    async function handleOnLayout() {
      await SplashScreen.preventAutoHideAsync();
    }

    handleOnLayout();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } 
  else {
    SplashScreen.hideAsync();
  }

  return (
    // <View onLayout={handleOnLayout}>
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      <StatusBar style="auto" />
      <TabNavigation />
    </NavigationContainer>
     </GestureHandlerRootView>
    // </View>
  );
}
