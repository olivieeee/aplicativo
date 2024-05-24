import React, {Component} from 'react';
import Home from "../telas/home"
import Humores from "../telas/humores"
import Tristeza from "../telas/tristeza"
import Ansiedade from "../telas/ansiedade"
import Estresse from "../telas/estresse"
import Jogodoestresse from "../telas/jogodoestresse"
import Jogodatristeza from "../telas/jogodatristeza"
import Jogodaansiedade from '../telas/jogodaansiedade'


import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Humores" component={Humores} /> 
      <Stack.Screen name="Tristeza" component={Tristeza}/>
      <Stack.Screen name="Ansiedade" component={Ansiedade}/>
      <Stack.Screen name="Estresse" component={Estresse}/>
      <Stack.Screen name="Jogodoestresse" component={Jogodoestresse}/>
      <Stack.Screen name="Jogodatristeza" component={Jogodatristeza}/>
      <Stack.Screen name="Jogodaansiedade" component={Jogodaansiedade}/>
    </Stack.Navigator>
  );
}
export default MyStack;