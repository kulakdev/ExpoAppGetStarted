import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ImageViewer from './components/imageViewer';
import Button from './components/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <ImageViewer/>
      </View>
      <Text style={styles.title1}>Super Cool!</Text>
      <Button label={"poggers?"}></Button>
      <StatusBar style="dark" hidden={true}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title1: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "sans-serif",
  }
});
