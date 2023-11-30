import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import * as Font from 'expo-font';
import { useState } from 'react';
import { useEffect, useCallback } from 'react';
import About from './screens/About';
import * as SplashScreen from 'expo-splash-screen';



let fontLoader = ()=>{
  return (
    Font.loadAsync({
      'Caladea-Bold': require('./assets/fonts/Caladea-Bold.ttf'),
      'Caladea-Regular': require('./assets/fonts/Caladea-Regular.ttf')
    })
  )
}


export default function App() {
  const [isloaded, setIsloaded] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await fontLoader();
        //
      
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setIsloaded(true);
      }
    }
  
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isloaded) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [isloaded]);

  if (!isloaded) {
    return null;
  }

    return (
      <View style={styles.container} onLayout={onLayoutRootView}>
        <StatusBar style="auto" />
        <Home />
        <Text style={styles.mytxt}>Hello world</Text>
      </View>
    )
 
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mytxt: {
    fontFamily: 'Caladea-Bold'
  }
});
