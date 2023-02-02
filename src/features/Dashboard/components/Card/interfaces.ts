import { DraggableProvided } from 'react-beautiful-dnd'
export interface CardProps {
  type: string
  id: number
  name: string
  quantity: number
}

export interface ComponentProps {
  // foi necessário alterar o tipo do provided para a realização dos testes
  provided: DraggableProvided | any
  data: {
    type: string
    id: number
    name: string | null
    quantity: number | null
  }
}
