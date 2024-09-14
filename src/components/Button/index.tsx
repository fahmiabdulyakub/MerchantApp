import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import React, {memo, useMemo} from 'react';
import styles from '@components/Button/styles';
import {IButton} from '@components/Button/types';
import {COLORS} from '@constants/colors';

const Button = (props: IButton) => {
  const {label, isLoading, style, disabled, textStyle, icon, ...baseProps} =
    props;

  const containerStyle = useMemo(
    () => [
      icon ? styles.iconContainer : styles.container,
      style,
      disabled && label && {backgroundColor: COLORS.LIGHT_GREY},
    ],
    [disabled, icon, label, style],
  );

  const labelStyle = useMemo(
    () => [styles.label, textStyle, icon && label && {marginLeft: 8}],
    [textStyle, icon, label],
  );

  return (
    <TouchableOpacity
      style={containerStyle}
      disabled={disabled || isLoading}
      {...baseProps}>
      {isLoading ? (
        <ActivityIndicator size="small" color={COLORS.WHITE} />
      ) : (
        <View style={styles.contentContainer}>
          {icon}
          {label && <Text style={labelStyle}>{label}</Text>}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default memo(Button);
