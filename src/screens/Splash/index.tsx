import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {reset} from '@lib/navigation/utils';
import {RouteNames} from '@lib/navigation/routes';
import {styles} from '@screens/Splash/styles';

const Splash = () => {
  useEffect(() => {
    setTimeout(() => {
      reset(RouteNames.MAIN_APP);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Splash</Text>
    </View>
  );
};

export default Splash;
