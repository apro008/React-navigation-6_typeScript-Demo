import React from 'react';

import TopBackNavigator from './TopBackNavigator';
import TopDrawerNavigator from './TopDrawerNavigator';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Restaurants, Profile, Explore, Restaurant} from '../screens';

export type RootStackParams = {
  RestaurantStack: NavigatorScreenParams<RestaurantStackParams>;
  Profile: undefined;
  ExploreStack: NavigatorScreenParams<ExploreStackParams>;
  Restaurant: {
    name: string;
  };
};

export type RestaurantStackParams = {
  Restaurants: undefined;
  Restaurant: {
    name: string;
  };
};

export type ExploreStackParams = {
  Explore: undefined;
  Restaurant: {
    name: string;
  };
};

const ExploreStack = createNativeStackNavigator<ExploreStackParams>();

const ExploreStackScreen = () => {
  return (
    <ExploreStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <ExploreStack.Screen name="Explore" component={Explore} />
      <ExploreStack.Screen name="Restaurant" component={Restaurant} />
    </ExploreStack.Navigator>
  );
};

const RestaurantStack = createNativeStackNavigator<RestaurantStackParams>();

const RestaurantStackScreen = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <RestaurantStack.Screen name="Restaurants" component={Restaurants} />
      <RestaurantStack.Screen name="Restaurant" component={Restaurant} />
    </RestaurantStack.Navigator>
  );
};

const BottomStack = createBottomTabNavigator<RootStackParams>();
const DrawerStack = createDrawerNavigator<RootStackParams>();

const BottomStackScreen = () => {
  return (
    <BottomStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <BottomStack.Screen
        name="RestaurantStack"
        component={RestaurantStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color, size}) => (
            <MaterialCommunityIcons
              name={focused ? 'home-lightbulb' : 'home-lightbulb-outline'}
              size={25}
              color={focused ? 'tomato' : 'grey'}
            />
          ),
        }}
      />
      <BottomStack.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, color, size}) => (
            <MaterialCommunityIcons
              name={focused ? 'face-profile' : 'face-profile-woman'}
              size={25}
              color={focused ? 'tomato' : 'grey'}
            />
          ),
        }}
      />
      <BottomStack.Screen
        name="ExploreStack"
        component={ExploreStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, color, size}) => (
            <MaterialCommunityIcons
              name={focused ? 'face-profile' : 'face-profile-woman'}
              size={25}
              color={focused ? 'tomato' : 'grey'}
            />
          ),
        }}
      />
    </BottomStack.Navigator>
  );
};

const Screens = () => {
  return (
    <NavigationContainer>
      <DrawerStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <DrawerStack.Screen
          name="RestaurantStack"
          component={BottomStackScreen}
          options={{
            drawerLabel: 'Home',
            drawerIcon: ({focused, color, size}) => (
              <MaterialCommunityIcons
                name={focused ? 'home-lightbulb' : 'home-lightbulb-outline'}
                size={25}
                color={focused ? 'tomato' : 'grey'}
              />
            ),
          }}
        />
        <DrawerStack.Screen
          name="Profile"
          component={Profile}
          options={{
            drawerLabel: 'Profile',
            drawerIcon: ({focused, color, size}) => (
              <MaterialCommunityIcons
                name={focused ? 'face-profile' : 'face-profile-woman'}
                size={25}
                color={focused ? 'tomato' : 'grey'}
              />
            ),
          }}
        />
        <DrawerStack.Screen
          name="ExploreStack"
          component={ExploreStackScreen}
          options={{
            drawerLabel: 'Explore',
            drawerIcon: ({focused, color, size}) => (
              <MaterialCommunityIcons
                name={focused ? 'book-open' : 'book-open-outline'}
                size={25}
                color={focused ? 'tomato' : 'grey'}
              />
            ),
          }}
        />
        {/* <Stack.Screen name="Restaurant" component={Restaurant} /> */}
      </DrawerStack.Navigator>
    </NavigationContainer>
  );
};

export default Screens;

export {TopBackNavigator, TopDrawerNavigator};
