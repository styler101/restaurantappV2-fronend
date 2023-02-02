import React from 'react'
import * as S from './styles'
import { ComponentProps } from './interfaces'
import { home, profile, poweroff } from '@/assets/img/svg/sidebar'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export function SideBar(props: ComponentProps) {
  const { options } = props
  const navigate = useNavigate()
  const [activeItem, setActiveItem] = React.useState<number>(0)

  function handleActiveItem(index: number, pathName: string): void {
    navigate(pathName)
    setActiveItem(index)
  }

  function handleSignOut() {
    localStorage.removeItem('@waiterapp')
    toast.success('Obrigado, volte sempre!')
    navigate('/')
  }
  return (
    <S.Container>
      <header>
        <img src={home} alt="logo text" />
      </header>
      <S.List>
        {options.map((item, index) => (
          <S.ListItem key={index} active={activeItem === index}>
            <button onClick={() => handleActiveItem(index, item.pathName)}>
              {item.icon(activeItem === index)}
              <span> {item.title}</span>
              <div />
            </button>
          </S.ListItem>
        ))}
      </S.List>
      <S.Footer>
        <S.ListItem>
          <button>
            <img src={profile} alt="profile-logo" />
            <span> Perfil</span>
          </button>
        </S.ListItem>
        <S.ListItem>
          <button onClick={handleSignOut}>
            <img src={poweroff} alt="profile-logo" />
            <span> Sair </span>
          </button>
        </S.ListItem>
      </S.Footer>
    </S.Container>
  )
}
