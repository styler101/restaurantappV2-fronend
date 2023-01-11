import styled from 'styled-components'

export const Container = styled.nav`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors?.white.light};
  width: 8rem;
  border: 1px solid #ccc;
  position: fixed;
`
