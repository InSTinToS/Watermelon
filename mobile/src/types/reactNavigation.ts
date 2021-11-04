import { StackParamsType } from '../../App'

import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type ScreenType<RouteName extends keyof StackParamsType> =
  NativeStackScreenProps<StackParamsType, RouteName>
