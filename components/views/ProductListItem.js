import React from "react";
import { Text, View } from "react-native";

export default function ProductListItem({item, style}) {
    return (
        <View style={style}>
            <Text>{item.name}</Text>
            <Text>{item.current.price}</Text>
        </View>
    )
}
