import React from 'react'
import { Navigate } from 'react-router-dom'

interface RouteProps {
  children: React.ReactNode | JSX.Element | string | number | any
}

export function Route({ children }: RouteProps) {
  const token = JSON.parse(localStorage.getItem('@waiterapp:user') || '{}')
  const { accessToken } = token
  return accessToken ? children : <Navigate to={'/signin'} />
}
