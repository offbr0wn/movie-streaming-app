import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Platform,
  ImageBackground,
  Dimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function AboutMovieScreen({ navigation }) {
  const topMargin = Platform.OS === "ios" ? "" : "mt-3";
  const height = Math.round(Dimensions.get("window").height);

  return (
    <ScrollView className="bg-gray-800 flex-1 pb-[60px]">
      <View className="w-full">
        <SafeAreaView
          className={
            "absolute z-20 w-full flex-row items-center justify-between px-8" +
            topMargin
          }
        >
          <TouchableOpacity className="rounded-xl p-5">
            <Ionicons
              name="arrow-back-outline"
              size={35}
              color="white"
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          <ImageBackground
            source={{
              uri: "https://www.themoviedb.org/t/p/w1280/i6yYcZ5sGHHM2l6dIgt2nZov7Hh.jpg",
            }}
            resizeMode="cover"
            className="w-full "
            style={{ height: height / 1.7 }}
          >
            <Text>Image</Text>
          </ImageBackground>
        </View>
      </View>
    </ScrollView>
  );
}
