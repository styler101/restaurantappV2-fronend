import React from 'react'
import { Records } from '@/components/Records'
import { HeaderProps } from '@/components/Records/interfaces'
import { render } from '@testing-library/react'

type SutTypes = {
  header: HeaderProps[]
}

const makeHeader = (): HeaderProps[] => [
  { label: 'any_label', content: 'any_content' },
]

const makeSut = (): SutTypes => {
  return {
    header: makeHeader(),
  }
}
describe('Records Component', () => {
  test('Ensure that records component receive a header', () => {
    const { header } = makeSut()
    render(<Records header={header} />)
    expect(header).not.toBe(null)
  })

  test('Ensure that header props receive a correct props', () => {
    const { header } = makeSut()
    render(<Records header={header} />)
    expect(header).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ label: 'any_label', content: 'any_content' }),
      ])
    )
  })
})
