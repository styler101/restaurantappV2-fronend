import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ComponentProps } from './interfaces'
import homeLogo from '@/assets/img/svg/logotext.svg'
import profileLogo from '@/assets/img/svg/profile.svg'
import powerOff from '@/assets/img/svg/poweroff.svg'
import * as S from './styles'

export function SideBar(props: ComponentProps) {
  const { options } = props
  const navigate = useNavigate()
  const [activeItem, setActiveItem] = React.useState<number>(0)

  function handleActiveItem(index: number, pathName: string): void {
    navigate(pathName)
    setActiveItem(index)
  }
  return (
    <S.Container>
      <header>
        <img src={homeLogo} alt="logo text" />
      </header>
      <S.List>
        {options.map((item, index) => (
          <S.ListItem
            key={index}
            active={activeItem === index}
            onClick={() => handleActiveItem(index, item.pathName)}>
            {item.icon()}
            <span> {item.title}</span>
            <div />
          </S.ListItem>
        ))}
      </S.List>
      <S.Footer>
        <S.ListItem>
          <img src={profileLogo} alt="profile-logo" />
          <span> Perfil</span>
        </S.ListItem>
        <S.ListItem>
          <img src={powerOff} alt="profile-logo" />
          <span> Sair </span>
        </S.ListItem>
      </S.Footer>
    </S.Container>
  )
}
