import MyButton from '../../components/Native/MyButton'
import MyTextInput from '../../components/Native/MyTextInput'

import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'

export const Password = styled(MyTextInput)`
  margin: ${({ theme }) => theme.sizes['3'] + 'px'} 0;
`

export const Signup = styled(MyButton)`
  margin-top: ${({ theme }) => theme.sizes['3'] + 'px'};

  background-color: ${({ theme }) => theme.colors.secondary};
`

export const Header = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 300px;
  margin-bottom: ${({ theme }) => theme.sizes['3'] + 'px'};
`

export const ForgotPassword = styled(MyButton).attrs(({ theme }) => {
  const { textStyle } = StyleSheet.create({
    textStyle: { color: theme.colors.primary }
  })

  return { textStyle }
})`
  width: 300px;
  font-size: 16px;
  text-align: center;

  margin: ${({ theme }) => theme.sizes['2'] + 'px'} 0;

  background-color: transparent;
`

export const StartBuying = styled(MyButton).attrs(({ theme }) => {
  const { textStyle } = StyleSheet.create({
    textStyle: { marginLeft: theme.sizes['2'], color: theme.colors.secondary }
  })

  return { textStyle }
})`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  height: 42px;

  background-color: transparent;
`

export const Content = styled.View`
  position: absolute;

  padding: ${({ theme }) => theme.sizes['3'] + 'px'};
  border-radius: ${({ theme }) => theme.sizes['2'] + 'px'};

  background-color: ${({ theme }) => theme.colors.white};
`

const Style = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
`

export default Style
