import { action } from 'typesafe-actions'
import { types } from './types'
interface SignInRequest {
  email: string
  password: string
}

export function signInRequest({ email, password }: SignInRequest) {
  return action(types.request, { email, password })
}

export function signInRequestSuccess() {
  return action(types.success)
}

export function signInRequestFailure() {
  return action(types.failure)
}
