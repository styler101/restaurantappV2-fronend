export interface SideBarProps {
  icon: () => JSX.Element
  title: string
  pathName: string
}

export interface ComponentProps {
  options: SideBarProps[]
}
