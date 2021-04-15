import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Routes
import * as Routes from './Routes';
// Screens
import HomePageScreen from '../screens/Home';

// Stack navigator
const StackScreenOptions = {
  headerShown: false,
};
const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.HomePage}
      screenOptions={StackScreenOptions}>
      <Stack.Screen name={Routes.HomePage} component={HomePageScreen} />
    </Stack.Navigator>
  );
};

// Main navigator wrapper
export default () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
