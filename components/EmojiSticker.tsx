import React from 'react'
import { View, Image } from 'react-native'
import {
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
} from 'react-native-gesture-handler'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedGestureHandler,
  withSpring,
} from 'react-native-reanimated'

const AnimatedImage = Animated.createAnimatedComponent(Image)

export default function EmojiSticker({ imageSize, stickerSource }) {
  const scaleImage = useSharedValue(imageSize)
  const onDoubleTap = useAnimatedGestureHandler<TapGestureHandlerGestureEvent>({
    onStart: () => {},
    onActive: () => {
      if (scaleImage.value) {
        scaleImage.value = scaleImage.value * 2
      }
    },
    onEnd: () => {},
  })
  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
      position: 'absolute',
    }
  })

  return (
    <View style={{ top: -350 }}>
      <TapGestureHandler onGestureEvent={onDoubleTap} numberOfTaps={2}>
        <AnimatedImage
          source={stickerSource}
          resizeMode="contain"
          style={[imageStyle, { width: imageSize, height: imageSize }]}
        />
      </TapGestureHandler>
    </View>
  )
}
