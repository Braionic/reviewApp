import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Form, Formik, validateYupSchema } from 'formik'
import { Button } from 'react-native-elements'
import { globalStyles } from '../styles/global'
import * as yup from 'yup'

export default function AddFrorm({handleFormData}) {

  const formValidation = yup.object({
    title: yup.string().required().min(4),
    name: yup.string().required().min(2),
    rating: yup.string().required().test('is-less-or-greater', 'value must be < 6 & > 0', (value)=>{
      return parseInt(value) > 0 && parseInt(value) < 6
  })
  })
  return (
    <View style={styles.container}>
     <Formik onSubmit={(values, actions)=>(
        actions.resetForm(),
        handleFormData(values)
     )} initialValues={{name: '', title: '', body: '', rating: '', id: ''}} validationSchema={formValidation}>
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