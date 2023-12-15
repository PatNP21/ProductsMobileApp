import React from 'react'
import { Button, StyleSheet, Switch, Text, TextInput, View } from "react-native";
import { useForm, Controller } from 'react-hook-form'

function ModifyProduct({data, addProduct}) {

    const {control} = useForm()

    return (
        <View style={styles.formStyle}>
            <Controller 
                name="name" 
                control={control} 
                render={({value}) => 
                    (<TextInput onChangeText={(val) => data.name = val} value={value} placeholder='Name'/>)
                }/>
            <Controller 
                name="revision" 
                control={control} 
                render={({value}) => 
                    (<TextInput onChangeText={(val) => data.revision = val} value={value} placeholder='Revision'/>)
                }/>
            <Controller 
                name="class" 
                control={control} 
                render={({value}) => 
                    (<TextInput onChangeText={(val) => data.class_ = val} value={value} placeholder='Class'/>)
                }/>
            <Controller 
                name="availableAmount" 
                control={control} 
                render={({value}) => 
                    (<TextInput keyboardType='numeric' minValue={0} onChangeText={(val) => data.availableAmount = Number(val)} value={value} placeholder='Available amount'/>)
                }/>
            <Controller 
                name="price" 
                control={control} 
                render={({value}) => 
                    (<TextInput keyboardType='numeric' minValue={0} onChangeText={(val) => data.price = Number(val)} value={value} placeholder='Price'/>)
                }/>
            <Controller 
                name="isAvailable" 
                control={control} 
                render={({value}) => 
                    (<Switch onChange={(val) => data.isAvailable = val} value={value}/>)
                }/>
            <Button 
                title='Submit' 
                label="Submit" 
                onPress={addProduct(data)}/>
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
    },
    numberView: {
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center'
    },
    numberInput: {
        backgroundColor: '#fff',
        marginTop: 5,
        borderRadius: 8,
        maxWidth: 200,
        maxHeight: 100,
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: '10%'
    }
})

