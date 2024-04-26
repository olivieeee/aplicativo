import React, {Component} from 'react';
import Home from "../telas/home"
import Humores from "../telas/humores"



import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Humores" component={Humores} /> 
    </Stack.Navigator>
  );
}
export default MyStack;