import React from 'react'
import { Button, StyleSheet, Text, View } from "react-native";

function ProductList({navigation}) {

    return (
        <View style={styles.listAppearance}>
            <Text>ProductsList</Text>
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
