import {useEncryptedToken} from '@hooks';
import {useCallback, useEffect, useMemo, useState} from 'react';
import {reset} from '@lib/navigation/utils';
import {RouteNames} from '@lib/navigation/routes';
import {IOTP} from '@screens/OTP/types';
import {OTP_LENGTH, RESEND_TIME} from '@screens/OTP/config';
import {verifyOTP} from '@services';

const useOTP = (params: IOTP) => {
  const {session_id} = params;
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(''));
  const [error, setError] = useState<ErrorResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number>(RESEND_TIME);
  const {saveToken} = useEncryptedToken();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleOtpChange = useCallback(
    async (value: string, index: number) => {
      setIsError(false);
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index === OTP_LENGTH - 1) {
        setIsLoading(true);
        const response = await verifyOTP({otp: newOtp.join(''), session_id});
        if (response?.data.token) {
          saveToken(response.data.token);
          reset(RouteNames.MAIN_APP);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setIsError(true);
          setError(response?.errors);
          setOtp(Array(OTP_LENGTH).fill(''));
        }
      }
    },
    [otp, session_id, saveToken],
  );

  const handleResend = useCallback(() => {
    setTimeLeft(RESEND_TIME);
  }, []);

  const errorMessage = useMemo(
    () => error?.message ?? 'Invalid OTP provided, please try again.',
    [error],
  );

  return useMemo(
    () => ({
      otp,
      timeLeft,
      isLoading,
      isError,
      errorMessage,
      handleOtpChange,
      handleResend,
    }),
    [
      otp,
      timeLeft,
      isLoading,
      isError,
      errorMessage,
      handleOtpChange,
      handleResend,
    ],
  );
};

export default useOTP;
