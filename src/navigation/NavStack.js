import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationOptions} from './navigationOptions';
import {Addition, CandidatesList} from '../screens/';

const Stack = createStackNavigator();

export const NavStack = () => {
  return (
    <Stack.Navigator screenOptions={navigationOptions}>
      <Stack.Screen name="Addition" component={Addition} />
      <Stack.Screen
        options={{headerShown: true, headerTitle: 'Candidates List'}}
        name="CandidatesList"
        component={CandidatesList}
      />
    </Stack.Navigator>
  );
};
