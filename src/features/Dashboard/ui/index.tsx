import React from 'react'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'

import timeLogo from '@/assets/img/svg/dashboard/clock.svg'
import chef from '@/assets/img/svg/dashboard/cozinhando.svg'
import check from '@/assets/img/svg/dashboard/check.svg'
import homeLogo from '@/assets/img/svg/header/customhome.svg'

import { orders } from '@/data/orders'
import { Card } from '../components/Card'
import * as S from './styles'

export function Ui() {
  return (
    <S.Container>
      <Header
        data={{
          title: 'Home',
          icon: <S.Icon src={homeLogo} />,
          description: 'Acompanhe os pedidos dos clientes',
          showTimer: true,
        }}
      />
      <Container>
        <S.Wrapper>
          <S.Kanban>
            <header>
              <img src={timeLogo} alt="time" />
              <strong>
                Fila de Espera <span> {orders.length}</span>
              </strong>
            </header>
            <S.CardsWrapper>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </S.CardsWrapper>
          </S.Kanban>
          <S.Kanban>
            <header>
              <img src={chef} alt="time" />
              <strong>
                Em Produção <span> 1</span>
              </strong>
            </header>
          </S.Kanban>
          <S.Kanban>
            <header>
              <img src={check} alt="time" />
              <strong>
                {' '}
                Pronto <span> 1</span>
              </strong>
            </header>
          </S.Kanban>
        </S.Wrapper>
      </Container>
    </S.Container>
  )
}
