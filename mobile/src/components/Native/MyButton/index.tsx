import React, { ReactNode } from 'react'
import Style, { Text } from './styles'

import {
  GestureResponderEvent,
  PressableProps,
  StyleProp,
  ViewStyle
} from 'react-native'

interface MyButtonProps extends PressableProps {
  title?: string
  icon?: ReactNode
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<ViewStyle>
  onPress?: (event: GestureResponderEvent) => void
}

const MyButton = ({
  textStyle,
  icon: Icon,
  title,
  ...props
}: MyButtonProps) => (
  <Style {...props}>
    {Icon && Icon}

    <Text style={textStyle}>{title}</Text>
  </Style>
)

export default MyButton
