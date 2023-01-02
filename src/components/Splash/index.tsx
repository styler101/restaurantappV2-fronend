import React, { useEffect, useState, useRef } from 'react'
import logo from '@/assets/img/svg/logo.svg'
import * as S from './styles'

export function Splash() {
  const firstRender = useRef(true)
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false)
      if (firstRender.current) {
        firstRender.current = false
        setIsVisible(firstRender.current)
      }
    }, 2000)
  }, [])

  if (!isVisible) return null
  return (
    <S.Container data-testid="splash-container">
      <img src={logo} alt="logo" />
    </S.Container>
  )
}
