import {COLORS} from '@constants/colors';
import {FONTS} from '@constants/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  text: {
    fontFamily: FONTS.MontserratBold,
    fontSize: 18,
    color: COLORS.BLACK,
  },
});
