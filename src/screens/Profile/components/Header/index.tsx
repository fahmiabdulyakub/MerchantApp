import {Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import styles from '@screens/Profile/components/Header/styles';
import {ICArrowRight} from '@assets/icons';

const Header = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.phoneNumber}>+65 *****02</Text>
      </View>
      <ICArrowRight />
    </TouchableOpacity>
  );
};

export default memo(Header);
