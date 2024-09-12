import {StyleProp, TextStyle, TouchableOpacityProps} from 'react-native';

export type IButton = {
  label: string;
  icon?: JSX.Element;
  textStyle?: StyleProp<TextStyle>;
} & TouchableOpacityProps;
