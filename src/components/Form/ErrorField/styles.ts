import styled from 'styled-components'

export const Container = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  padding-top: 0.8rem;
  width: 100%;
  svg {
    margin: 0;
    margin-right: 0.8rem;
  }
  color: ${(props) => props.theme.colors.primary[400]};
`
