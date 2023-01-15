import React from 'react'
import {
  getCurrentTimeString,
  getHoursAndMinutesToSomeHour,
} from '@/utils/Formatters/date'
import * as S from './styles'

export function Timer() {
  let time = getCurrentTimeString()
  const [currentTime, setCurrentTime] = React.useState<string>(time)
  const [hours, minutes] = getHoursAndMinutesToSomeHour(currentTime)

  function updateTime() {
    let time = new Date().toLocaleTimeString()
    setCurrentTime(time)
  }
  setInterval(updateTime, 1000)

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
