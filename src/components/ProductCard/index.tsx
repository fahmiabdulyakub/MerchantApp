import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import styles from '@components/ProductCard/styles';
import {ProductType} from '@components/ProductCard/types';

const ProductCard = ({image, title}: ProductType) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: image}} />
      </View>
      <Text style={styles.name}>{title}</Text>
    </TouchableOpacity>
  );
};

export default memo(ProductCard);
