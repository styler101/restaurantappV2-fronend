import moment from 'moment'
export function realTimeFormat(): any {
  const currentTime = new Date()
  let parsedTime: any
  const timer = setInterval(() => {
    parsedTime = moment(currentTime).format('HH:mm')
    return parsedTime
  }, 1000)

  return timer
}
