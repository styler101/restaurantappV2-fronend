export interface SideBarProps {
  icon: (isChecked: boolean) => JSX.Element
  title: string
  pathName: string
}

export interface ComponentProps {
  options: SideBarProps[]
}
