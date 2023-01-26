import React from 'react'
import { render } from '@testing-library/react'
import { App } from '@/components/App'

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => jest.fn(),
}))
describe('App Component', () => {
  test('Ensure the App Component be render', () => {
    render(<App />)
  })
})
