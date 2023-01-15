import styled from 'styled-components'
import { moveRight } from '@/shared/animations'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors?.primary[400]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    animation: ${moveRight} 0.5s ease-in;
  }
`
