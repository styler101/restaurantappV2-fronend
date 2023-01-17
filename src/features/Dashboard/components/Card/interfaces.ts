export interface CardProps {
  type: string
  id: number
  name: string
  quantity: number
}

export interface ComponentProps {
  data: {
    type: string
    id: number
    name: string
    quantity: number
  }
}
