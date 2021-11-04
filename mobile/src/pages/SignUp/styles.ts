import MyButton from '../../components/Native/MyButton'

import styled from 'styled-components/native'

export const BackButton = styled(MyButton)`
  position: absolute;
  top: ${({ theme }) => theme.sizes['3'] + 'px'};
  left: ${({ theme }) => theme.sizes['3'] + 'px'};

  width: auto;
  height: auto;
  padding: ${({ theme }) => theme.sizes['3'] + 'px'};

  background-color: transparent;
`

const Style = styled.View`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
`

export default Style
