import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ICHome, ICProfile, ICShop, ICWallet} from '@assets/icons';
import {MAIN_TABS_OPTIONS} from '@lib/navigation/config';
import {RouteNames} from '@lib/navigation/routes';
import {Home, Manage, Profile, Shop} from '@screens';

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={MAIN_TABS_OPTIONS}
      initialRouteName={RouteNames.HOME}>
      <Tab.Screen
        name={RouteNames.HOME}
        component={Home}
        options={{title: 'Home', tabBarIcon: ICHome}}
      />
      <Tab.Screen
        name={RouteNames.SHOP}
        component={Shop}
        options={{title: 'Shop', tabBarIcon: ICShop}}
      />
      <Tab.Screen
        name={RouteNames.MANAGE}
        component={Manage}
        options={{title: 'Manage', tabBarIcon: ICWallet}}
      />
      <Tab.Screen
        name={RouteNames.PROFILE}
        component={Profile}
        options={{title: 'Profile', tabBarIcon: ICProfile}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
