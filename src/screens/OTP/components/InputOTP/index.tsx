import {View, TextInput} from 'react-native';
import React, {memo, useCallback, useRef, useEffect} from 'react';
import {IInputOTP} from '@screens/OTP/types';
import styles from '@screens/OTP/components/InputOTP/styles';
import {COLORS} from '@constants/colors';

const InputOTP = ({
  otp,
  isError,
  onChangeOtp,
  style,
  ...baseProps
}: IInputOTP) => {
  const inputRefs = useRef<TextInput[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = useCallback(
    (value: string, index: number) => {
      onChangeOtp(value, index);
      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      } else if (!value && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    },
    [onChangeOtp, otp.length],
  );

  const handleKeyPress = useCallback(
    (index: number) =>
      ({nativeEvent}: {nativeEvent: {key: string}}) => {
        if (nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
          inputRefs.current[index - 1]?.focus();
          onChangeOtp('', index - 1);
        }
      },
    [otp, onChangeOtp],
  );

  const renderInput = useCallback(
    (digit: string, index: number) => {
      const onChangeText = (value: string) => handleChange(value, index);
      const onKeyPress = handleKeyPress(index);
      const borderColor = {
        borderColor: isError
          ? COLORS.RED
          : inputRefs.current[index]?.isFocused()
          ? COLORS.GREEN
          : COLORS.LIGHT_GREY,
      };
      const onFocus = () => inputRefs.current[index]?.focus();
      return (
        <TextInput
          key={index}
          style={[styles.input, borderColor, style]}
          value={digit}
          onChangeText={onChangeText}
          keyboardType="numeric"
          maxLength={1}
          ref={ref => (inputRefs.current[index] = ref!)}
          onKeyPress={onKeyPress}
          onFocus={onFocus}
          {...baseProps}
        />
      );
    },
    [handleChange, handleKeyPress, isError, baseProps, style],
  );

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => renderInput(digit, index))}
    </View>
  );
};

export default memo(InputOTP);
