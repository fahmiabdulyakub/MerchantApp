import {COLORS} from '@constants/colors';
import {RouteNames} from '@lib/navigation/routes';
import {navigate} from '@lib/navigation/utils';
import {useCallback, useMemo, useState} from 'react';
import {COUNTRY_CODE} from '@screens/SignIn/config';

const useSignIn = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isErrorPhoneNumber, setIsErrorPhoneNumber] = useState(true);

  const onChangeText = useCallback((value: string) => {
    const phoneNumberRegex = /^\d{8,}$/;
    setPhoneNumber(value);
    setIsErrorPhoneNumber(!phoneNumberRegex.test(value));
  }, []);

  const borderInputStyle = useMemo(
    () =>
      phoneNumber && {
        borderColor:
          isErrorPhoneNumber && phoneNumber ? COLORS.RED : COLORS.GREEN,
      },
    [isErrorPhoneNumber, phoneNumber],
  );

  const onPressContinue = useCallback(() => {
    navigate(RouteNames.OTP, {
      phoneNumber: COUNTRY_CODE.dial_code + phoneNumber,
    });
  }, [phoneNumber]);

  return useMemo(
    () => ({
      isErrorPhoneNumber,
      phoneNumber,
      borderInputStyle,
      onChangeText,
      onPressContinue,
    }),
    [
      isErrorPhoneNumber,
      phoneNumber,
      borderInputStyle,
      onChangeText,
      onPressContinue,
    ],
  );
};

export default useSignIn;
