import React from 'react'
import { StateAction } from '@/@types/generics'
export interface SplashProps {
  isVisible: boolean
  setIsVisible: StateAction<boolean>
}
