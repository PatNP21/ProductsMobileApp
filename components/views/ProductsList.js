import React, {useState} from 'react'
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ProductListItem from './ProductListItem';

function ProductList({navigation}) {

    const [products, setProducts] = useState([
        {_id: 1, name: 'Bolek', revision: '1.0', price: 2000},
        {_id: 2, name: 'Lolek', revision: '1.0', price: 2000}
    ])

    return (
        <View style={styles.listAppearance}>
            <View style={styles.grid}>
                <FlatList 
                    data={products} 
                    renderItem={({item}) => (
                    <TouchableOpacity onPress={() => {navigation.navigate('Product', {state: item})}}>
                        <ProductListItem item={item} style={styles.productItem}/>
                    </TouchableOpacity>)}
                    keyExtractor={item => item._id}
                />
            </View>
            <View style={styles.bottomMenu}>
                <Button onPress={() => {
                    navigation.navigate('Modification')
                }} title="Create product" />
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
        height: '85%'
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
