import React from 'react'
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

type typesButton = {
  label: string
  onPress: (event: GestureResponderEvent) => void
}

const Button = ({ label, onPress }: typesButton) => {
  return (
    <View>
      <Pressable style={styles.button} onPress={onPress}>
        <FontAwesome
          name="picture-o"
          size={18}
          color="#25292e"
          style={styles.buttonIcon}
        />
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginVertical: 10,
    borderRadius: 10,
  },
  buttonLabel: {
    fontSize: 20,
  },
  buttonIcon: {},
})
