import React from 'react'
import { Route, Routes as Switch } from 'react-router-dom'
import { Signin } from '@/pages/Signin'
import { Dashboard } from '@/pages/Dashboard'

export function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Signin />} index />
      <Route path="dashboard" element={<Dashboard />} />
    </Switch>
  )
}
