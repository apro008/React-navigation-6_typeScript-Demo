import {DrawerNavigationProp} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {RootStackParams} from '.';

const TopDrawerNavigator = () => {
  const navigation = useNavigation<DrawerNavigationProp<RootStackParams>>();

  return (
    <View
      style={{
        flexDirection: 'row',
        marginHorizontal: 5,
        marginVertical: 5,
      }}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <MaterialIcons name="dehaze" size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default TopDrawerNavigator;

const styles = StyleSheet.create({});
