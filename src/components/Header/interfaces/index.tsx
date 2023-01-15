export interface HeaderProps {
  data: {
    title: string
    icon: JSX.Element | string
    description: string
    showTimer: boolean
    extraTitleContent?: JSX.Element
  }
}
