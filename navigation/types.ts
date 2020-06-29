import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

//ParamsList
export type NewApiaryStackParamsList = {
  NewApiary: undefined;
};

export type ApiariesStackParamsList = {
  Apiaries: undefined;
};

export type ApiariesDrawerParamsList = {
  ApiariesStack: undefined;
  NewApiaryStack: undefined;
};

export type BottomTabParamsList = {
  WelcomeScreen: undefined;
  ApiariesDrawer: undefined;
  CalendarScreen: undefined;
};

// WelcomeScreen
export type WelcomeScreenProps = BottomTabScreenProps<
  BottomTabParamsList,
  'WelcomeScreen'
>;

//CalendarScreen
export type CalendarScreenProps = BottomTabScreenProps<
  BottomTabParamsList,
  'CalendarScreen'
>;

//ApiariesStack
export type ApiariesStackNavigationProp = DrawerNavigationProp<
  ApiariesDrawerParamsList,
  'ApiariesStack'
>;
export type ApiariesStackProps = NavigationRouteProps<
  ApiariesStackNavigationProp,
  RouteProp<ApiariesDrawerParamsList, 'ApiariesStack'>
>;

//NewApiaryStack
export type NewApiaryStackNavigationProp = DrawerNavigationProp<
  ApiariesDrawerParamsList,
  'NewApiaryStack'
>;

export type NewApiaryStackProps = NavigationRouteProps<
  NewApiaryStackNavigationProp,
  RouteProp<ApiariesDrawerParamsList, 'NewApiaryStack'>
>;

//ApiariesScreen
type ApiariesScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<ApiariesStackParamsList, 'Apiaries'>,
  CompositeNavigationProp<
    DrawerNavigationProp<ApiariesDrawerParamsList>,
    BottomTabNavigationProp<BottomTabParamsList>
  >
>;

export type ApiariesScreenProps = NavigationRouteProps<
  ApiariesScreenNavigationProp,
  RouteProp<ApiariesStackParamsList, 'Apiaries'>
>;

//NewApiaryScreen
export type NewApiaryScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<NewApiaryStackParamsList, 'NewApiary'>,
  CompositeNavigationProp<
    DrawerNavigationProp<ApiariesDrawerParamsList>,
    BottomTabNavigationProp<BottomTabParamsList>
  >
>;

export type NewApiaryScreenProps = NavigationRouteProps<
  NewApiaryScreenNavigationProp,
  RouteProp<NewApiaryStackParamsList, 'NewApiary'>
>;

// generic
export type NavigationRouteProps<T, S> = {
  navigation: T;
  route: S;
};
