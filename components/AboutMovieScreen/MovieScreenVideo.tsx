import { Dimensions } from "react-native";
import React, { useRef, useState } from "react";
import { WebView } from "react-native-webview";
import { VIDSCR_ENDPOINT } from "@env";
import { SafeAreaView } from "react-native-safe-area-context";
export default function MovieScreenVideo({
  type,
  itemId,
}: {
  type: string;
  itemId: number;
}) {
  const height = Dimensions.get("window").height;

  return (
    <SafeAreaView
      className="items-center absolute top-0 z-50 flex-row  w-full"
      style={{ height: height / 2 }}
    >
      <WebView
        source={{ uri: `${VIDSCR_ENDPOINT}/${type}?tmdb=${itemId}` }}
        webviewProps={{
          referrerpolicy: "origin",
        }}
        allowsFullscreenVideo={true}
        allowsLinkPreviews={true}
        javaScriptCanOpenWindowsAutomatically={false}
        nestedScrollEnabled={true}
      />
    </SafeAreaView>
  );
}
