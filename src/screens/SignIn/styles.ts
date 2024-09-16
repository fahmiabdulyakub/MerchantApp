import {StyleSheet} from 'react-native';
import {COLORS} from '@constants/colors';
import {FONTS} from '@constants/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    padding: 16,
    paddingTop: 32,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontFamily: FONTS.MontserratBold,
    fontSize: 18,
    color: COLORS.BLACK,
    marginBottom: 24,
  },
  error: {
    fontSize: 14,
    fontFamily: FONTS.MontserratRegular,
    color: COLORS.RED,
    marginTop: 16,
    textAlign: 'center',
  },
});
