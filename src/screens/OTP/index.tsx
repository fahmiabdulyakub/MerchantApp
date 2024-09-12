import {Text, KeyboardAvoidingView, Platform} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {OTPProps} from '@screens/OTP/types';
import styles from '@screens/OTP/styles';
import {OTP_LENGTH, RESEND_TIME} from '@screens/OTP/config';
import InputOTP from '@screens/OTP/components/InputOTP';
import ResendOTP from '@screens/OTP/components/ResendOTP';

const OTP = ({route}: OTPProps) => {
  const {phoneNumber} = route.params;
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(''));
  const [timeLeft, setTimeLeft] = useState<number>(RESEND_TIME);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleOtpChange = useCallback((value: string, index: number) => {
    setOtp(prevOtp => {
      const newOtp = [...prevOtp];
      newOtp[index] = value;
      return newOtp;
    });
  }, []);

  const handleResend = useCallback(() => {
    setTimeLeft(RESEND_TIME);
  }, []);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Text style={styles.title}>Verify OTP</Text>
      <Text style={styles.subtitle}>
        Enter the OTP sent to <Text style={styles.phone}>{phoneNumber}</Text>.
      </Text>
      <InputOTP otp={otp} onChange={handleOtpChange} />
      <ResendOTP timeLeft={timeLeft} onResend={handleResend} />
    </KeyboardAvoidingView>
  );
};

export default OTP;
