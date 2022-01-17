import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {RestaurantCard} from '../components';
import Menu from '../components/Menu';
import {RootStackParams, TopDrawerNavigator} from '../navigation';

type Props = NativeStackScreenProps<RootStackParams, 'RestaurantStack'>;

const Restaurants = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <TopDrawerNavigator />
      <Text style={styles.text}>Restaurants Screen</Text>
      <ScrollView
        style={
          {
            //marginLeft: 10,
          }
        }>
        <RestaurantCard
          name="Sushi Restaurant"
          onPress={name => {
            navigation.navigate('Restaurant', {name});
          }}
        />
        <RestaurantCard
          name="Burger Restaurant"
          onPress={name => {
            navigation.navigate('Restaurant', {name});
          }}
        />
        <RestaurantCard
          name="Fine Restaurant"
          onPress={name => {
            navigation.navigate('Restaurant', {name});
          }}
        />
        <RestaurantCard
          name="Damn Restaurant"
          onPress={name => {
            navigation.navigate('Restaurant', {name});
          }}
        />
        <RestaurantCard
          name="Seasonal Restaurant"
          onPress={name => {
            navigation.navigate('Restaurant', {name});
          }}
        />
        <RestaurantCard
          name="Southern Restaurant"
          onPress={name => {
            navigation.navigate('Restaurant', {name});
          }}
        />
        <Menu />
      </ScrollView>
    </View>
  );
};

export default Restaurants;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: 20,
    color: 'black',
    padding: 10,
  },
});
