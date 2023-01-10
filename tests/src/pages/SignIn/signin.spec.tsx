import React from 'react'
import { validEmail } from '@/utils/Validators'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Ui } from '@/features/Signin/ui'

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => jest.fn(),
}))

describe('SignIn Component', () => {
  test('should be provided the valid email', async () => {
    render(<Ui />)
    const fakeEmail = 'any_mail@mail.com'
    const email = fireEvent.input(screen.getByRole('textbox'), {
      target: { value: 'Test recipe' },
    })
    expect(email).toBe(validEmail(fakeEmail))

    // expect(validEmail(email.in)).toBe(validEmail(fakeEmail))
  })
})
