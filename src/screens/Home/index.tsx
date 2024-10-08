import {SafeAreaView, StatusBar, View} from 'react-native';
import React from 'react';
import Header from '@screens/Home/components/Header';
import {Button, Input} from '@components';
import {ICQRCode, ICSearch} from '@assets/icons';
import {styles} from '@screens/Home/styles';
import {COLORS} from '@constants/colors';
import useHome from '@screens/Home/hooks/useHome';
import ProductList from '@screens/Home/components/ProductList';

const Home = () => {
  const {data, isLoading, focused} = useHome();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {focused && (
          <StatusBar backgroundColor={COLORS.GREEN} barStyle="light-content" />
        )}
        <Header />
        <ProductList data={data} isLoading={isLoading} />
        <View style={styles.searchContainer}>
          <Input
            style={styles.search}
            left={<ICSearch />}
            right={<Button icon={<ICQRCode />} />}
            placeholder="Search a store or order"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
