import styled from 'styled-components'
import { Rotate } from '@/shared/animations'
import { SpinnerProps as ContainerProps } from './interfaces'

export const Container = styled.div<ContainerProps>`
  width: ${(props) => (props.width ? `${props.width}rem` : '1.6rem')};
  height: ${(props) => (props.height ? `${props.height}rem` : '1.6rem')};
  border-radius: 50%;
  border: 0.3rem solid transparent;
  border-left-color: rgba(255, 255, 255, 0.4);
  animation: ${Rotate} 0.5s ease-in infinite;
`
