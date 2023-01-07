import React from 'react'
import { render } from '@testing-library/react'
import { Signin } from '@/pages/Signin'

describe('SignIn Component', () => {
  test('Ensure the SignIn Component be render', () => {
    render(<Signin />)
  })
})
