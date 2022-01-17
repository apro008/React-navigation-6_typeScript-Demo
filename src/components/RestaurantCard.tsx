import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type props = {
  name: string;
  onPress: (name: string) => void;
};

const RestaurantCard: React.FC<props> = ({name, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress(name)}>
      <View style={styles.container}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

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
    fontSize: 15,
    color: 'white',
  },
});
