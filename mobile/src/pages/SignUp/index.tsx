import React, { useContext } from 'react'
import Style, { BackButton } from './styles'

import { ScreenType } from '../../types/reactNavigation'

import { LinearGradient } from 'expo-linear-gradient'
import { Icon } from 'react-native-vector-icons/FontAwesome'
import { ThemeContext } from 'styled-components'

interface SignUpProps extends ScreenType<'signUp'> {}

const SignUp = ({ navigation }: SignUpProps) => {
  const theme = useContext(ThemeContext)

  return (
    <Style>
      <LinearGradient
        nativeID='test'
        style={{ height: '100%', width: '100%' }}
        colors={[theme.colors.primary, theme.colors.secondary]}
      />

      <BackButton
        title='Voltar'
        onPress={() => navigation.navigate('signIn')}
      />
    </Style>
  )
}

export default SignUp
