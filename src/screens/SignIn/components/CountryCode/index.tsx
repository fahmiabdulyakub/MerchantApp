import {View, Text} from 'react-native';
import React, {memo} from 'react';
import styles from '@screens/SignIn/components/CountryCode/styles';
import {COUNTRY_CODE} from '@screens/SignIn/config';

const CountryCode = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.countryCode}>
        {COUNTRY_CODE.flag} {COUNTRY_CODE.dial_code}
      </Text>
      <View style={styles.separator} />
    </View>
  );
};

export default memo(CountryCode);
