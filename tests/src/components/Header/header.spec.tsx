import React from 'react'
import { render } from '@testing-library/react'
import { Header } from '@/components/Header'

describe('Header Component', () => {
  test('ensure the header component recieve a title', () => {
    const fakeProps = {
      title: '',
      description: 'any_description',
      icon: 'fake_icon',
    }
    render(<Header data={fakeProps} />)
  })

  test('ensure the header component recieve a correct title', () => {
    const fakeProps = {
      title: 'anyTitle',
      description: 'any_description',
      icon: 'fake_icon',
    }
    render(<Header data={fakeProps} />)

    expect(fakeProps.title).toBeTruthy()
  })

  test('ensure the header component recieve a description', () => {
    const fakeProps = {
      title: 'any_title',
      description: '',
      icon: 'fake_icon',
    }
    render(<Header data={fakeProps} />)
  })

  test('ensure the header component recieve a correct description', () => {
    const fakeProps = {
      title: 'any_title',
      description: 'any_description',
      icon: 'fake_icon',
    }
    render(<Header data={fakeProps} />)
    expect(fakeProps.description).toEqual('any_description')
  })

  test('ensure the header component recieve a correct icon if has provided', () => {
    const fakeProps = {
      title: 'any_title',
      description: 'any_description',
      icon: <h1> Any Icon</h1>,
    }
    render(<Header data={fakeProps} />)
    expect(fakeProps.icon).toEqual(<h1> Any Icon</h1>)
  })
})
