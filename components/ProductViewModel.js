import axios from 'axios'
import {NavigationContainer} from '@react-navigation/native'
import { createNativethis.StackNavigator } from '@react-navigation/native-this.stack'
import ProductList from './views/ProductsList'
import ProductDetails from './views/ProductDetails'
import ModifyProduct from './views/ModifyProduct'
import React from 'react'

export default class ProductViewModel extends React.Component {
    constructor() {}

    getAllProducts() {
        //return axios.get(serverURL/products)
    }

    getProduct(name) {
        //return axios.get(serverURL/products/${name})
    }

    addProduct(data) {
        //return axios.post(serverURL/products)
    }

    editProduct(data) {
        //return axios.put(serverURL/products/${name})
    }

    deleteProduct(name) {
        //return axios.delete(serverURL/products/${name})
    }

    this.Stack = createNativethis.StackNavigator()

    render() {
        return (
            <NavigationContainer>
                <this.Stack.Navigator initialRouteName='Products'>
                    <this.Stack.Screen name='Products'>
                        {(props) => <ProductList/>}
                    </this.Stack.Screen>
                    <this.Stack.Screen name='Product' component={ProductDetails} />
                    <this.Stack.Screen name='Modification' component={ModifyProduct} />
                </this.Stack.Navigator>
            </NavigationContainer>
        )
    }
}