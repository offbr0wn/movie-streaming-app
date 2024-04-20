import { View, Text, Dimensions } from "react-native";
import React, { useRef, useState } from "react";
import { StyleSheet, Button } from "react-native";
import { WebView } from "react-native-webview";
import ReactPlayer from "react-player/lazy";
import Video from "react-native-video";
import { VIDSCR_ENDPOINT } from "@env";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MovieScreenVideo({
  type,
  itemId,
}: {
  type: string;
  itemId: number;
}) {
  // const videoRef = useRef(null);
  // const background = require('./background.mp4');
  const height = Dimensions.get("window").height;
  console.log(type)
  return (
    <SafeAreaView
      className="items-center absolute top-0 z-50 flex-row  w-full"
      style={{ height: height /2 }}
    >
      <WebView source={{ uri: `${VIDSCR_ENDPOINT}/${type}?tmdb=${itemId}` }} />
    </SafeAreaView>
  );
}
