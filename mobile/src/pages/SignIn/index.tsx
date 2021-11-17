import React, { useContext } from 'react'
import Style, {
  Content,
  ForgotPassword,
  Header,
  Password,
  Signup,
  StartBuying
} from './styles'

import MyButton from '../../components/Native/MyButton'
import MyTextInput from '../../components/Native/MyTextInput'
import { ScreenType } from '../../types/reactNavigation'

import { LinearGradient } from 'expo-linear-gradient'
import { Formik } from 'formik'
import { Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { ThemeContext } from 'styled-components'

interface SignInProps extends ScreenType<'signIn'> {}

const SignIn = ({ navigation }: SignInProps) => {
  const theme = useContext(ThemeContext)

  return (
    <Style>
      <LinearGradient
        nativeID='test'
        style={{ height: '100%', width: '100%' }}
        colors={[theme.colors.primary, theme.colors.secondary]}
      />

      <Content>
        <Header>
          <Image
            style={{ width: 120, height: 120 }}
            source={require('../../../public/watermelon.png')}
          />
        </Header>

        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values: any) => console.log(values)}
        >
          {({ values, handleBlur, handleSubmit, handleChange }) => (
            <>
              <MyTextInput
                placeholder='E-mail'
                value={values.email}
                onBlur={handleBlur('email')}
                onChangeText={handleChange('email')}
              />

              <Password
                secureTextEntry
                placeholder='Senha'
                value={values.password}
                onBlur={handleBlur('password')}
                onChangeText={handleChange('password')}
              />

              <MyButton title='Entrar' onPress={() => handleSubmit()} />
            </>
          )}
        </Formik>

        <Signup
          title='Cadastrar'
          onPress={() => navigation.navigate('signUp')}
        />

        <ForgotPassword title='Esqueci minha senha' />

        <StartBuying
          title='Começar comprando'
          icon={
            <Icon
              name='shopping-cart'
              size={theme.sizes['4']}
              color={theme.colors.secondary}
            />
          }
        />
      </Content>
    </Style>
  )
}

export default SignIn
