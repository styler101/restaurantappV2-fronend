import React from 'react'
import { screen, render } from '@testing-library/react'
import App from './App'

describe('App Component', () => {
  test('Ensure the component be render', () => {
    render(<App />)
  })
})
