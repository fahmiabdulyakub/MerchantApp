import {Text, FlatList, View} from 'react-native';
import React, {memo, useCallback} from 'react';
import {MerchantCard} from '@components';
import {IMerchantList, RenderItemType} from '@screens/Home/types';
import {styles} from '@screens/Home/components/MerchantList/styles';

const MerchantList = ({data}: IMerchantList) => {
  const renderItem = useCallback(({item, index}: RenderItemType) => {
    return <MerchantCard key={index} data={item} />;
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.contentContainer}
        ListHeaderComponent={<Text style={styles.title}>Featured Brands</Text>}
        data={data}
        numColumns={3}
        renderItem={renderItem}
      />
    </View>
  );
};

export default memo(MerchantList);
