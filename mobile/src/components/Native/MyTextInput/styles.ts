import { darken } from 'polished'
import styled from 'styled-components/native'

const Style = styled.TextInput`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 300px;
  height: 42px;
  font-size: 18px;
  padding-left: ${({ theme }) => theme.sizes['3'] + 'px'};
  border-radius: ${({ theme }) => theme.sizes['2'] + 'px'};

  background-color: ${({ theme }) => darken(0.1, theme.colors.white)};
`

export default Style
