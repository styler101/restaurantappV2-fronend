import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors?.white.light};
  border-right: 1px solid rgba(220, 220, 220, 0.4);
  display: flex;
  flex-direction: row;
`
export const Wrapper = styled.div`
  flex: 1;
  padding: 1rem;
`
