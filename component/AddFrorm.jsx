import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Form, Formik } from 'formik'
import { Button } from 'react-native-elements'
import { globalStyles } from '../styles/global'

export default function AddFrorm({handleFormData}) {
  return (
    <View style={styles.container}>
     <Formik onSubmit={(values)=>(
        handleFormData(values)
     )} initialValues={{name: '', title: '', body: '', rating: '', id: ''}}>
        {(props)=>(
            <View>
            <TextInput
             placeholder='Name' onChangeText={props.handleChange('name')} value={props.values.name} style={globalStyles.input} />
             <TextInput
             placeholder='Title' onChangeText={props.handleChange('title')} value={props.values.title} style={globalStyles.input} />
            <TextInput
             placeholder='Body' onChangeText={props.handleChange('body')} value={props.values.body} style={globalStyles.input} />
            <TextInput
             placeholder='Rating' onChangeText={props.handleChange('rating')} value={props.values.rating} keyboardType='numeric' style={globalStyles.input} />
            <Button title='Submit' onPress={props.handleSubmit} />
            </View>
        )}
     </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30
    }
})