import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from '@/components/App'
import { Signin } from '@/pages/Signin'

describe('App Component', () => {
  test('Ensure the App Component be render', () => {
    render(<App />)
  })

  test('Ensure the SignIn Component be render on App Component', () => {
    render(<Signin />)
  })
})
