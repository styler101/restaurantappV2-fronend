import styled from 'styled-components'

export const Input = styled.input`
  border: 1px solid ${(props) => props.theme.colors?.secundary[300]};
  background: transparent;
  height: 100%;
  font-size: 1.6rem;
  margin-top: 0.8rem;
  border-radius: 0.4rem;
  font-size: 1.5rem;
  font-weight: 400;

  color: ${(props) => props.theme.colors?.secundary[300]};
  &::placeholder {
    color: ${(props) => props.theme.colors?.secundary[300]};
  }

  &:disabled {
    background-color: #f3f3f3;
    cursor: not-allowed;
  }
`
