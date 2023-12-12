import { StyleSheet, Text, View } from 'react-native';
import ProductViewModel from './components/ProductViewModel.js';

export default function App() {
  return (
    <View style={styles.container}>
      <ProductViewModel/>
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
