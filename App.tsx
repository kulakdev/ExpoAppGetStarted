import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import 'expo-dev-menu'
import { StatusBar } from 'expo-status-bar'
import * as ImagePicker from 'expo-image-picker'
import ImageViewer from './components/ImageViewer'
import Button from './components/Button'
import IconButton from './components/IconButton'
import CircleButton from './components/CircleButton'
import EmojiPicker from './components/EmojiPicker'
import EmojiList from './components/EmojiList'
import EmojiSticker from './components/EmojiSticker'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { captureRef } from 'react-native-view-shot'
import * as MediaLibrary from 'expo-media-library'
import domtoimage from 'dom-to-image'

export const PlaceholderImage = require('./assets/images/rajaja.png')

export default function App() {
  const [status, requestPermission] = MediaLibrary.usePermissions()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [showAppOptions, setShowAppOptions] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [pickedEmoji, setPickedEmoji] = useState(null)

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    })

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
      setShowAppOptions(true)
    } else {
      alert('You did not select any image.')
    }
  }

  const onReset = () => {
    setShowAppOptions(false)
  }

  const onAddSticker = () => {
    setIsModalVisible(true)
  }

  const onModalClose = () => {
    setIsModalVisible(false)
  }

  const onSaveImageAsync = async () => {
    try {
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      })

      await MediaLibrary.saveToLibraryAsync(localUri)
      if (localUri) {
        alert('Saved!')
      }
    } catch (e) {
      console.log(e)
    }
  }

  if (status === null) {
    requestPermission()
  }

  const imageRef = useRef(null)

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewer
            placeholderImageSource={PlaceholderImage}
            selectedImage={selectedImage}
          />
          <View style={styles.footerContainer}>
            {pickedEmoji !== null ? (
              <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
            ) : null}
          </View>
        </View>
      </View>
      <Text style={styles.title1}>Super Cool!</Text>
      <View style={styles.bottomBar}>
        {showAppOptions ? (
          <View style={styles.footerContainer}>
            <View style={styles.optionsContainer}>
              <View style={styles.optionsRow}>
                <IconButton icon="refresh" label="Reset" onPress={onReset} />
                <CircleButton onPress={onAddSticker} />
                <IconButton
                  icon="save-alt"
                  label="Save"
                  onPress={onSaveImageAsync}
                />
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.footerContainer}>
            <Button label="Choose a photo" onPress={pickImageAsync} />
            <Button
              label="Use this photo"
              onPress={() => setShowAppOptions(true)}
            />
          </View>
        )}
      </View>
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    position: 'relative',
  },
  title1: {
    color: '#fff',
    fontSize: 20,
  },
  footerContainer: {},
  optionsContainer: {
    position: 'relative',
  },
  optionsRow: {
    alignContent: 'center',
    flexDirection: 'row',
  },
})
