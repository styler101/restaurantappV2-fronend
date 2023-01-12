import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;

      h2 {
        margin-left: 0.8rem;
        font-size: 2.4rem;
      }
    }
  }

  p {
    color: ${(props) => props.theme.colors?.secundary[400]};
    margin-top: 0.8rem;
  }
`
