import {COLORS} from '@constants/colors';
import {FONTS} from '@constants/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  resendText: {
    fontFamily: FONTS.MontserratRegular,
    fontSize: 14,
    color: COLORS.BLACK,
  },
  greenText: {
    fontFamily: FONTS.MontserratBold,
    fontSize: 14,
    color: COLORS.GREEN,
  },
});

export default styles;
