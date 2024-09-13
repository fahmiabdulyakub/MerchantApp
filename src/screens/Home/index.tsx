import {View} from 'react-native';
import React from 'react';
import Header from '@screens/Home/components/Header';
import {Button, Input} from '@components';
import {ICQRCode, ICSearch} from '@assets/icons';
import {styles} from '@screens/Home/styles';

const Home = () => {
  return (
    <View>
      <Header />
      <View style={styles.searchContainer}>
        <Input
          style={styles.search}
          left={<ICSearch />}
          right={<Button icon={<ICQRCode />} />}
          placeholder="Search a store or order"
        />
      </View>
    </View>
  );
};

export default Home;
