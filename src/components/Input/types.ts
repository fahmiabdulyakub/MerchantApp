import {TextInputProps} from 'react-native';

export type IInput = {
  left?: JSX.Element;
  right?: JSX.Element;
} & TextInputProps;
