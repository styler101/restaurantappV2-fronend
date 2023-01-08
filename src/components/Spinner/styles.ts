import styled from 'styled-components'
import { SpinnerProps as ContainerProps } from './interfaces'
import { Rotate } from '@/shared/animations'

export const Container = styled.div<ContainerProps>`
  width: ${(props) => (props.width ? `${props.width}px` : '16px')};
  height: ${(props) => (props.height ? `${props.height}px` : '16px')};
  border-radius: 50%;
  border: 3px solid transparent;
  border-left-color: rgba(255, 255, 255, 0.4);
  animation: ${Rotate} 0.5s ease-in infinite;
`
