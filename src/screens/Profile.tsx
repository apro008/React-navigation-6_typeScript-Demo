import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {TopDrawerNavigator} from '../navigation';

const Profile = () => {
  return (
    <View style={styles.container}>
      <TopDrawerNavigator />
      <Text style={styles.text}>Profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: 25,
    color: 'black',
  },
  textContainer: {
    //marginVertical: 10,
    marginBottom: 10,
  },
});
