import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RestaurantCard} from '../components';
import {
  RootStackParams,
  TopBackNavigator,
  TopDrawerNavigator,
} from '../navigation';

type props = NativeStackScreenProps<RootStackParams, 'ExploreStack'>;

const Explore: React.FC<props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TopDrawerNavigator />
      <Text style={styles.text}>Restaurant</Text>
      <View style={styles.textContainer}>
        <Text
          style={{
            fontSize: 15,
            marginVertical: 5,
            color: 'black',
          }}>
          Restaurants near You
        </Text>
        <RestaurantCard
          name="Fine restaurants"
          onPress={name => navigation.navigate('Restaurant', {name})}
        />
        <RestaurantCard
          name="Dine restaurants"
          onPress={name => navigation.navigate('Restaurant', {name})}
        />
        <RestaurantCard
          name="Shine restaurants"
          onPress={name => navigation.navigate('Restaurant', {name})}
        />
        <RestaurantCard
          name="Night restaurants"
          onPress={() =>
            navigation.navigate('RestaurantStack', {
              screen: 'Restaurant',
              params: {name: 'hello from explore'},
            })
          }
        />
        <Text
          style={{
            fontSize: 15,
            marginVertical: 5,
            color: 'black',
          }}>
          Most Popular Restaurants
        </Text>
        <RestaurantCard
          name="Sushi restaurants"
          onPress={name => navigation.navigate('Restaurant', {name})}
        />
        <RestaurantCard
          name="Raw restaurants"
          onPress={name => navigation.navigate('Restaurant', {name})}
        />
        <RestaurantCard
          name="Summer restaurants"
          onPress={name => navigation.navigate('Restaurant', {name})}
        />
      </View>
    </View>
  );
};

export default Explore;

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
