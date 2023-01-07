import { keyframes } from 'styled-components'

export const moveRight = keyframes`
 0%{
  transform: translateX(-80px);
  opacity: 0.4;
  }

  25%{
    opacity: 0.6;
  }

  50%{
    opacity:0.8;
  }
 100%{
  transform: translateX(0);
  opacity: 1;
 }
`
