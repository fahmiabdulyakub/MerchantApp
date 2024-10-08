import {COLORS} from '@constants/colors';
import {FONTS} from '@constants/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 8,
  },
  title: {
    fontFamily: FONTS.MontserratBold,
    fontSize: 14,
    color: COLORS.GRAY,
    marginBottom: 16,
    marginLeft: 8,
    marginTop: 48,
  },
  loading: {
    marginTop: 64,
  },
});
