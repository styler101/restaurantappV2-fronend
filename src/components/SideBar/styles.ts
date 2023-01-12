import styled from 'styled-components'

export const Container = styled.div`
  padding: 3.5rem;
  width: 10.8rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid rgba(200, 200, 200, 0.4);
  background-color: ${(props) => props.theme.colors.white.light};
`

export const List = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 3.2rem 0;
  min-height: 432px;
`

export const ListItem = styled.li`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 23px;
    height: 23px;
    stroke: red;
    color: red;
  }

  span {
    display: block;
    margin-top: 0.8rem;
    font-size: 1.4rem;
    line-height: 140%;
    color: ${(props) => props.theme.colors.secundary[600]};
  }

  div {
    width: 2.3rem;
    margin-top: 0.8rem;
    height: 2px;
    background-color: ${(props) => props.theme.colors?.primary[400]};
  }
`

export const Footer = styled.footer`
  min-height: 232px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
