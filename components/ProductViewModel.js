import axios from 'axios'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductList from './views/ProductsList'
import ProductDetails from './views/ProductDetails'
import ModifyProduct from './views/ModifyProduct'
import React from 'react'

export default function ProductViewModel() {

    const getAllProducts = () => {
        //return axios.get(serverURL/products)
    }

    const getProduct = (name) => {
        //return axios.get(serverURL/products/${name})
    }

    const addProduct = (data) => {
        //return axios.post(serverURL/products)
    }

    const editProduct = (data) => {
        //return axios.put(serverURL/products/${name})
    }

    const deleteProduct = (name) => {
        //return axios.delete(serverURL/products/${name})
    }

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Products'>
                <Stack.Screen name='Products' component={ProductList}/>
                <Stack.Screen name='Product' component={ProductDetails}/>
                <Stack.Screen name='Modification' component={ModifyProduct}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}