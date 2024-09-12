import {View, TextInput} from 'react-native';
import React, {memo, useCallback, useRef} from 'react';
import {IInputOTP} from '@screens/OTP/types';
import styles from '@screens/OTP/components/InputOTP/styles';
import {COLORS} from '@constants/colors';

const InputOTP = ({otp, onChange}: IInputOTP) => {
  const inputRefs = useRef<TextInput[]>([]);

  const handleKeyPress = useCallback(
    (index: number) =>
      ({nativeEvent}: {nativeEvent: {key: string}}) => {
        if (nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
          inputRefs.current[index - 1].focus();
        }
        inputRefs.current[index + 1].focus();
      },
    [otp],
  );

  const renderInput = useCallback(
    (digit: string, index: number) => {
      const onChangeText = (value: string) => onChange(value, index);
      const borderColor = inputRefs.current[index]?.isFocused() && {
        borderColor: COLORS.GREEN,
      };
      const onKeyPress = () => handleKeyPress(index);
      return (
        <TextInput
          key={index}
          style={[styles.input, borderColor]}
          value={digit}
          onChangeText={onChangeText}
          keyboardType="numeric"
          maxLength={1}
          ref={ref => (inputRefs.current[index] = ref!)}
          onKeyPress={onKeyPress}
        />
      );
    },
    [handleKeyPress, onChange, inputRefs],
  );

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => renderInput(digit, index))}
    </View>
  );
};

export default memo(InputOTP);
