import React from 'react'
import DashboardCards from './DashboardCards'
import { Box, Typography } from '@mui/material'
import DashboardMetrics from './DashboardMetrics'
import DashboardNotifications from './DashboardRecent'


export default function HomeCard() {
  return (
    <Box>
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h6" component="h5" gutterBottom>
          Resumo financeiro
        </Typography>
        <DashboardCards />
      </Box>
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h6" component="h5" gutterBottom>
          Métricas
        </Typography>
        <DashboardMetrics />
      </Box>
      <Box>
        <DashboardNotifications />
      </Box>
    </Box>
  )
}
