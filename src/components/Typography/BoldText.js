import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BoldText = ({children, customStyle, ...otherProps}) => {
  return (
      <Text style={[styles.text, customStyle]} {...otherProps}>{children}</Text>
  )
}

export default BoldText

const styles = StyleSheet.create({
    text: {
        fontFamily: "Helvetica",
        fontWeight: "700"
    }
})