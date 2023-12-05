import React from 'react';
import { Text, TextInput } from 'react-native';

function CreateOrUpdateProduct() {
    return (
        <View>
            <Text>Product operations</Text>
            <TextInput placeholder='name of product'/>
        </View>
    )
}

export default CreateOrUpdateProduct