import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Switch, TextInput, View } from "react-native";
import { useForm, Controller } from 'react-hook-form'
import ProductViewModel from '../ProductViewModel';

function ModifyProduct({route}) {

    const productViewModel = new ProductViewModel()

    const {control} = useForm()
    const [data_, setData_] = useState(productViewModel.getProductData())

    useEffect(() => {
        console.log(route)
        if(route.params.mode === 'UPDATE') {
            document.querySelector('#nameinput').setAttribute('disabled', true)
            setData_({
                name: route.params.data.name,
                revision: route.params.data.current.revision,
                class_: route.params.data.current.class,
                availableAmount: route.params.data.current.availableAmount,
                price: route.params.data.current.price,
                isAvailable: route.params.data.current.isAvailable
            })
        }
    }, [])

    const handleProduct = () => {
        productViewModel.provideDataForTheProduct(...data_)
        console.log(productViewModel.getProductData())
        if(route.params.mode === 'UPDATE') {
            route.params.editProduct(productViewModel.getProductData())
        } else if(route.params.mode === 'CREATE') {
            route.params.addProduct(productViewModel.getProductData())
        }
        
    }

    return (
        <View style={styles.formStyle}>
            <Controller 
                name="name" 
                control={control} 
                render={({value}) => 
                    (<TextInput id="nameinput" style={styles.input} onChangeText={(val) => data_.name = val} value={value} placeholder='Name'/>)
                }/>
            <Controller 
                name="revision" 
                control={control} 
                render={({value}) => 
                    (<TextInput style={styles.input} onChangeText={(val) => data_.revision = val} value={value} placeholder='Revision'/>)
                }/>
            <Controller 
                name="class" 
                control={control} 
                render={({value}) => 
                    (<TextInput style={styles.input} onChangeText={(val) => data_.class_ = val} value={value} placeholder='Class'/>)
                }/>
            <Controller 
                name="availableAmount" 
                control={control} 
                render={({value}) => 
                    (<TextInput style={styles.input} inputMode='numeric' minValue={0} onChangeText={(val) => data_.availableAmount = Number(val)} value={value} placeholder='Available amount'/>)
                }/>
            <Controller 
                name="price" 
                control={control} 
                render={({value}) => 
                    (<TextInput style={styles.input} inputMode='numeric' minValue={0} onChangeText={(val) => data_.price = Number(val)} value={value} placeholder='Price'/>)
                }/>
            <Controller 
                name="isAvailable" 
                control={control} 
                render={({value}) => 
                    (<Switch onChange={(val) => data_.isAvailable = val} value={value}/>)
                }/>
            <Controller
                name="submitBtn"
                control={control}
                render={() => 
                    (<Button title='Submit' onPress={handleProduct}/>)
                }/>
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
        aligndatas: 'center'
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

