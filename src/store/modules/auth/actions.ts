import { action } from 'typesafe-actions'
import { types } from './types'
interface SignInRequest {
  email: string
  password: string
}

interface SignInRequestSucess {
  accessToken: string
  _id: string
  name: string
  email: string
}

export function signInRequest({ email, password }: SignInRequest) {
  return action(types.request, { email, password })
}

export function signInRequestSuccess({
  _id,
  accessToken,
  email,
  name,
}: SignInRequestSucess) {
  return action(types.success, { _id, accessToken, email, name })
}

export function signInRequestFailure() {
  return action(types.failure)
}
