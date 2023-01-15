export type SignInFields = {
  email: string
  password: string
}

export interface HttpResponse {
  success: boolean
  data: {
    accessToken: string
    _id: string
    name: string
    email: string
  }
}
