import axios from 'axios'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductList from './views/ProductsList'
import ProductDetails from './views/ProductDetails'
import ModifyProduct from './views/ModifyProduct'
import React from 'react'
import ProductModel from './models/ProductModel'

export default function ProductViewModel() {

    let product = {name: "", revision: "", class_: "", availableAmount: 0, price: 0, isAvailable: false}

    const getAllProducts = () => {
        //return axios.get(serverURL/products)
    }

    const getProduct = (name) => {
        //return axios.get(serverURL/products/${name})
    }

    const addProduct = (data) => {
        console.log(submitData(data))
        //return axios.post(serverURL/products, data)
    }

    const editProduct = (data) => {
        //return axios.put(serverURL/products/${name})
    }

    const deleteProduct = (name) => {
        //return axios.delete(serverURL/products/${name})
    }

    const submitData = (data) => {
        return new ProductModel(...data)
    }

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Products'>
                <Stack.Screen name='Products' component={ProductList}/>
                <Stack.Screen name='Product' component={ProductDetails}/>
                <Stack.Screen name='Modification'>
                    {() => 
                        <ModifyProduct 
                            data={product}
                            addProduct={addProduct} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}