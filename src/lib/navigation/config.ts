import {COLORS} from '@constants/colors';
import {FONTS} from '@constants/fonts';
import {isAndroid, isIOS} from '@utils/DeviceInfoUtils';

export const MAIN_TABS_OPTIONS = {
  tabBarActiveTintColor: COLORS.GREEN,
  tabBarInactiveTintColor: COLORS.LIGHT_GREY,
  tabBarStyle: {height: isAndroid ? 65 : 85},
  tabBarLabelStyle: {
    fontFamily: FONTS.MontserratSemiBold,
    fontSize: 12,
    lineHeight: 19,
    marginBottom: isIOS ? 0 : 8,
  },
  tabBarIconStyle: {marginTop: 13},
  tabBarHideOnKeyboard: true,
  headerShown: false,
};
