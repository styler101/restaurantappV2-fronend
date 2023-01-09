import { all } from 'redux-saga/effects'
import auth from './auth/sagas'
// As nossas sagas serão importadas aqui
export default function* rootSaga(): any {
  return yield all([auth])
}
