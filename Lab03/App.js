import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './Javascript/FirstScreen';
import Screen1_a from './Javascript/1_a';
import Screen1_b from './Javascript/1_b';
import Screen1_c from './Javascript/1_c';
import Screen1_d from './Javascript/1_d';
import Screen1_e from './Javascript/1_e';
import Screen2_a from './Javascript/2_a';
import ScreenXMEye from './Javascript/XMEye';

const Stack = createStackNavigator();

const YourApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstScreen">
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="Screen1_a" component={Screen1_a} />
        <Stack.Screen name="Screen1_b" component={Screen1_b} />
        <Stack.Screen name="Screen1_c" component={Screen1_c} />
        <Stack.Screen name="Screen1_d" component={Screen1_d} />
        <Stack.Screen name="Screen1_e" component={Screen1_e} />        
        <Stack.Screen name="Screen2_a" component={Screen2_a} />        
        <Stack.Screen name="ScreenXMEye" component={ScreenXMEye} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default YourApp;
