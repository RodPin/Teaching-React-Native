import React from 'react';
import {createAppContainer} from 'react-navigation';
import AxiosPage from '../pages/AxiosPage';
import UserPage from '../pages/UserPage';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Feather';
import {primary} from '../utils/colors';

const ICON_SIZE = 26;
const AppTabs = createBottomTabNavigator(
  {
    AxiosPage: {
      screen: AxiosPage,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="database" size={ICON_SIZE} color={tintColor} />
        ),
      },
    },
    UserPage: {
      screen: UserPage,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="user" size={ICON_SIZE} color={tintColor} />
        ),
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    initialRoute: 'Main',
    tabBarOptions: {
      activeTintColor: primary,
      showLabel: false,
      indicatorStyle: {
        opacity: 0,
      },
      style: {
        backgroundColor: 'white',
        // borderTopColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: {width: 5, height: 10},
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 3,
      },
    },
  },
);

console.disableYellowBox = true;
const AppNavigator = createAppContainer(AppTabs);

export default AppNavigator;
