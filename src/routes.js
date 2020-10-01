import React from 'react';

import {
  Image,
} from 'react-native';

import {
  NavigationContainer,
} from '@react-navigation/native';

import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import logo from './assets/icon.png';

import {
  Films,
  Details,
} from './pages';

const Stack = createStackNavigator();

export default function Routes() {
  function ImageRight() {
    const headerLogo = { width: 65, height: 65, marginRight: 25 };

    return (
      <Image source={ logo } style={ headerLogo }/>
    );
  };

  const headerOptions = {
    headerTintColor: '#D9D9D9',
    headerTitleStyle: {
      marginLeft: 10,
      fontSize: 26,
    },
    headerStyle: {
      height: 75,
      backgroundColor: '#262525',
    },
    title: 'Star Wars',
    headerRight: ImageRight,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      >
        <Stack.Screen
          options={ headerOptions }
          name="Login"
          component={ Films }

        />

        <Stack.Screen
          options={ headerOptions }
          name="Details"
          component={ Details }

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
