import { View, Text } from "react-native";
import React from "react";
import { IMG_BASE_URL } from "@env";

export const ImageApiUrl = (path: string) =>
  path
    ? `${IMG_BASE_URL}/w500${path}`
    : "http://aimint.org/ap/wp-content/uploads/sites/18/2016/04/image-placeholder-vertical.jpg";
export const ImageApiUrlBackdrop = (path: string) =>
  path
    ? `${IMG_BASE_URL}/original${path}`
    : "http://aimint.org/ap/wp-content/uploads/sites/18/2016/04/image-placeholder-vertical.jpg";