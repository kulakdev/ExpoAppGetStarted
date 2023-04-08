import { StatusBar } from 'expo-status-bar'
import * as ImagePicker from 'expo-image-picker'
import { StyleSheet, Text, View } from 'react-native'
import ImageViewer from './components/imageViewer'
import Button from './components/Button'
import React from 'react'

export default function App() {
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    })

    if (!result.canceled) {
      console.log(result)
    } else {
      alert('You did not select any image.')
    }
  }
  return (
    <View style={styles.container}>
      <View>
        <ImageViewer />
      </View>
      <Text style={styles.title1}>Super Cool!</Text>
      <Button label={'poggers?'}></Button>
      <StatusBar style="dark" hidden={true} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title1: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'sans-serif',
  },
})
