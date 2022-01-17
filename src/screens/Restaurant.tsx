import {ParamListBase} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RestaurantCard} from '../components';
import {RootStackParams, TopBackNavigator} from '../navigation';

type props = NativeStackScreenProps<RootStackParams, 'Restaurant'>;

const Restaurant: React.FC<props> = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <TopBackNavigator />
      <Text style={styles.text}>{route.params.name} </Text>
      <Text>Related Restaurants</Text>
      <View
        style={{
          marginTop: 10,
        }}>
        <RestaurantCard
          name="Restaurant 1"
          onPress={name => navigation.push('Restaurant', {name})}
        />
        <RestaurantCard
          name="Restaurant 2"
          onPress={name => navigation.push('Restaurant', {name})}
        />
        <RestaurantCard
          name="Restaurant 3"
          onPress={name => navigation.push('Restaurant', {name})}
        />
        <RestaurantCard
          name="Restaurant 4"
          onPress={name => navigation.push('Restaurant', {name})}
        />
      </View>
    </View>
  );
};

export default Restaurant;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});
