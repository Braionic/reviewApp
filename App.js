import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import * as Font from 'expo-font';
import { useState } from 'react';
import { useEffect, useCallback } from 'react';
import About from './screens/About';
import * as SplashScreen from 'expo-splash-screen';
import { globalStyles } from './styles/global.js'

import { NavigationContainer } from '@react-navigation/native';
import DrawerStack from './routes/DrawerStack.jsx';



export default function App() {


    return (
      <NavigationContainer>
        
        <DrawerStack />

      </NavigationContainer>
     
    )
 
  
}


