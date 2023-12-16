import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Button } from "react-native";

export default function ProductDetails({navigation, route}) {

    //ustawienie stanu załadowania zawartości
    const [loadedState, setLoadedState] = useState(false)
    const [item, setItem] = useState()

    useEffect(() => {
        console.log(route)
        setItem(route.params.item)
        setLoadedState(true)
    })

    return (
        <View style={styles.listAppearance}>
            {loadedState && <View style={styles.grid}>
                <Text>Name: {item.name}</Text>
                <Text>Revision: {item.current.revision}</Text>
                <Text>Class: {item.current.class}</Text>
                <Text>Available amount: {item.current.availableAmount}</Text>
                <Text>Price: {item.current.price}</Text>
                <Text>Available: {item.current.isAvailable}</Text>
            </View>}
            <View style={styles.bottomMenu}>
                <Button style={styles.button} onPress={() => {
                    navigation.navigate('Modification', {mode: 'UPDATE', data: item})
                }} title="Update product" />
                <Button style={styles.button} onPress={() => {
                    route.params.deleteProduct(item)
                    navigation.navigate('Products')
                }} title="Delete product" />
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
    bottomMenu: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '15%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    button: {
        margin: 'auto',
        fontSize: 12,
        width: 'auto',
        height: 'auto'
    }
})