import {Text, ActivityIndicator, View} from 'react-native';
import React from 'react';
import {OTPProps} from '@screens/OTP/types';
import styles from '@screens/OTP/styles';
import InputOTP from '@screens/OTP/components/InputOTP';
import ResendOTP from '@screens/OTP/components/ResendOTP';
import useOTP from '@screens/OTP/hooks/useOTP';
import {COLORS} from '@constants/colors';

const OTP = ({route}: OTPProps) => {
  const {phoneNumber} = route.params;
  const {
    otp,
    timeLeft,
    isLoading,
    isError,
    errorMessage,
    handleOtpChange,
    handleResend,
  } = useOTP(route.params);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify OTP</Text>
      <Text style={styles.subtitle}>
        Enter the OTP sent to <Text style={styles.phone}>{phoneNumber}</Text>.
      </Text>
      <InputOTP
        isError={isError}
        otp={otp}
        onChangeOtp={handleOtpChange}
        editable={!isLoading}
      />
      {isLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator color={COLORS.GREEN} size={'large'} />
        </View>
      ) : (
        <>
          {isError && <Text style={styles.error}>{errorMessage}</Text>}
          <ResendOTP timeLeft={timeLeft} onResend={handleResend} />
        </>
      )}
    </View>
  );
};

export default OTP;
