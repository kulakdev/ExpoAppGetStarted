import { Image, StyleSheet, View } from 'react-native'
import React from 'react'

const ImageViewer = () => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://media.discordapp.net/attachments/503468456562262026/1088233288637874277/image.png',
        }}
        style={styles.image}
      />
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
