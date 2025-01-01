import React from 'react'
import DashboardCards from './DashboardCards'
import { Typography } from '@mui/material'
import DashboardMetrics from './DashboardMetrics'
import DashboardNotifications from './DashboardRecent'


export default function HomeCard() {
  return (
    <div className='space-y-10'>
      <div>
        <Typography variant="h6" component="h5">
          Resumo financeiro
        </Typography>
        <DashboardCards />
      </div>
      <div className=''>
        <Typography variant="h6" component="h5">
          Métricas
        </Typography>
        <DashboardMetrics />
      </div>
      <div>
        <DashboardNotifications/>
      </div>
    </div>
  )
}
