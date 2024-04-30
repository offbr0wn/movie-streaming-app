import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { ButtonProps } from "@rneui/themed";
import {
  PressableAndroidRippleConfig,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";

import { Event, Scene } from "react-native-tab-view/lib/typescript/src/types";
import {
  NavigationState,
  Route,
  TabBarIndicatorProps,
  TabBarItemProps,
} from "react-native-tab-view";

export interface Navigation {
  navigation: NavigationProp<ParamListBase>;
  route?: {
    params: {
      itemId: number;
      mediaType?: string;
      section?: string;
    };
  };
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

export interface TabBarProp {
  navigationState: NavigationState<Route>;
  scrollEnabled?: boolean | undefined;
  bounces?: boolean | undefined;
  activeColor?: string | undefined;
  inactiveColor?: string | undefined;
  pressColor?: string | undefined;
  pressOpacity?: number | undefined;
  getLabelText?: ((scene: Scene<Route>) => string | undefined) | undefined;
  getAccessible?: ((scene: Scene<Route>) => boolean | undefined) | undefined;
  getAccessibilityLabel?:
    | ((scene: Scene<Route>) => string | undefined)
    | undefined;
  getTestID?: ((scene: Scene<Route>) => string | undefined) | undefined;
  renderLabel?:
    | ((
        scene: Scene<Route> & { focused: boolean; color: string }
      ) => React.ReactNode)
    | undefined;
  renderIcon?:
    | ((
        scene: Scene<Route> & { focused: boolean; color: string }
      ) => React.ReactNode)
    | undefined;
  renderBadge?: ((scene: Scene<Route>) => React.ReactNode) | undefined;
  renderIndicator?:
    | ((props: TabBarIndicatorProps<Route>) => React.ReactNode)
    | undefined;
  renderTabBarItem?:
    | ((
        props: TabBarItemProps<Route> & { key: string }
      ) => React.ReactElement<any, string | React.JSXElementConstructor<any>>)
    | undefined;
  onTabPress?: ((scene: Scene<Route> & Event) => void) | undefined;
  onTabLongPress?: ((scene: Scene<Route>) => void) | undefined;
  tabStyle?: StyleProp<ViewStyle>;
  indicatorStyle?: StyleProp<ViewStyle>;
  indicatorContainerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  gap?: number | undefined;
  testID?: string | undefined;
  android_ripple?: PressableAndroidRippleConfig | undefined;
}

export interface MasonryMovieListProp {
  poster_path: string;
  title: string;
  original_name?: string;
  release_date?: string;
  first_air_date?: string;
}
