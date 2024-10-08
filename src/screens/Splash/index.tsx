import {useEncryptedToken} from '@hooks';
import {View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {reset} from '@lib/navigation/utils';
import {RouteNames} from '@lib/navigation/routes';
import {styles} from '@screens/Splash/styles';
import Images from '@assets/images';

const Splash = () => {
  const {token} = useEncryptedToken();

  useEffect(() => {
    setTimeout(() => {
      if (token) {
        reset(RouteNames.MAIN_APP);
      } else {
        reset(RouteNames.SIGN_IN);
      }
    }, 1000);
  }, [token]);

  return (
    <View style={styles.container}>
      <Image source={Images.splash} style={styles.image} />
    </View>
  );
};

export default Splash;
