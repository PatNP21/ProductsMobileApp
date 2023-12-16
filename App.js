import { StyleSheet, Text, View } from 'react-native';
import ProductService from './components/ProductService.js';

export default function App() {
  return (
    <View style={styles.container}>
      {<ProductService/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff'
  },
});
