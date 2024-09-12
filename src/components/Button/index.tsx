import {Text, TouchableOpacity} from 'react-native';
import React, {memo, useMemo} from 'react';
import styles from '@components/Button/styles';
import {IButton} from '@components/Button/types';
import {COLORS} from '@constants/colors';

const Button = (props: IButton) => {
  const {label, style, disabled, textStyle, icon, ...baseProps} = props;
  const containerStyle = useMemo(
    () => [
      styles.container,
      style,
      disabled && {backgroundColor: COLORS.LIGHT_GREY},
    ],
    [disabled, style],
  );
  return (
    <TouchableOpacity style={containerStyle} disabled={disabled} {...baseProps}>
      {icon}
      <Text style={[styles.label, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default memo(Button);
