import styled, { keyframes } from 'styled-components'

const MoveDown = keyframes`
  0%{
    opacity: 0;
  }

  100%{
    opacity: 1;
  }
`

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors?.primary[400]};
  img {
    animation: ${MoveDown} 2s ease-out 1;
  }
`
