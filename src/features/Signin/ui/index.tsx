import React, { useCallback, useEffect } from 'react'

import { FiEye, FiEyeOff } from 'react-icons/fi'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import logo from '@/assets/img/svg/welcome.svg'

import { Button, FormGroup, Input } from '@/components/Form'
import { Spinner } from '@/components/Spinner'
import { Splash } from '@/components/Splash'
import { SignInFields } from '../interfaces'
import { signInRequest as request } from '../services'

import schema, { defaultValues } from '../schema'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'

export function Ui() {
  const navigate = useNavigate()
  const [showSplash, setShowSplash] = React.useState<boolean>(true)
  const [maskInput, setMaskInput] = React.useState<boolean>(true)
  const [loading, setLoading] = React.useState<boolean>(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<SignInFields>({
    resolver: yupResolver(schema()),
    defaultValues,
    mode: 'onBlur',
  })

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [])
  const onSumbit = useCallback(async ({ email, password }: SignInFields) => {
    setLoading(true)
    try {
      // const user = await request({ email, password })
      // localStorage.setItem('@waiterapp:user', JSON.stringify(user))
      // toast.success('Usuário Autenticado!')
      // navigate('/dashboard')
      // reset()
    } catch (error) {
      toast.error('Crendenciais Invalidas!')
    } finally {
      setLoading(false)
    }
  }, [])

  function handleToogle(value: boolean) {
    setMaskInput(value)
  }

  return (
    <S.Container>
      <img src={logo} alt="welcome svg" />
      <S.Form onSubmit={handleSubmit(onSumbit)}>
        <FormGroup error={errors.email?.message}>
          <label htmlFor="email"> E-mail</label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            autoComplete="off"
            {...register('email')}
            disabled={loading}
          />
        </FormGroup>
        <FormGroup error={errors.password?.message}>
          <label htmlFor="password"> Senha </label>
          <Input
            id="password"
            type={'password'}
            placeholder="Informe sua senha"
            autoComplete="off"
            {...register('password')}
            disabled={loading}
          />
          {maskInput ? (
            <button
              type="button"
              onClick={() => handleToogle(false)}
              disabled={loading}>
              <FiEye color="#c8c8c8" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => handleToogle(true)}
              disabled={loading}>
              <FiEyeOff color="#c8c8c8" />
            </button>
          )}
        </FormGroup>
        <Button type="submit" disabled={!isValid || loading}>
          {loading ? (
            <Spinner width="21" height="21" />
          ) : (
            <span>Fazer Login </span>
          )}
        </Button>
      </S.Form>
    </S.Container>
  )
}
