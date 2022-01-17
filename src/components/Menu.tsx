import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RootStackParams} from '../navigation';

const Menu = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <View style={styles.container}>
      <Text style={[styles.text, {color: 'black', fontSize: 20}]}>
        Navigation
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('ExploreStack')}>
        <Text style={styles.text}>Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('RestaurantStack')}>
        <Text style={styles.text}>Restaurant</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.text}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: '#999999',
    borderRadius: 5,
    padding: 15,
    //marginLeft: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 17,
    color: '#0B0080',
  },
});
