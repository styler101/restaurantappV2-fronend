import * as yup from 'yup'

const schema = () => {
  return yup.object({
    email: yup
      .string()
      .email('Informe um e-mail válido')
      .required('E-mail Obrigátorio'),
    password: yup.string().required('Senha Obrigatória'),
  })
}

export const defaultValues = {
  email: '',
  password: '',
}

export default schema
