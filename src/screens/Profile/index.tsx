import {View, ScrollView} from 'react-native';
import React, {useCallback} from 'react';
import {styles} from '@screens/Profile/styles';
import Header from '@screens/Profile/components/Header';
import {Button} from '@components';
import {ICLogout} from '@assets/icons';
import {useEncryptedToken} from '@hooks';
import {reset} from '@lib/navigation/utils';
import {RouteNames} from '@lib/navigation/routes';

const Profile = () => {
  const {removeToken} = useEncryptedToken();

  const handleLogout = useCallback(() => {
    removeToken();
    reset(RouteNames.SIGN_IN);
  }, [removeToken]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <Header />
      </ScrollView>
      <Button
        icon={<ICLogout />}
        label="Logout"
        textStyle={styles.labelButton}
        style={styles.button}
        onPress={handleLogout}
      />
    </View>
  );
};

export default Profile;
