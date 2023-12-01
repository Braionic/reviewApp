import { View, Text, Button } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import About from '../screens/About';
const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen options={{headerShown: false}} name='HomeStack' component={HomeStack} />
        <Drawer.Screen name='About' component={About} />
    </Drawer.Navigator>
  )
}

export default DrawerStack