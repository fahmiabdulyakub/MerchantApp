import {COLORS} from '@constants/colors';
import {FONTS} from '@constants/fonts';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.NEUTRAL,
  },
  title: {
    fontFamily: FONTS.MontserratSemiBold,
    fontSize: 24,
    color: COLORS.BLACK,
  },
  phoneNumber: {
    fontFamily: FONTS.MontserratSemiBold,
    fontSize: 14,
    color: COLORS.GRAY,
  },
});
