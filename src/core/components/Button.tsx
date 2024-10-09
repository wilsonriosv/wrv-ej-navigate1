import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from 'core/constants'

// Interface para manejar las props
interface ButtonProps {
  title: string
  onPress: () => void
}

// Crear una función de componente que recibe las props
export const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.btnTouchOpac} onPress={() => onPress()}>
      <Text style={styles.txtBtnTouchOpac}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btnTouchOpac: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  txtBtnTouchOpac: {
    color: 'white',
    fontSize: 18,
  },
})
