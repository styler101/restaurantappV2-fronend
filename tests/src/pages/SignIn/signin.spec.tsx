import React from 'react'
import { render } from '@testing-library/react'
import { Signin } from '@/pages/Signin'
import { Splash } from '@/components/Splash'

describe('SignIn Component', () => {
  test('Ensure the SignIn Component be render', () => {
    render(<Signin />)
  })

  test('Shoul render Splash Component', () => {
    render(
      <Splash
        isVisible={true}
        setIsVisible={() => {
          return true
        }}
      />
    )
  })
})
