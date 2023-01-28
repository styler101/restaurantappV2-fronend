import React from 'react'
import { Records } from '@/components/Records'
import { render } from '@testing-library/react'

describe('Records Component', () => {
  test('Ensure that records component receive a header', () => {
    const header = {}
    render(<Records header={header} />)
    expect(header).not.toBe(null)
  })
})
