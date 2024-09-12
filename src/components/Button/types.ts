import {StyleProp, TextStyle, TouchableOpacityProps} from 'react-native';

export type IButton = {
  label: string;
  isLoading?: boolean;
  icon?: JSX.Element;
  textStyle?: StyleProp<TextStyle>;
} & TouchableOpacityProps;
