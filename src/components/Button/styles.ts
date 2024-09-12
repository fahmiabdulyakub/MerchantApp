import {COLORS} from '@constants/colors';
import {FONTS} from '@constants/fonts';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.GREEN,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    fontFamily: FONTS.MontserratSemiBold,
    color: COLORS.WHITE,
  },
});
