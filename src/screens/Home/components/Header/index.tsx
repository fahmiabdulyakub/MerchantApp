import {StatusBar, View} from 'react-native';
import React, {memo} from 'react';
import styles from '@screens/Home/components/Header/styles';
import {Button} from '@components';
import {ICBell} from '@assets/icons';
import {COLORS} from '@constants/colors';

const Header = () => {
  return (
    <>
      <StatusBar backgroundColor={COLORS.GREEN} barStyle="light-content" />
      <View style={styles.container}>
        <Button icon={<ICBell />} />
      </View>
    </>
  );
};

export default memo(Header);
