import { View, Text } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";

import * as Progress from "react-native-progress";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoadingScreen() {
  return (
    <SafeAreaView className="flex-1  bg-gray-800 justify-center items-center">
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
  );
}
