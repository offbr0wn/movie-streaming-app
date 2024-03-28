import { View, Text } from "react-native";
import React from "react";
import * as NavigationBar from "expo-navigation-bar";

export default async function BottomNavBar() {


    await NavigationBar.setBehaviorAsync("overlay-swipe");
    await NavigationBar.setBackgroundColorAsync("#ffffff00");
    await NavigationBar.setPositionAsync("absolute");
 
}
