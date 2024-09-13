import {COLORS} from '@constants/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
