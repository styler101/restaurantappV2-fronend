import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'Orbitron', arial;

  strong {
    font-family: 'Orbitron', arial;
  }
`

export const Item = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  font-family: 'Orbitron', arial;
  border-radius: 4px;
  margin: 0 0.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
`
