import React from 'react'
import { render, screen } from '@testing-library/react'
import { Header } from '@/components/Header'

describe('Header Component', () => {
  test('Ensure the header component recieve a title', () => {
    const fakeProps = {
      title: 'any_title',
      description: 'any_description',
      icon: 'fake_icon',
    }
    render(<Header data={fakeProps} />)
  })

  test('Ensure the header componente recieve a description', () => {
    const fakeProps = {
      title: 'any_title',
      description: 'any_description',
      icon: 'fake_icon',
    }
    render(<Header data={fakeProps} />)
  })
})
