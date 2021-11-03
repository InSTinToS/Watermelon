import React from 'react'
import Style from './styles'

import { TextInputProps } from 'react-native'

interface MyTextInputProps extends TextInputProps {}

const MyTextInput = ({ ...props }: MyTextInputProps) => <Style {...props} />

export default MyTextInput
