import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { FlashList } from "@shopify/flash-list";
import { BlurView } from "expo-blur";
import { useGetSimilarQuery } from "../redux/api/api";
import { ImageApiUrl } from "../utils/ImageApiUrl";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootStateDropDown } from "../types/interface";
import LoadingScreen from "../utils/LoadingScreen";

interface SimilarMovieCardProps {
  movieId: number;
  params?: {
    section?: string;
    mediaType?: string;
  };
}

export default function SimilarMovieCard({
  movieId,
  params,
}: SimilarMovieCardProps) {
  const navigation = useNavigation();
  const selectDropDownValue = useSelector(
    (state: RootStateDropDown) => state?.dropDown?.dropDownValue
  );
  const { data: similarMovies } = useGetSimilarQuery({
    type: params?.section ? params?.mediaType : selectDropDownValue,
    id: movieId,
  });

  const width = 100;
  const height = 150;
  return (
    <View
      className={`flex-row  w-[${
        Dimensions.get("screen").width
      }] h-[${height}] `}
    >
      {similarMovies?.results && (
        <FlashList
          //   ref={flashListRef}
          data={similarMovies.results ? similarMovies?.results : []}
          horizontal={true}
          ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
          showsHorizontalScrollIndicator={false}
          estimatedItemSize={10}
          estimatedListSize={{ width: width +10, height: height +10}}
          renderItem={({
            item,
          }: {
            item: {
              title?: string;
              poster_path: string;
              id: number;
              original_name?: string;
            };
          }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("AboutMovieScreen", { itemId: item.id })
              }
            >
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
      )}
    </View>
  );
}
