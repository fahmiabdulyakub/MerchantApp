import {Text, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import {IResendOTP} from '@screens/OTP/types';
import styles from '@screens/OTP/components/ResendOTP/styles';

const ResendOTP = ({timeLeft, onResend}: IResendOTP) =>
  timeLeft > 0 ? (
    <Text style={styles.resendText}>
      Re-send OTP in {<Text style={styles.greenText}>{timeLeft}</Text>} seconds
    </Text>
  ) : (
    <TouchableOpacity onPress={onResend}>
      <Text style={styles.greenText}>Resend OTP</Text>
    </TouchableOpacity>
  );

export default memo(ResendOTP);
