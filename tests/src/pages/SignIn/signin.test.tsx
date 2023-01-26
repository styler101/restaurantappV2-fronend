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
    const fakeEmail = 'any_fakemail@mail.com'
    const email = fireEvent.input(screen.getByPlaceholderText(/email/i), {
      target: {
        value: 'any_email@mail.com',
      },
    })

    expect(email).toEqual(validEmail(fakeEmail))
  })

  test('user must provided a valid password', async () => {
    render(<Ui />)

    const password = await userEvent.type(
      screen.getByPlaceholderText(/ senha/i),
      'any_password'
    )
    expect(password).not.toBe(false)
  })

  test('should enabled the button after all fields are valid', async () => {
    render(<Ui />)
    await userEvent.type(
      screen.getByPlaceholderText(/email/i),
      'any_email@mail.com'
    )
    await userEvent.type(screen.getByPlaceholderText(/ senha/i), 'any_password')
    const button = await screen.findByRole('button', { name: /fazer login/i })

    expect(button.getAttribute('disabled')).toBeNull()
  })
})
