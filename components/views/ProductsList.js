import React, {useState, useEffect} from 'react'
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ProductListItem from './ProductListItem';

function ProductList({navigation, route}) {

    //ustawienie stanu załadowania zawartości
    const [loadedState, setLoadedState] = useState(false)
    const [productsList, setProductsList] = useState()

    //doskonale zdawałem sobie sprawę z wagi implementacji modelu MVVM 
    //natomiast jedynym sposobem na dobre działanie listy była obsługa Promise w tymże komponencie
    useEffect(() => {
        console.log(route)
        route.params.products.then(result => {
            setProductsList(result)
            setLoadedState(true)
            console.log(productsList)
        })
    },[])

    return (
        <View style={styles.listAppearance}>
            <View style={styles.grid}>
                {loadedState && <FlatList 
                    data={productsList} 
                    renderItem={({item}) => (
                    <TouchableOpacity 
                        onPress={() => {navigation.navigate('Product', {item: item})}}
                    >
                        <ProductListItem item={item} style={styles.productItem}/>
                    </TouchableOpacity>)}
                    keyExtractor={item => item._id}
                    />}
            </View>
            <View style={styles.bottomMenu}>
                {<Button onPress={() => {
                    navigation.navigate('Modification', {mode: 'CREATE'})
                }} title="Create product" />}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    listAppearance: {
        width: '100%',
        height: '100%'
    },
    grid: {
        width: '100%',
        height: '80%'
    },
    productItem: {
        width: '85%',
        margin: 'auto',
        marginTop: 2,
        borderColor: '#aaa',
        borderWidth: 1,
        borderRadius: 10
    },
    bottomMenu: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '15%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ProductList
