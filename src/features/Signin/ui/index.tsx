import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import logo from '@/assets/img/svg/welcome.svg'

import { Button, FormGroup, Input } from '@/components/Form'
import { Spinner } from '@/components/Spinner'
import { StoreState } from '@/store/storeTypes'
import { Splash } from '@/components/Splash'
import { SignInFields } from '../interfaces'

import schema, { defaultValues } from '../schema'
import * as actions from '@/store/modules/auth/actions'
import * as S from './styles'

export function Ui() {
  const dispatch = useDispatch()
  const { loading } = useSelector((state: StoreState) => state.auth)

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
  const onSumbit = ({ email, password }: SignInFields) => {
    dispatch(actions.signInRequest({ email, password }))
  }

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
            disabled={loading}
          />
        </FormGroup>
        <FormGroup error={errors.password?.message}>
          <label> Senha </label>
          <Input
            type={maskInput ? 'password' : 'text'}
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
