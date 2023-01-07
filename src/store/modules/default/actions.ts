import { action } from 'typesafe-actions'

export function showMessage() {
  return action('SHOW_MESSAGE')
}
