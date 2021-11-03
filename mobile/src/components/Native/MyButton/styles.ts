import styled from 'styled-components/native'

const Style = styled.Pressable`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 300px;
  height: 42px;
  border-radius: ${({ theme }) => theme.sizes['2'] + 'px'};

  background-color: ${({ theme }) => theme.colors.primary};
`

export const Text = styled.Text`
  font-size: 18px;

  color: ${({ theme }) => theme.colors.white};
`

export default Style
