import {COLORS} from '@constants/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.GREEN,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.GRAY_SMOKE,
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
  loading: {
    marginTop: 64,
  },
});
