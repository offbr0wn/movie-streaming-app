import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { ButtonProps } from "@rneui/themed";
import { ViewStyle } from "react-native";

export interface Navigation {
  navigation: NavigationProp<ParamListBase>;
}

export interface ClearButtonProps extends ButtonProps {
  name: string;
  style?: ViewStyle;
  fontSize: string; // Define style prop as ViewStyle or any other appropriate type
  fontFamily: string;
}

export interface CardIndex {
  index: number;
  currentIndex: number;
}

