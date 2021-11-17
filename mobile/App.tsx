import React from 'react'

import SignIn from './src/pages/SignIn'
import theme from './src/styles/themes'
import SignUp from './src/pages/SignUp'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ThemeProvider } from 'styled-components'

const Stack = createNativeStackNavigator()

export type StackParamsType = {
  signIn: undefined
  signUp: undefined
}

const App = () => (
  <ThemeProvider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='signIn'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='signIn' component={SignIn} />

        <Stack.Screen name='signUp' component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  </ThemeProvider>
)

export default App
