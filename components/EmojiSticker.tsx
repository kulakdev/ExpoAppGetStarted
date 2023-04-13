import React, { useEffect, useState } from 'react'
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
  runOnJS,
} from 'react-native-reanimated'

const AnimatedImage = Animated.createAnimatedComponent(Image)

export default function EmojiSticker({ imageSize, stickerSource }) {
  const [tappedAlready, setTappedAlready] = useState(false)
  const onSetTapped = () => {
    console.log('i work')
    setTappedAlready(!tappedAlready)
  }

  const scaleImage = useSharedValue(imageSize)
  const onDoubleTap = useAnimatedGestureHandler<TapGestureHandlerGestureEvent>({
    onActive: () => {
      if (scaleImage.value) {
        scaleImage.value = scaleImage.value * (!tappedAlready ? 2 : 0.5)
      }
    },
    onEnd: () => {
      runOnJS(onSetTapped)()
    },
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
