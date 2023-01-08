import styled from 'styled-components'

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

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
