import styled from 'styled-components'

export const Container = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  margin: 0.8rem 0;
  width: 100%;
  svg {
    margin: 0;
    margin-right: 0.8rem;
  }
  color: ${(props) => props.theme.colors.primary[400]};
`
