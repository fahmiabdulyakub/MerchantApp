import {COLORS} from '@constants/colors';
import {useCallback, useMemo, useState} from 'react';

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

  return useMemo(
    () => ({
      isErrorPhoneNumber,
      phoneNumber,
      borderInputStyle,
      onChangeText,
    }),
    [isErrorPhoneNumber, phoneNumber, borderInputStyle, onChangeText],
  );
};

export default useSignIn;
