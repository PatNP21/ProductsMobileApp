import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductList from './views/ProductsList'
import ProductDetails from './views/ProductDetails'
import ModifyProduct from './views/ModifyProduct'

const getProductsList = async (viewModel) => {
    return await viewModel.getAllProducts()
}

const getProductDetails = async (name, viewModel) => {
    return await viewModel.getProduct(name)
}

const addProduct = async (data, viewModel) => {
    return await viewModel.addProduct(data)
}

export default function ProductViewController() {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Products'>
                <Stack.Screen name='Products'>
                    {(props) => <ProductList/>}
                </Stack.Screen>
                <Stack.Screen name='Product' component={ProductDetails} />
                <Stack.Screen name='Modification' component={ModifyProduct} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}