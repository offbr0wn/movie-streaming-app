import { View, Dimensions } from "react-native";
import React, { useState } from "react";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import CardComponent from "./CardComponent";
import { MovieItem } from "../../types/interface";

export default function CarouselComponent({
  data: dataProp,
}: {
  data: MovieItem[];
}) {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const ref = React.useRef<ICarouselInstance>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View className="flex-row items-center justify-start pt-[5%] mb-[-5%] ">
      <Carousel
        ref={ref as React.RefObject<ICarouselInstance>}
        windowSize={1}
        width={width}
        snapEnabled={true}
        height={height / 2.2}
        data={dataProp}
        scrollAnimationDuration={0.5}

        onProgressChange={() => {
          setCurrentIndex(ref.current?.getCurrentIndex() ?? 0);
        }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 1,
          parallaxScrollingOffset: 260,
          parallaxAdjacentItemScale: 0.6,
        }}
        withAnimation={{
          type: "spring",
          config: {
            damping: 15,
          },
        }}
        autoFillData={true}
        overscrollEnabled={false}
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
