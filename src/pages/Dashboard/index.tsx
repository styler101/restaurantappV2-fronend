import React from 'react'
import { Ui } from '@/features/Dashboard/ui'
import { DashboardContext } from '@/features/Dashboard/context'

export function Dashboard() {
  return (
    <DashboardContext>
      <Ui />
    </DashboardContext>
  )
}
