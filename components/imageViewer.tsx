import { Image, StyleSheet, View } from 'react-native'
import React from 'react'

type ImageViewer = {
  selectedImage: 'string'
}

const ImageViewer = ({ placeholderImageSource, selectedImage }) => {
  const imageSource =
    selectedImage !== null ? { uri: selectedImage } : placeholderImageSource
  return (
    <View>
      <Image source={imageSource} style={styles.image} />
    </View>
  )
}

export default ImageViewer

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 500,
    margin: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#109999',
  },
})
