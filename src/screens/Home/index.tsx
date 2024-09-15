import {ActivityIndicator, StatusBar, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Header from '@screens/Home/components/Header';
import {Button, Input} from '@components';
import {ICQRCode, ICSearch} from '@assets/icons';
import {styles} from '@screens/Home/styles';
import MerchantList from './components/MerchantList';
import {COLORS} from '@constants/colors';
import {useIsFocused} from '@react-navigation/native';
import {getFeaturedMerchant} from '@services';
import {MerchantType} from '@components/MerchantCard/types';

const Home = () => {
  const [data, setData] = useState<MerchantType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const focused = useIsFocused();

  const getMerchant = useCallback(async () => {
    setIsLoading(true);
    const response = await getFeaturedMerchant();
    if (response?.merchants) {
      setData(response.merchants);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getMerchant();
  }, [getMerchant]);

  return (
    <View style={styles.container}>
      {focused && (
        <StatusBar backgroundColor={COLORS.GREEN} barStyle="light-content" />
      )}
      <Header />
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color={COLORS.GREEN}
          style={styles.loading}
        />
      ) : (
        <MerchantList data={data} />
      )}
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
