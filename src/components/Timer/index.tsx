import React, { useEffect } from 'react'

import * as S from './styles'
import moment from 'moment'

export function Timer() {
  let time = new Date().toLocaleTimeString()
  const [currentTime, setCurrentTime] = React.useState<string>(time)

  function updateTime() {
    let time = new Date().toLocaleTimeString()
    setCurrentTime(time)
  }

  setInterval(updateTime, 1000)
  const [hours, minutes, seconds] = currentTime.split(':')
  return (
    <S.Container>
      <S.Item> {hours[0]}</S.Item>
      <S.Item> {hours[1]}</S.Item>
      <div> :</div>
      <S.Item> {minutes[0]}</S.Item>
      <S.Item> {minutes[1]}</S.Item>
      <strong> {Number(hours) > 12 ? 'PM' : 'AM'}</strong>
    </S.Container>
  )
}
