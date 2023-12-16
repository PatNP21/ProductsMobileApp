import axios from 'axios'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ProductList from './views/ProductsList'
import ProductDetails from './views/ProductDetails'
import ModifyProduct from './views/ModifyProduct'
import React, { useState } from 'react'
import ProductModel from './models/ProductModel'

export default function ProductService() {

    const serverURL = 'http://localhost:2001'

    const getAllProducts = async () => {
        let result = await axios.get(`${serverURL}/products`)
        return result.data
    }

    const getProduct = (name) => {
        return axios.get(`${serverURL}/products/${name}`)
    }

    const addProduct = (data) => {
        return axios.post(`${serverURL}/products`, data)
    }

    const editProduct = (data) => {
        return axios.put(`${serverURL}/products/${data.name}`, data)
    }

    const deleteProduct = (name) => {
        return axios.delete(`${serverURL}/products/${name}`)
    }

    const Stack = createStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Products'>
                <Stack.Screen 
                    name="Products" 
                    component={ProductList}
                    initialParams={{products: getAllProducts()}}/>
                <Stack.Screen
                    name="Product"
                    component={ProductDetails}
                    initialParams={{deleteProduct: deleteProduct}}/>
                <Stack.Screen 
                    name="Modification"
                    component={ModifyProduct}
                    initialParams={{addProduct: addProduct, editProduct: editProduct}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}