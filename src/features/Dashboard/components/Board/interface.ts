import { CardProps } from '../Card/interfaces'

export type BoardType = {
  data: {
    type: 'WAITING' | 'IN_PROGRESS' | 'DONE'
    cards: CardProps[]
  }
}
