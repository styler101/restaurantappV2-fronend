import React from 'react'

import { Route, Routes as Switch } from 'react-router-dom'
import { Signin } from '@/pages/Signin'
import { Route as PrivateRoute } from '@/utils/PrivateRoute'
import { Main } from '@/pages/Main'
import { Dashboard } from '@/pages/Dashboard'
import { Records } from '@/pages/Records'
export function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Signin />} index />
      <Route
        path="home"
        element={
          <PrivateRoute>
            <Main />
          </PrivateRoute>
        }>
        <Route index element={<Dashboard />} />
        <Route path="records" element={<Records />} />
      </Route>
    </Switch>
  )
}
