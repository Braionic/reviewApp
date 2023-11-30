import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.home}>
      <Text style={styles.text}>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    home: {
        flex: 1,
        paddingTop: 20,
       
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontFamily: 'Caladea-Regular'
    }
})
