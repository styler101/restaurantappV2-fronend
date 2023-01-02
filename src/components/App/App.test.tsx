import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from './index'
import { Ui } from '../../pages/Signin/ui'

describe('App Component', () => {
  test('Ensure the App Component be render', () => {
    render(<App />)
  })

  test('Ensure the SignIn Component be render on App Component', () => {
    render(<Ui />)
  })
})
