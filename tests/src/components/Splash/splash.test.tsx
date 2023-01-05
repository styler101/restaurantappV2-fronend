import React from 'react'
import { render, screen } from '@testing-library/react'
import { Splash } from '@/components/Splash'

interface SutProps {
  sut: SplashSub
}
class SplashSub {
  mock() {
    return {
      visible: true,
      setVisible: () => true,
    }
  }
}

const makeSut = () => {
  return new SplashSub().mock()
}
describe('Splash Component', () => {
  test('Should be render Splash Component', () => {
    const sut = makeSut()
    render(<Splash isVisible={sut.visible} setIsVisible={sut.setVisible} />)
  })

  test('Should not render Splash Component on the second render', async () => {
    const sut = makeSut()
    render(<Splash isVisible={sut.visible} setIsVisible={sut.setVisible} />)
    await setTimeout(() => {
      const wrapper = screen.queryByTestId('splash-container')
      expect(wrapper).not.toBeInTheDocument()
    }, 2000)
  })
})
