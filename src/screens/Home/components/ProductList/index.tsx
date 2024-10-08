import {Text, FlatList, ActivityIndicator} from 'react-native';
import React, {memo, useCallback} from 'react';
import {ProductCard} from '@components';
import {IProductList, RenderProductItemType} from '@screens/Home/types';
import {styles} from '@screens/Home/components/ProductList/styles';
import {COLORS} from '@constants/colors';

const ProductList = ({data, isLoading}: IProductList) => {
  const renderItem = useCallback(({item, index}: RenderProductItemType) => {
    return <ProductCard key={index} {...item} />;
  }, []);

  return isLoading ? (
    <ActivityIndicator
      size="large"
      color={COLORS.GREEN}
      style={styles.loading}
    />
  ) : (
    <FlatList
      style={styles.contentContainer}
      ListHeaderComponent={<Text style={styles.title}>Products</Text>}
      data={data}
      numColumns={2}
      renderItem={renderItem}
    />
  );
};

export default memo(ProductList);
