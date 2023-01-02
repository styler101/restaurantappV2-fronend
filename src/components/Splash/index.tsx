import React, { useEffect, useState, useRef } from 'react'
import { SplashProps } from './interfaces'
import logo from '@/assets/img/svg/logo.svg'
import * as S from './styles'

export function Splash(props: SplashProps) {
  const { isVisible, setIsVisible } = props
  const firstRender = useRef(true)

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
