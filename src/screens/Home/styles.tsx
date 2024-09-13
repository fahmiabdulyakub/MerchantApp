import {COLORS} from '@constants/colors';
import {FONTS} from '@constants/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  topContainer: {
    height: 100,
    backgroundColor: COLORS.GREEN,
  },
  title: {
    fontFamily: FONTS.MontserratBold,
    fontSize: 14,
    color: COLORS.GRAY,
  },
  searchContainer: {
    width: '100%',
    position: 'absolute',
    top: 95,
  },
  search: {
    borderRadius: 80,
    marginHorizontal: 16,
    borderColor: COLORS.NEUTRAL,
  },
});
