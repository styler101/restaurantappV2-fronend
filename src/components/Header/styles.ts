import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    color: ${(props) => props.theme.colors?.secundary[400]};
    margin-top: 0.8rem;
  }
`

export const LeftContent = styled.div`
  display: flex;
  flex-direction: row;
  h2 {
    margin-left: 0.8rem;
    font-size: 2.4rem;
  }
`

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
`
