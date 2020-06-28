import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import { CompositeNavigationProp } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
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
type WelcomeScreenRouteProp = RouteProp<BottomTabParamsList, 'WelcomeScreen'>;
type WelcomeScreenNavigationProp = BottomTabNavigationProp<
  BottomTabParamsList,
  'WelcomeScreen'
>;

export type WelcomeScreenProps = {
  navigation: WelcomeScreenNavigationProp;
  route: WelcomeScreenRouteProp;
};

//CalendarScreen
type CalendarScreenRouteProp = RouteProp<BottomTabParamsList, 'CalendarScreen'>;
type CalendarScreenNavigationProp = BottomTabNavigationProp<
  BottomTabParamsList,
  'CalendarScreen'
>;

export type CalendarScreenProps = {
  navigation: CalendarScreenNavigationProp;
  route: CalendarScreenRouteProp;
};

//ApiariesStack
type ApiariesStackRouteProp = RouteProp<
  ApiariesDrawerParamsList,
  'ApiariesStack'
>;
export type ApiariesStackNavigationProp = DrawerNavigationProp<
  ApiariesDrawerParamsList,
  'ApiariesStack'
>;

export type ApiariesStackProps = {
  navigation: ApiariesStackNavigationProp;
  route: ApiariesStackRouteProp;
};

//NewApiaryStack
type NewApiaryStackRouteProp = RouteProp<
  ApiariesDrawerParamsList,
  'NewApiaryStack'
>;
export type NewApiaryStackNavigationProp = DrawerNavigationProp<
  ApiariesDrawerParamsList,
  'NewApiaryStack'
>;

export type NewApiaryStackProps = {
  navigation: NewApiaryStackNavigationProp;
  route: NewApiaryStackRouteProp;
};

//ApiariesScreen
type ApiariesScreenRouteProp = RouteProp<ApiariesStackParamsList, 'Apiaries'>;
type ApiariesScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<ApiariesStackParamsList, 'Apiaries'>,
  CompositeNavigationProp<
    DrawerNavigationProp<ApiariesDrawerParamsList>,
    BottomTabNavigationProp<BottomTabParamsList>
  >
>;

export type ApiariesScreenProps = {
  navigation: ApiariesScreenNavigationProp;
  route: ApiariesScreenRouteProp;
};

//NewApiaryScreen
type NewApiaryScreenRouteProp = RouteProp<
  NewApiaryStackParamsList,
  'NewApiary'
>;
export type NewApiaryScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<NewApiaryStackParamsList, 'NewApiary'>,
  CompositeNavigationProp<
    DrawerNavigationProp<ApiariesDrawerParamsList>,
    BottomTabNavigationProp<BottomTabParamsList>
  >
>;

export type NewApiaryScreenProps = {
  navigation: NewApiaryScreenNavigationProp;
  route: NewApiaryScreenRouteProp;
};
