import styled from 'styled-components'
import { shade } from 'polished'

interface ButtonProps {
  disabled: boolean
}
export const Container = styled.button<ButtonProps>`
  width: 100%;
  margin-top: 1.6rem;
  height: 4.2rem;
  border: 0;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors?.primary[400]};
  font-weight: 700;
  color: #fff;
  &:hover {
    background-color: ${shade(0.04, '#d73935')};
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors?.secundary[300]};
    color: #fff;
    font-weight: 700;
    cursor: not-allowed;
  }
`
