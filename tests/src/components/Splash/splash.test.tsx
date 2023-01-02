import React from 'react'
import { render, screen } from '@testing-library/react'
import { Splash } from '@/components/Splash'

describe('Splash Component', () => {
  test('Should be render Splash Component', () => {
    render(<Splash />)
  })

  test('Should not render Splash Component on the second render', async () => {
    render(<Splash />)
    await setTimeout(() => {
      const wrapper = screen.queryByTestId('splash-container')
      expect(wrapper).not.toBeInTheDocument()
    }, 2000)
  })
})
