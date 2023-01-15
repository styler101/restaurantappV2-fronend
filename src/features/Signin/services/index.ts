import axios from '@/services/apiservice'
import { SignInFields } from '../interfaces'

export const signInRequest = async ({
  email,
  password,
}: SignInFields): Promise<any> => {
  const { data } = await axios.post('/signin', {
    email,
    password,
  })
  if (!data.success) throw new Error('Invalid Request')
  return data.data
}
