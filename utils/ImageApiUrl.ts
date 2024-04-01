import { View, Text } from "react-native";
import React from "react";
import { IMG_BASE_URL } from "@env";

export const ImageApiUrl = (path: string) => `${IMG_BASE_URL}/original${path}`;
