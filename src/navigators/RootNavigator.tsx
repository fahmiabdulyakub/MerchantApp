import React, {useCallback} from 'react';
import BottomTabNavigator from '@navigators/BottomTabNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {AppParamList} from '@lib/navigation/types';
import {RouteNames} from '@lib/navigation/routes';
import {OTP, SignIn, Splash} from '@screens';
import {navigationRef} from '@lib/navigation/utils';
import {BackButton} from '@components';
import {StatusBar} from 'react-native';
import {COLORS} from '@constants/colors';

const Stack = createNativeStackNavigator<AppParamList>();

const RootNavigator = () => {
  const headerLeft = useCallback(() => {
    return <BackButton />;
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar backgroundColor={COLORS.WHITE} barStyle="dark-content" />
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={RouteNames.SPLASH}>
        <Stack.Screen name={RouteNames.SPLASH} component={Splash} />
        <Stack.Screen
          name={RouteNames.MAIN_APP}
          component={BottomTabNavigator}
        />
        <Stack.Screen name={RouteNames.SIGN_IN} component={SignIn} />
        <Stack.Screen
          name={RouteNames.OTP}
          component={OTP}
          options={{
            title: '',
            headerShown: true,
            headerLeft,
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
