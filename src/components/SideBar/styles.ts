import styled, { css } from 'styled-components'

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
`

interface ActiveItem {
  active?: boolean
}

export const ListItem = styled.li<ActiveItem>`
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
    margin-top: 0.4rem;
  }

  ${(props) =>
    props.active &&
    css`
      span {
        color: ${(props) => props.theme.colors?.primary[400]};
      }

      div {
        width: 2.6rem;
        height: 2px;
        background-color: ${(props) => props.theme.colors?.primary[400]};
        transition: all 1.5s ease-out;
      }
    `}
`

export const Footer = styled.footer`
  width: 100%;
  height: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
