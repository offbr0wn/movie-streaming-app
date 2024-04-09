import { View, Text } from "react-native";
import React from "react";
import { IMG_BASE_URL } from "@env";

export const ImageApiUrl = (path: string) =>path ? `${IMG_BASE_URL}/original${path}` : 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg';
export const ImageApiUrlW100 = (path: string) => `${IMG_BASE_URL}/original${path}`;

