import { View, Text } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";

import * as Progress from "react-native-progress";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoadingScreen() {
  return (
    <SafeAreaView className="flex-1  bg-gray-800 justify-center items-center">
      <View>
        <Animatable.Text
          animation="slideInUp"
          iterationCount={1}
          direction="alternate"
          easing={"ease-in"}
          // // transition={{ rotate: 1000 }}
          className="text-[30px] my-10 text-white font-AlexBold text-center"
        >
          Loading...
        </Animatable.Text>

        <Progress.CircleSnail size={140} color={["red", "green", "blue"]} />
      </View>
    </SafeAreaView>
  );
}
