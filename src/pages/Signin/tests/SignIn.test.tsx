import React from 'react'
import { render, screen } from '@testing-library/react'
import { Ui } from '../ui'
import { Splash } from '../../../components/Splash/ui'

describe('SignIn Component', () => {
  test('Ensure the SignIn Component be render', () => {
    render(<Ui />)
  })

  test('Shoul render Splash Component', () => {
    render(<Splash />)
  })

  test('Ensure the Splash Component has a heading', () => {
    const { getByRole } = render(<Splash />)
    const heading = getByRole('heading', { level: 1 })
    expect(heading).toBe(screen.getByRole('heading', { level: 1 }))
  })
})
