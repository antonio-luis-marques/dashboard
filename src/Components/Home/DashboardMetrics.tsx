'use client'

import { Card, CardContent, Typography, Grid } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { DollarSign, ShoppingBag, TrendingUp } from 'lucide-react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registra os componentes necessários para o Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DashboardMetrics = () => {
  // Exemplo de dados para as métricas
  const salesData = [
    { name: 'Jan', sales: 4000, revenue: 2400 },
    { name: 'Feb', sales: 3000, revenue: 1398 },
    { name: 'Mar', sales: 2000, revenue: 9800 },
    { name: 'Apr', sales: 2780, revenue: 3908 },
    { name: 'May', sales: 1890, revenue: 4800 },
    { name: 'Jun', sales: 2390, revenue: 3800 },
    { name: 'Jul', sales: 3490, revenue: 4300 },
  ];

  // Dados para as tendências de vendas
  const trendsData = [
    { name: 'Week 1', trend: 4000 },
    { name: 'Week 2', trend: 5000 },
    { name: 'Week 3', trend: 6000 },
    { name: 'Week 4', trend: 7000 },
  ];

  // Configuração para o gráfico de Vendas
  const salesChartData = {
    labels: salesData.map((item) => item.name),
    datasets: [
      {
        label: 'Vendas',
        data: salesData.map((item) => item.sales),
        borderColor: '#8884d8',
        backgroundColor: 'rgba(136, 132, 216, 0.2)',
        fill: true,
      },
    ],
  };

  // Configuração para o gráfico de Receitas
  const revenueChartData = {
    labels: salesData.map((item) => item.name),
    datasets: [
      {
        label: 'Receitas',
        data: salesData.map((item) => item.revenue),
        borderColor: '#82ca9d',
        backgroundColor: 'rgba(130, 202, 157, 0.2)',
        fill: true,
      },
    ],
  };

  // Configuração para o gráfico de Tendências
  const trendsChartData = {
    labels: trendsData.map((item) => item.name),
    datasets: [
      {
        label: 'Tendências de Vendas',
        data: trendsData.map((item) => item.trend),
        borderColor: '#ff7300',
        backgroundColor: 'rgba(255, 115, 0, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <Grid container spacing={3}>
      {/* Card para as Vendas */}
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              <ShoppingBag size={24} style={{ marginRight: '8px' }} />
              Vendas
            </Typography>
            <div style={{ width: '100%', maxHeight: 250 }}>
              <Line data={salesChartData} options={{ responsive: true }} />
            </div>
          </CardContent>
        </Card>
      </Grid>

      {/* Card para as Receitas */}
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              <DollarSign size={24} style={{ marginRight: '8px' }} />
              Receitas
            </Typography>
            <div style={{ width: '100%', maxHeight: 250 }}>
              <Line data={revenueChartData} options={{ responsive: true }} />
            </div>
          </CardContent>
        </Card>
      </Grid>

      {/* Card para as Tendências */}
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              <TrendingUp size={24} style={{ marginRight: '8px' }} />
              Tendências de Vendas
            </Typography>
            <div style={{ width: '100%', maxHeight: 250 }}>
              <Line data={trendsChartData} options={{ responsive: true }} />
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default DashboardMetrics;
