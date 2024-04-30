import React from "react";
import { View } from "react-native";
import { MasonryFlashList } from "@shopify/flash-list";
import { MasonryMovieList } from "./MasonryMovieList";
import { MasonryMovieListProp } from "../../types/interface";

export const FirstRoute = ({ topRated }): JSX.Element => {
  return (
    <View className="flex-1 pt-[20px] ">
      <MasonryFlashList
        data={topRated?.results}
        numColumns={2}
        fadingEdgeLength={50}
        renderItem={({ item, index }) => (
          <MasonryMovieList item={item as MasonryMovieListProp} index={index} />
        )}
        estimatedItemSize={10}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
