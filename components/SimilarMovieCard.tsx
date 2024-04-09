import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import { FlashList } from "@shopify/flash-list";
import { BlurView } from "expo-blur";
import { useGetSimilarQuery } from "../redux/api/api";
import { ImageApiUrl } from "../utils/ImageApiUrl";
import LoadingScreen from "../utils/LoadingScreen";
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from "react-redux";

interface SimilarMovieCardProps {
  movieId: number;
}

export default function SimilarMovieCard({ movieId }: SimilarMovieCardProps) {
  const navigation = useNavigation()
  const selectDropDownValue = useSelector(
    (state) => state?.dropDown?.dropDownValue
  );
  const { data: similarMovies } = useGetSimilarQuery({
    type: selectDropDownValue,
    id: movieId,
  });

  const width = 150;
  const height = 200;

  return (
    <View className="flex-row  w-full h-full ">
      <FlashList
        //   ref={flashListRef}
        data={similarMovies?.results}
        horizontal={true}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        showsHorizontalScrollIndicator={false}
        estimatedItemSize={20}
        estimatedListSize={{ width: width, height: height }}
        renderItem={({
          item,
        }: {
          item: { title?: string; poster_path: string; id: number, original_name?: string };
        }) => (
          <TouchableOpacity onPress={() => navigation.navigate('AboutMovieScreen', { itemId: item.id })}>
            <ImageBackground
              source={{ uri: ImageApiUrl(item?.poster_path) }}
              style={{
                width: width,
                height: height,
                shadowColor: "#0000",
                shadowOffset: { width: 0, height: 10 },
                shadowOpacity: 0.5,
                shadowRadius: 10,
                borderRadius: 20,
                elevation: 10,
                overflow: "hidden",
                alignItems: "center",
                justifyContent: "center",
              }}
              resizeMode="cover"
            >
              <BlurView
                intensity={80}
                tint="systemThinMaterialLight"
                style={{
                  // width: "80%",
                  borderRadius: 20,
                  overflow: "hidden",
                  width: "100%",
                  height: "20%",
                  shadowColor: "white",
                  // shadowOffset: { width: 1000, height: 200 },
                  shadowOpacity: 1,
                  shadowRadius: 10,
                }}
              />
              <Text className="text-white text-[12px]  font-AlexLight absolute">
                {item?.title ?? item?.original_name}
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
