import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  overflow-x: hidden;
`
export const Wrapper = styled.div`
  width: 100%;
`
export const Form = styled.form`
  width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    margin-top: 2.6rem;
  }

  svg {
    margin: 0 8px;
  }
`
