import {StyleSheet} from 'react-native';
import {COLORS} from '@constants/colors';
import {FONTS} from '@constants/fonts';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 54,
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: COLORS.WHITE,
    borderWidth: 1,
    borderColor: COLORS.LIGHT_GREY,
  },
  input: {
    fontSize: 14,
    fontFamily: FONTS.MontserratRegular,
    color: COLORS.BLACK,
    flex: 1,
    top: 1,
  },
});
