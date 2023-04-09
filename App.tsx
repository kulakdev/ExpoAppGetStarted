import { StatusBar } from 'expo-status-bar'
import * as ImagePicker from 'expo-image-picker'
import { StyleSheet, Text, View } from 'react-native'
import ImageViewer from './components/imageViewer'
import Button from './components/Button'
import React, { useState } from 'react'

const PlaceholderImage = require('./assets/images/rajaja.png')

export default function App() {
  const [selectedImage, setSelectedImage] = useState('string')

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    })

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
    } else {
      alert('You did not select any image.')
    }
  }
  return (
    <View style={styles.container}>
      <View>
        <ImageViewer
          placeholderImageSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
      </View>
      <Text style={styles.title1}>Super Cool!</Text>
      <Button label={'poggers?'} onPress={pickImageAsync}></Button>
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
  },
})
