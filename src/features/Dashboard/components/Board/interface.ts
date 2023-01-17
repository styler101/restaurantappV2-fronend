import { CardProps } from '../Card/interfaces'

export type BoardType = {
  type: 'WAITING' | 'IN_PROGRESS' | 'DONE'
  cards: CardProps[]
}
