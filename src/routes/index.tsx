import React from 'react'
import { Route, Routes as Switch, BrowserRouter } from 'react-router-dom'
import { Signin } from '@/pages/Signin'
import { Dashboard } from '@/pages/Dashboard'

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route element={<Signin />} index />
        <Route path="dashboard" element={<Dashboard />} />
      </Switch>
    </BrowserRouter>
  )
}
