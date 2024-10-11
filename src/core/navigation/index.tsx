import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const hideHeader = { headerShown: false }

export function NavigationApp() {
  const Stack = createNativeStackNavigator()
  function AuthStack() {
    //Función que renderiza el stack de navegación
    return (
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={() => <Text>Hola desde login</Text>}
          options={hideHeader}
        />
        <Stack.Screen
          name='Register'
          component={() => <Text>Hola desde register</Text>}
          options={hideHeader}
        />
        {/* Add other screens for authentication */}
      </Stack.Navigator>
    )
  }

  const Tab = createBottomTabNavigator()
  function MainApp() {
    //Función que renderiza el stack de navegación
    return (
      <Tab.Navigator>
        <Tab.Screen
          name='Home'
          component={() => <Text>Hola desde Home</Text>}
          options={hideHeader}
        />
        <Tab.Screen
          name='Profile'
          component={() => <Text>Hola desde Profile</Text>}
          options={hideHeader}
        />
        {/* Add other screens for main app */}
      </Tab.Navigator>
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Authentication'
          component={AuthStack}
          options={hideHeader}
        />
        <Stack.Screen name='MainApp' component={MainApp} options={hideHeader} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
