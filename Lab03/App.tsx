import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './FirstScreen';
import Screen1_a from './1_a';
import Screen1_b from './1_b';
import Screen1_c from './1_c';

const Stack = createStackNavigator();

const YourApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="Screen1_a" component={Screen1_a} />
        <Stack.Screen name="Screen1_b" component={Screen1_b} />
        <Stack.Screen name="Screen1_c" component={Screen1_c} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default YourApp;
