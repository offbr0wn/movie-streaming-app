import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { ButtonProps } from "@rneui/themed";
import { ViewStyle } from "react-native";

export interface Navigation {
  navigation: NavigationProp<ParamListBase>;
  route: {
    params: {
      itemId: number;
      mediaType?: string;
      section?: string;

    };
  }
}

export interface ClearButtonProps extends ButtonProps {
  name: string;
  style?: ViewStyle;
  fontSize: string; // Define style prop as ViewStyle or any other appropriate type
  fontFamily: string;
}

export interface MovieItem {
  original_name: string;
  id: number;
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
  id: number;
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
}

export interface RootStateDropDown {
  dropDown: {
    dropDownValue: string;
  };
}


export interface DropDownState {
  dropDown: {
    dropDownValue: string;
  };
}

export interface DropDownInitialState {
  dropDownValue: string;
}