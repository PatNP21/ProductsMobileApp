import React from 'react'
import { StyleSheet, Switch, Text, TextInput, View } from "react-native";
import { useForm } from 'react-hook-form'
import NumericInput from 'react-native-numeric-input'

function ModifyProduct() {

    const {register, handleSubmit} = useForm()

    return (
        <View style={styles.formStyle}>
            <TextInput style={styles.input} {...register('name')} placeholder='Name'/>
            <TextInput style={styles.input} {...register('revision')} placeholder='Revision'/>
            <TextInput style={styles.input} {...register('class')} placeholder='Class'/>
            <NumericInput style={styles.input} type='up-down' {...register('availableAmount')}/>
            <NumericInput style={styles.input} type='up-down' {...register('price')}/>
            <Switch/>
        </View>
    )
}

export default ModifyProduct

const styles = StyleSheet.create({
    formStyle: {
        width: '80%',
        height: '80%'
    },
    input: {
        backgroundColor: '#fff',
        marginTop: 5,
        borderRadius: 8,
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: '10%'
    }
})

