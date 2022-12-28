import React from 'react'
import { render, screen } from '@testing-library/react'
import { Ui } from '../ui'
import { Splash } from '../../../components/Splash/ui'

describe('SignIn Component', () => {
  test('Ensure the SignIn Component be render', () => {
    render(<Ui />)
  })

  test('should render Splash component', () => {
    const { getByRole } = render(<Splash />)
    const heading = getByRole('heading', { level: 1 })
    expect(heading.innerHTML).toBe(' Splash Screen')
  })
})
