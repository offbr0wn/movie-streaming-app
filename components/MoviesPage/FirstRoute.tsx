import React from "react";
import { View } from "react-native";
import { MasonryFlashList } from "@shopify/flash-list";

import MasonryMovieList from "./MasonryMovieList";

export const FirstRoute = ({topRated}) => {


  return (
    <View className="flex-1 pt-[20px] ">
      <MasonryFlashList
        data={topRated?.results}
        numColumns={2}
        renderItem={({ item, index }) => (
          <MasonryMovieList item={item} index={index} />
        )}
        estimatedItemSize={50}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
