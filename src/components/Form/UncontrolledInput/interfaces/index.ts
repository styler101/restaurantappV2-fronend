import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export interface ControlledInputProps {
  label?: string | JSX.Element
  icon?: JSX.Element | null
  input?: InputProps
  renderIconOnDirection?: 'right' | 'left'
  width?: string
}
