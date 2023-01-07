import React from 'react'
import { render, screen } from '@testing-library/react'
import { UnControlledInput } from '@/components/Form/UncontrolledInput'

describe('Uncontrolled Input', () => {
  test('Should render UncontrollerInput ', () => {
    render(<UnControlledInput />)
  })
})
