import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const Icon = styled.img`
  stroke: #000;
  width: 22px;
  height: 22px;
`

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 1.6rem;
`

export const Kanban = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #cccccc;
  border-radius: 4px;
  padding: 1.6rem;

  header {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 0.4rem;
      font-size: 1.8rem;
    }

    span {
      background: rgba(204, 204, 204, 0.2);
      padding: 0.4rem 0.8rem;
    }
  }
`

export const CardsWrapper = styled.div`
  width: 100%;
  max-height: 48.4rem;
  overflow-y: auto;
`
