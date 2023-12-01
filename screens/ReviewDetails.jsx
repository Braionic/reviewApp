import { View, Text, Button, FlatList, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { globalStyles, iconRating } from '../styles/global'
import Data from './Data'
const RevewDetails = ({navigation, route}) => {
  const [data, setData] = useState(Data)
  const {id, dataState} = route.params
 
  const filterdata = dataState.filter((item)=>{
    return item.id == id
  })


  return (
    <View style={globalStyles.container}>
      <Text>RevewDetails</Text>
      <FlatList data={filterdata} renderItem={({item})=>(
        <View>
            <View style={styles.reviewsContainer}>
                <Text style={styles.reviewRating}>
                    {item.rating}
                </Text>
                <Text>{item.title}</Text>

                <Text style={styles.reviewBody}>{item.body}</Text>
              <Image source={iconRating[item.rating]} />
            </View>
        </View>
      )} key={({item})=>(item.id)} />
      <Button title="Go Back" onPress={()=> navigation.goBack()} />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
      fontFamily: 'Caladea-Bold'
  },
  reviewsContainer: {
      padding: 20,
      borderWidth: 1,
      borderRadius: 2,
      marginVertical: 5,
      
  },
  reviewRating: {
      fontFamily: 'Caladea-Bold',
      fontSize: 30,
      textAlign: 'center'
  },
  reviewBody: {
    marginVertical: 20,
    fontSize: 20
  }
})
export default RevewDetails