import {View, Text} from 'react-native';
import React from 'react';
import styles from '@screens/SignIn/styles';
import {Button, Input} from '@components';
import useSignIn from '@screens/SignIn/hooks/useSignIn';
import CountryCode from '@screens/SignIn/components/CountryCode';

const SignIn = () => {
  const {
    phoneNumber,
    isErrorPhoneNumber,
    borderInputStyle,
    onChangeText,
    onPressContinue,
  } = useSignIn();

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Enter your phone number</Text>
        <Input
          style={borderInputStyle}
          value={phoneNumber}
          onChangeText={onChangeText}
          left={<CountryCode />}
          placeholder="Phone number"
          keyboardType="number-pad"
        />
      </View>
      <Button
        label="Continue"
        disabled={isErrorPhoneNumber}
        onPress={onPressContinue}
      />
    </View>
  );
};

export default SignIn;
