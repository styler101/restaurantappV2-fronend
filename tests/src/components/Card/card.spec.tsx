import React from 'react'
import { render } from '@testing-library/react'
import { Card } from '@/features/Dashboard/components/Card'
import { notEmptyStringOrDefault } from '@/utils/Validators'

const makeOptions = () => ['WAITING', 'IN_PROGRESS', 'DONE']

describe('Card Component', () => {
  test('Ensure that card component be render with a correct type', () => {
    const mockCard = {
      type: 'DONE',
      id: 1,
      name: 'any_name',
      quantity: 0,
    }
    const mockTypes = makeOptions()
    render(<Card data={mockCard} provided={0} />)
    expect(mockTypes).toContain(mockCard.type)
  })

  test('Ensure that card component be render with a name', () => {
    const mockCard = {
      type: 'DONE',
      id: 1,
      name: null,
      quantity: 0,
    }
    render(<Card data={mockCard} provided={0} />)
    expect(notEmptyStringOrDefault(mockCard.name)).not.toBeNull()
  })
})
