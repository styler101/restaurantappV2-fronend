import { DraggableProvided } from 'react-beautiful-dnd'
export interface CardProps {
  type: string
  id: number
  name: string
  quantity: number
}

export interface ComponentProps {
  provided: DraggableProvided
  data: {
    type: string
    id: number
    name: string
    quantity: number
  }
}
