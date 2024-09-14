import {View, ScrollView} from 'react-native';
import React from 'react';
import {styles} from '@screens/Profile/styles';
import Header from '@screens/Profile/components/Header';
import {Button} from '@components';
import {ICLogout} from '@assets/icons';

const Profile = () => {
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
      />
    </View>
  );
};

export default Profile;
