import React from 'react'
import { View, Image } from 'react-native'

export default function EmojiSticker({ imageSize, stickerSource }) {
  return (
    <View style={{ top: -350, left: 100 }}>
      <Image
        source={stickerSource}
        resizeMode="contain"
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  )
}
