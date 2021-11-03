import styled from 'styled-components/native'

const Style = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
`

export default Style
