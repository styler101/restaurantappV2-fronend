import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FaEye } from 'react-icons/fa'
import { ErrorField } from '@/components/Form/ErrorField'
import { Button, UnControlledInput } from '@/components/Form'
import { Splash } from '@/components/Splash'
import logo from '@/assets/img/svg/welcome.svg'

import { SignInFields } from '../interfaces'
import schema, { defaultValues } from '../schema'
import * as S from './styles'

export function Ui() {
  const [showSplash, setShowSplash] = React.useState<boolean>(true)
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignInFields>({
    resolver: yupResolver(schema()),
    defaultValues,
    mode: 'onBlur',
  })

  useEffect(() => {
    return () => {
      clearTimeout(timer)
    }
  }, [])
  const timer = setTimeout(() => setShowSplash(false), 1000)
  const onSumbit = (data: SignInFields) => console.log(data)

  return showSplash ? (
    <Splash />
  ) : (
    <S.Container>
      <img src={logo} alt="welcome svg" />
      <S.Form onSubmit={handleSubmit(onSumbit)}>
        <UnControlledInput
          label="E-mail"
          input={{
            name: 'email',
            placeholder: 'Seu e-mail de acesso',
            type: 'email',
          }}
          register={register}
        />
        {errors.email?.message && <ErrorField message={errors.email.message} />}
        <UnControlledInput
          label="Senha"
          icon={<FaEye color="#ccc" />}
          renderIconOnDirection="right"
          input={{
            name: 'password',
            placeholder: 'Informe sua senha',
            type: 'password',
          }}
          register={register}
        />
        {errors.password?.message && (
          <ErrorField message={errors.password.message} />
        )}
        <Button type="submit" disabled={!isValid}>
          Fazer Login
        </Button>
      </S.Form>
    </S.Container>
  )
}
