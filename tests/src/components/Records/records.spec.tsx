import React from 'react'
import { Records } from '@/components/Records'
import { render } from '@testing-library/react'

describe('Records Component', () => {
  test('Ensure that records component receive a header', () => {
    const header = [{ label: 'any_label', content: 'any_content' }]
    render(<Records header={header} />)
    expect(header).not.toBe(null)
  })

  test('Ensure that records component receive a correct props', () => {
    const header = [{ label: 'any_content', content: 'any_content' }]
    render(<Records header={header} />)
    expect(header).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ label: 'any_label', content: 'any_content' }),
      ])
    )
  })
})
