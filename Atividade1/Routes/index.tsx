import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import Home from '../Screens/Home';
import Sobre from '../Screens/Sobre'
import Ajuda from '../Screens/Ajuda'
import Contato from '../Screens/Contato'


export default function Routes() {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home}/>
      <Tab.Screen name='Sobre' component={Sobre}/>
      <Tab.Screen name='Ajuda' component={Ajuda}/>
      <Tab.Screen name='Contato' component={Contato}/>
      
    </Tab.Navigator>

    </NavigationContainer>
);
}