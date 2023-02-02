import React from 'react'
import { render } from '@testing-library/react'
import { Title } from '@/components/Title'
import { TitleProps } from '@/components/Title/interfaces'
import { faker } from '@faker-js/faker'

type SutTypes = {
  sut: TitleProps
}
const makeFakeProps = (): SutTypes => {
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
    const { sut } = makeFakeProps()
    render(<Title data={sut.data} />)
    expect(sut.data.title).not.toBe('')
  })
})
