import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RegularText = ({children, customStyle, ...otherProps}) => {
  return (
    <Text style={[styles.text, customStyle]} {...otherProps}>{children}</Text>
  )
}

export default RegularText

const styles = StyleSheet.create({
    text: {
        fontFamily: "Helvetica",
        fontWeight: "300"
    }
})