import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const TopBackNavigator = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        marginVertical: 10,
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back" size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default TopBackNavigator;

const styles = StyleSheet.create({});
