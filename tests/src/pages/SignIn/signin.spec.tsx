import React from 'react'
import { render } from '@testing-library/react'
import { Ui } from '@/pages/Signin/ui'
import { Splash } from '@/components/Splash/ui'

describe('SignIn Component', () => {
  test('Ensure the SignIn Component be render', () => {
    render(<Ui />)
  })

  test('Shoul render Splash Component', () => {
    render(<Splash />)
  })
})
