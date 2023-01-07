import styled from 'styled-components'

export const Container = styled.div`
  margin-top: ${(props) => props.theme.spacing?.sm};
  display: flex;
  flex-direction: column;
  width: 100%;
  label {
    margin-bottom: 0.8rem;
    color: ${(props) => props.theme.colors?.secundary[400]};
  }
  & + div {
    margin-top: 2rem;
  }
`
interface DividerProps {
  iconDirection?: 'right' | 'left'
}

export const Divider = styled.div<DividerProps>`
  width: 100%;
  border: 1px solid #e5e5e5;
  display: flex;
  padding: 0 4px;
  flex-direction: ${(props) =>
    props.iconDirection === 'right' ? 'row-reverse' : 'row'};
  align-items: center;
  height: 4.5rem;
  border-radius: 4px;
  justify-content: center;

  svg {
    cursor: pointer;
  }
  input {
    border: 0;
    flex: 1;
    background: transparent;
    height: 100%;
    padding: 0 8px;
    font-size: 1.6rem;
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    color: ${(props) => props.theme.colors?.secundary[400]};
    &::placeholder {
      color: ${(props) => props.theme.colors?.secundary[400]};
    }
  }
`
