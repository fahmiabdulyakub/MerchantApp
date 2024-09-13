import {View, TextInput} from 'react-native';
import React, {memo} from 'react';
import styles from '@components/Input/styles';
import {IInput} from '@components/Input/types';
import {COLORS} from '@constants/colors';

const Input = (props: IInput) => {
  const {left, right, style, ...baseProps} = props;
  return (
    <View style={[styles.container, style]}>
      {left}
      <TextInput
        style={styles.input}
        placeholderTextColor={COLORS.GRAY}
        numberOfLines={5}
        {...baseProps}
      />
      {right}
    </View>
  );
};

export default memo(Input);
