import styled from 'styled-components'

export const Title = styled.h1`
  margin: 1.6rem 0;
  color: ${(props) => props.theme.colors?.secundary[700]};
  font-size: 2.4rem;
  display: flex;
  align-items: center;

  span {
    margin-left: 0.8rem;
    padding: 0.4rem 0.8rem;
    width: 2.6rem;
    height: 2.6rem;
    background-color: ${(props) => props.theme.colors?.secundary[300]};
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 1.6rem;
  }
`
