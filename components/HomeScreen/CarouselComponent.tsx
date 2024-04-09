import { View, Dimensions } from "react-native";
import React, { useState } from "react";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import CardComponent from "./CardComponent";
import { MovieItem } from "../../types/interface";

export default function CarouselComponent({ data: dataProp }: { data: MovieItem[] }) {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const ref = React.useRef<ICarouselInstance>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View className="flex-row items-center justify-start pt-[50px]  ">
      <Carousel
        ref={ref as React.RefObject<ICarouselInstance>}
        
        // autoPlay={true}
        width={width}
        height={height / 2.2}
        data={dataProp}
        scrollAnimationDuration={20}
        onProgressChange={() => {
          setCurrentIndex(ref.current?.getCurrentIndex() ?? 0);
        }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 1,
          parallaxScrollingOffset: 250,
          parallaxAdjacentItemScale: 0.6,
        }}
        withAnimation={{
          type: "spring",
          config: {
            damping: 15,
          },
        }}
        renderItem={({ index, item }) => (
          <CardComponent
            index={index}
            currentIndex={currentIndex}
            item={item}
          />
        )}
      />
    </View>
  );
}

