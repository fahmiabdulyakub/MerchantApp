import {StyleSheet} from 'react-native';
import {COLORS} from '@constants/colors';
import {FONTS} from '@constants/fonts';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  countryCode: {
    fontFamily: FONTS.MontserratSemiBold,
    fontSize: 14,
    color: COLORS.BLACK,
  },
  separator: {
    height: 15,
    backgroundColor: COLORS.LIGHT_GREY,
    width: 1,
    marginLeft: 8,
  },
});
