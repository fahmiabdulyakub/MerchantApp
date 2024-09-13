import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import {IMerchantCard} from '@components/MerchantCard/types';
import styles from '@components/MerchantCard/styles';

const MerchantCard = ({data}: IMerchantCard) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: data.logo}} />
      </View>
      <Text style={styles.name}>{data.name}</Text>
    </TouchableOpacity>
  );
};

export default memo(MerchantCard);
