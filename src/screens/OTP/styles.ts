import {COLORS} from '@constants/colors';
import {FONTS} from '@constants/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: COLORS.WHITE,
  },
  title: {
    fontSize: 18,
    fontFamily: FONTS.MontserratBold,
    marginBottom: 10,
    color: COLORS.BLACK,
  },
  subtitle: {
    fontFamily: FONTS.MontserratRegular,
    fontSize: 14,
    marginBottom: 30,
    color: COLORS.BLACK,
  },
  phone: {
    fontSize: 14,
    fontFamily: FONTS.MontserratBold,
    color: COLORS.BLACK,
  },
  loading: {
    alignItems: 'center',
  },
  error: {
    fontSize: 14,
    fontFamily: FONTS.MontserratRegular,
    color: COLORS.RED,
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default styles;
