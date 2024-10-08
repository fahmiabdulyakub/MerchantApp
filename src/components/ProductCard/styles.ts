import {COLORS} from '@constants/colors';
import {FONTS} from '@constants/fonts';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginBottom: 16,
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginHorizontal: 8,
    width: 168,
  },
  imageContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  image: {
    width: 100,
    height: 150,
  },
  name: {
    fontSize: 12,
    fontFamily: FONTS.MontserratSemiBold,
    color: COLORS.GRAY,
    textAlign: 'center',
  },
});
