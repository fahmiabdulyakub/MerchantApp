import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import styles from '@screens/SignIn/styles';
import {Button, Input} from '@components';
import useSignIn from '@screens/SignIn/hooks/useSignIn';
import CountryCode from '@screens/SignIn/components/CountryCode';

const SignIn = () => {
  const {
    isLoading,
    phoneNumber,
    isErrorPhoneNumber,
    borderInputStyle,
    error,
    onChangeText,
    onPressContinue,
  } = useSignIn();

  return (
    <SafeAreaView style={styles.safeArea}>
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
          {error?.message && <Text style={styles.error}>{error.message}</Text>}
        </View>
        <Button
          label="Continue"
          disabled={isErrorPhoneNumber}
          onPress={onPressContinue}
          isLoading={isLoading}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
