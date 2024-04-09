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

export interface MovieItem {
  original_name: string;
  id: never;
  backdrop_path: string;

  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface CardIndex {
  index: number;
  currentIndex: number;
  item: MovieItem;
}


export interface CastItem {
  id: number;
  cast: Cast[];
}

export interface Cast {
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
}
