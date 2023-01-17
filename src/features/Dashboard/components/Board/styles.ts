import styled from 'styled-components'

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
    margin-bottom: 0.6rem;
    strong {
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
  padding: 0 3.2rem;
  overflow-y: auto;
`
