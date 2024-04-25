import { View, Text } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";

import * as Progress from "react-native-progress";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

export default function LoadingScreen() {
  return (
    <LinearGradient
      colors={[
        "rgba(0, 209, 255, 0.3)",
        "rgba(135, 91, 229, 0.2)",
        "rgba(237, 34, 34, 0.25)",
      ]}
      start={{ x: 0.4, y: 0 }}
      end={{ x: 0, y: 0.8 }}
      locations={[0, 0.6, 1]}
      className="flex-1 bg-[#15151B] justify-center items-center"
    >
      <SafeAreaView className="">
        <View>
          <Text
            // // transition={{ rotate: 1000 }}
            className="text-[30px] my-5 text-white font-AlexBold text-center"
          >
            Loading...
          </Text>

          <Animatable.View
            animation="slideInUp"
            iterationCount={1}
            direction="alternate"
            easing={"ease-in-out-expo"}
          >
            <Progress.Bar
              borderColor="white"
              width={180}
              indeterminate={true}
              height={8}
              useNativeDriver={true}
              color="red"
            />
          </Animatable.View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
