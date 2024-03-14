import { StatusBar } from "expo-status-bar";
import HomeScreen from "./pages/screens/HomeScreen";
import SearchPage from "./pages/screens/SearchPage";
import MoviesPage from "./pages/screens/MoviesPage";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={({ route }) => {
          console.log(route.name);

          return {
            headerShown: false,
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: "gray",
          };
        }}
      >
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="SearchPage" component={SearchPage} />
        <Tab.Screen name="Movie/Shows" component={MoviesPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
