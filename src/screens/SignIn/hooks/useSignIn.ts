import {COLORS} from '@constants/colors';
import {RouteNames} from '@lib/navigation/routes';
import {navigate} from '@lib/navigation/utils';
import {useCallback, useMemo, useState} from 'react';
import {COUNTRY_CODE} from '@screens/SignIn/config';
import {sendOTP} from '@services';

const useSignIn = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ErrorResponse>();
  const [isErrorPhoneNumber, setIsErrorPhoneNumber] = useState(true);

  const onChangeText = useCallback((value: string) => {
    const phoneNumberRegex = /^\d{8,}$/;
    setPhoneNumber(value);
    setIsErrorPhoneNumber(!phoneNumberRegex.test(value));
  }, []);

  const borderInputStyle = useMemo(
    () =>
      phoneNumber
        ? {
            borderColor:
              isErrorPhoneNumber && phoneNumber ? COLORS.RED : COLORS.GREEN,
          }
        : undefined,
    [isErrorPhoneNumber, phoneNumber],
  );

  const onPressContinue = useCallback(async () => {
    setIsLoading(true);
    const response = await sendOTP({
      country_dialling_code: COUNTRY_CODE.dial_code.replace('+', ''),
      mobile_number: phoneNumber,
    });

    if (response?.data.session_id) {
      setIsLoading(false);
      navigate(RouteNames.OTP, {
        phoneNumber: COUNTRY_CODE.dial_code + phoneNumber,
        session_id: response.data.session_id,
      });
    } else {
      setError(response?.errors);
      setIsErrorPhoneNumber(true);
      setIsLoading(false);
    }
  }, [phoneNumber]);

  return useMemo(
    () => ({
      isLoading,
      isErrorPhoneNumber,
      phoneNumber,
      borderInputStyle,
      error,
      onChangeText,
      onPressContinue,
    }),
    [
      isLoading,
      isErrorPhoneNumber,
      phoneNumber,
      borderInputStyle,
      error,
      onChangeText,
      onPressContinue,
    ],
  );
};

export default useSignIn;
