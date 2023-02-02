import React from 'react'
import { render, screen } from '@testing-library/react'
import { Title } from '@/components/Title'
import { TitleProps } from '@/components/Title/interfaces'
import { faker } from '@faker-js/faker'
import '@testing-library/jest-dom'

type SutTypes = {
  sut: TitleProps
}
const makeSut = (): SutTypes => {
  const makeProps = {
    title: faker.name.jobDescriptor(),
    quantity: faker.internet.httpStatusCode(),
  }
  return {
    sut: { data: makeProps },
  }
}
describe('Title Component', () => {
  test('ensure title component recieve a valid title', () => {
    const { sut } = makeSut()
    render(<Title data={sut.data} />)
    expect(sut.data.title).not.toBe('')
  })

  test('ensure title component recieve a valid title', () => {
    const { sut } = makeSut()
    render(<Title data={sut.data} />)
    expect(sut.data.title).not.toBe(null)
  })

  test('ensure that title component has a heading 1', () => {
    const { sut } = makeSut()
    render(<Title data={sut.data} />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
  })
})
