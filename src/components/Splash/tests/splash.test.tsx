import React from 'react'
import { render, screen } from '@testing-library/react'
import { Splash } from '../ui'

describe('Splash Component', () => {
  test('Should be render Splash Component', () => {
    render(<Splash />)
  })
})
