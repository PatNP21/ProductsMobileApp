/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import ProductList from './components/ProductList';
import CreateOrUpdateProduct from './components/CreateOrUpdateProduct';
import ProductDetails from './components/ProductDetails';

function App() {

  const {Navigator, Screen} = createStackNavigator()

  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="List" component={ProductList}/>
        <Screen name="Details" component={ProductDetails}/>
        <Screen name="ModifyProduct" component={CreateOrUpdateProduct}/>
      </Navigator>
    </NavigationContainer>
  );
}

export default App;
