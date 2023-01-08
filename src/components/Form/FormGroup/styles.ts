import styled, { css } from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  input {
    height: 42px;
    padding: 0 0.8rem !important;
  }
  & + div {
    margin-top: ${(props) => props.theme.spacing.base};
  }

  label {
    font-size: 1.4rem;
    color: ${(props) => props.theme.colors.secundary[300]};
  }
`

interface WrapperProps {
  error: boolean
}
export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.error &&
    css`
      label {
        color: ${(props) => props.theme.colors.primary[400]};
      }
      input {
        border-color: ${(props) => props.theme.colors.primary[400]};
        background-color: #f4dede;
        color: #e0b4b4;
        &::placeholder {
          color: #e0b4b4;
        }
      }
    `}
`
