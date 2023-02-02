export function getCurrentTimeString(): string {
  const date = new Date().toLocaleTimeString()
  return date
}

export function getHoursAndMinutesToSomeHour(date: string): string[] {
  const [hours, minutes] = date.split(':')
  return [hours, minutes]
}
