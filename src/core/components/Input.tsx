import { StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from 'core/constants'

// Interface para manejar las props
interface InputProps {
  value: string
  onChange: (text: string) => void
}

// Crear una función de componente que recibe las props
export const Input = ({ value, onChange }: InputProps) => {
  const [inputValue, setInputValue] = useState('') // Estado para almacenar el valor del input

  const handleInputChange = (text: React.SetStateAction<string>) => {
    setInputValue(text) // Actualiza el estado con el nuevo texto
    console.log(text) // Muestra el texto ingresado en la consola
  }

  return (
    <TextInput
      placeholder='Escribe algo...'
      value={inputValue} // Controla el valor del input
      onChangeText={handleInputChange} // Maneja cambios en el input
      //onChangeText={text => onChange(text)}
      style={styles.txtInput}
    />
  )
}

const styles = StyleSheet.create({
  txtInput: {
    backgroundColor: COLORS.white,
    width: 300,
    padding: 16,
    borderRadius: 8, // Bordes redondeados
    borderColor: COLORS.secondary, // Color del borde
    borderWidth: 1, // Ancho del borde
    fontSize: 16, // Tamaño de la fuente
    color: COLORS.primary, // Color del texto
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4, // sombra para un efecto de profundidad
    elevation: 5, // Nivel de profundidad de la sombra
    marginBottom: 12, // Espacio inferior
  },
})
