import React, { useEffect } from 'react'
import { Text, View } from "react-native";

export default function ProductDetails(state) {

    useEffect(() => {
        console.log(state.route.params.state)
    },[])

    return (
        <View>
            <Text>Name: {state.route.params.state.name}</Text>
            <Text>Revision: {state.route.params.state.revision}</Text>
            <Text>Class: {state.route.params.state.class}</Text>
            <Text>Available amount: {state.route.params.state.availableAmount}</Text>
            <Text>Price: {state.route.params.state.price}</Text>
            <Text>Available: {state.route.params.state.isAvailable}</Text>
        </View>
    )
}