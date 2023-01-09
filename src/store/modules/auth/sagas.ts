import { takeLatest, call, put, all } from 'redux-saga/effects'
import { ActionType } from 'typesafe-actions'
import service from '@/services/apiservice'
import * as actions from './actions'

export interface ResponseGenerator {
  config?: any
  data?: any
  headers?: any
  request?: any
  status?: number
  statusText?: string
}

interface ResponseData {
  data: {
    accessToken: string
    email: string
    _id: string
    name: string
  }
}

export function* signIn({ payload }: ActionType<typeof actions.signInRequest>) {
  let data
  try {
    const { email, password } = payload

    const { data }: ResponseGenerator = yield call(service.post, 'signin', {
      email,
      password,
    })
    const { data: responseData } = data as ResponseData

    console.log(responseData)
    yield put(
      actions.signInRequestSuccess({
        _id: responseData._id,
        accessToken: responseData.accessToken,
        email: responseData.email,
        name: responseData.name,
      })
    )
    //yield put()
    // actions.signInRequestSuccess({ _id, accessToken, email: dataEmail, name })
  } catch (error: any) {
    yield put(actions.signInRequestFailure())
  } finally {
    console.log(data)
  }
}

export default all([takeLatest('SIGN_IN_REQUEST', signIn)])
// Sempre que formos usar as funções call e put devemos usar yield

// Definições

// call => usamos o call sempre que formos executar uma promise ou um generator  o primeiro parametro é a funcão que queremos executar o segundo e caminho
// put =>  usamos o put para usarmos um dispatch dentro do saga
// takeLastest => vai executar a única requisição
// takeEvery => vai pegar todas as requisições um ótimo cénario seria para chats
