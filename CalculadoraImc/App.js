import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/title';
import Form from './src/components/Form';
import Rodape from './src/components/Rodape';
import Watermark from '/src/components/Watermark';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
      <Rodape/>
      <Watermark/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
