import {COLORS} from '@constants/colors';
import {FONTS} from '@constants/fonts';

export const MAIN_TABS_OPTIONS = {
  tabBarActiveTintColor: COLORS.GREEN,
  tabBarInactiveTintColor: COLORS.LIGHT_GREY,
  tabBarStyle: {height: 65},
  tabBarLabelStyle: {
    fontFamily: FONTS.MontserratSemiBold,
    fontSize: 12,
    lineHeight: 19,
    marginBottom: 8,
  },
  tabBarIconStyle: {marginTop: 13},
  tabBarHideOnKeyboard: true,
  headerShown: false,
};
