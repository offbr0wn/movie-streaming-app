import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from "react-native";
import React, { useCallback } from "react";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import { CardIndex } from "../../types/interface";
import { ImageApiUrl } from "../../utils/ImageApiUrl";
import { useNavigation } from "@react-navigation/native";
import AboutMovieScreen from "../../pages/screens/AboutMovieScreen";

export default function CardComponent({
  index,
  currentIndex,
  item,
}: CardIndex) {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const blurLogic = index === currentIndex ? 0 : 10;

  const navigation = useNavigation();

  const AboutMovieScreen = useCallback(() => {
    navigation.navigate("AboutMovieScreen", { itemId: item.id });
  }, [navigation]);

  return (
    <TouchableOpacity className="items-center" onPress={AboutMovieScreen}>
      <ImageBackground
        source={{
          uri: ImageApiUrl(item.poster_path),
        }}
        style={{
          width: width / 1.7,
          height: height / 2.7,
          borderRadius: 60,
          overflow: "hidden",
          shadowColor: "white",
          shadowOffset: { width: 1000, height: 200 },
          shadowOpacity: 1,
          shadowRadius: 10,
          elevation: 20,
        }}
        resizeMode="cover"
        blurRadius={blurLogic}
      >
        <BlurView
          intensity={100}
          tint="prominent"
          style={{
            width: 80,
            // height: 45,
            position: "absolute",

            margin: 25,
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          <View className="flex-row items-baseline  justify-center space-x-1 ">
            <Ionicons name="star" size={22} color="white" />
            <Text className="text-white text-[25px] font-AlexBold  ">
              {item.vote_average.toFixed(1)}
            </Text>
          </View>
        </BlurView>
      </ImageBackground>
      {index === currentIndex && (
        <Text className="text-white text-[20px] font-AlexRegular tracking-[0.5px] ">
          {item.original_title ?? item.original_name}
        </Text>
      )}
    </TouchableOpacity>
  );
}
