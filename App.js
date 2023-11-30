import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import * as Font from 'expo-font';
import { useState } from 'react';
import { useEffect, useCallback } from 'react';
import About from './screens/About';
import * as SplashScreen from 'expo-splash-screen';
import { globalStyles } from './styles/global.js'
import HomeStack from './routes/homeStack.jsx';
import { NavigationContainer } from '@react-navigation/native';





export default function App() {


    return (
      <NavigationContainer>
        
        <HomeStack />

      </NavigationContainer>
     
    )
 
  
}


