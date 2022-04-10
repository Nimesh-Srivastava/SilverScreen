// /**
//  * Learn more about using TypeScript with React Navigation:
//  * https://reactnavigation.org/docs/typescript/
//  */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type HomeParamList = {
  HomeScreen: undefined;
  DetailsScreen: undefined;
};

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  Home: undefined;
  Coming_soon: undefined;
  Search: undefined;
  Downloads: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type Episode = {
  id: string,
  title: string,
  poster: string,
  duration: string,
  plot: string,
  video: string,
}

// export type RootStackParamList = {
//   Root: undefined;
//   NotFound: undefined;
// };

// export type BottomTabParamList = {
//   Home: undefined;
//   Coming_Soon: undefined;
//   Search: undefined;
//   Downloads: undefined;
// };

// export type HomeParamList = {
//   HomeScreen: undefined;
//   DetailsScreen: undefined;
// };

// export type TabTwoParamList = {
//   TabTwoScreen: undefined;
// };

// export type Episode = {
//   id: string,
//   title: string,
//   poster: string,
//   duration: string,
//   plot: string,
//   video: string,
// }