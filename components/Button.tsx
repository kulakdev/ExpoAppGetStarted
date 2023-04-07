import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const Button = ({label} : {label: string}) => {
  return (
    <View>
      <Pressable style={styles.button} onPress={() => alert('You are wonderful, smile')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginVertical: 10,
        borderRadius: 10,
    },
    buttonLabel: {
        fontSize: 20,
    }
});
