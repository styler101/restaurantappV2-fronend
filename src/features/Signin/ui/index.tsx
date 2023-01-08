import React, { useEffect } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, FormGroup, Input } from '@/components/Form'
import { Splash } from '@/components/Splash'
import logo from '@/assets/img/svg/welcome.svg'

import { SignInFields } from '../interfaces'
import schema, { defaultValues } from '../schema'
import * as S from './styles'

export function Ui() {
  const [showSplash, setShowSplash] = React.useState<boolean>(true)
  const [maskInput, setMaskInput] = React.useState(true)
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

  function handleToogle(value: boolean) {
    setMaskInput(value)
  }
  return showSplash ? (
    <Splash />
  ) : (
    <S.Container>
      <img src={logo} alt="welcome svg" />
      <S.Form onSubmit={handleSubmit(onSumbit)}>
        <FormGroup error={errors.email?.message}>
          <label> E-mail</label>
          <Input
            type="email"
            placeholder=" Seu e-mail de acesso"
            autoComplete="off"
            {...register('email')}
          />
        </FormGroup>
        <FormGroup error={errors.password?.message}>
          <label> Senha </label>
          <Input
            type={maskInput ? 'password' : 'text'}
            placeholder="Informe sua senha"
            autoComplete="off"
            {...register('password')}
          />
          {maskInput ? (
            <button type="button" onClick={() => handleToogle(false)}>
              <FiEye color="#c8c8c8" />
            </button>
          ) : (
            <button type="button" onClick={() => handleToogle(true)}>
              <FiEyeOff color="#c8c8c8" />
            </button>
          )}
        </FormGroup>
        <Button type="submit" disabled={!isValid}>
          Fazer Login
        </Button>
      </S.Form>
    </S.Container>
  )
}
