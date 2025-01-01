import { Card, CardContent, Typography, Grid } from '@mui/material';
import { DollarSign, CreditCard, Clock, Tag } from 'lucide-react';

const DashboardCards = () => {
  const data = {
    receitaTotal: 120000, // Valor acumulado das transações
    volumeTransacoes: 500, // Quantidade de transações realizadas
    saldoPendente: 5000, // Saldo ainda não pago
    taxasAplicadas: 2000, // Total de taxas aplicadas
  };

  return (
    <Grid container spacing={3} justifyContent="center">
      {/* Receita Total Card */}
      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <DollarSign size={32} color="green" />
            <Typography variant="h6" component="div" sx={{ mt: 2 }}>
              Receita Total
            </Typography>
            <Typography variant="body2" color="text.secondary">
              MT{data.receitaTotal.toLocaleString()}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Volume de Transações Card */}
      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <CreditCard size={32} color="blue" />
            <Typography variant="h6" component="div" sx={{ mt: 2 }}>
              Volume de Transações
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.volumeTransacoes} Transações
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Saldo Pendente Card */}
      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Clock size={32} color="orange" />
            <Typography variant="h6" component="div" sx={{ mt: 2 }}>
              Saldo Pendente
            </Typography>
            <Typography variant="body2" color="text.secondary">
              MT{data.saldoPendente.toLocaleString()}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Taxas Aplicadas Card */}
      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Tag size={32} color="red" />
            <Typography variant="h6" component="div" sx={{ mt: 2 }}>
              Taxas Aplicadas
            </Typography>
            <Typography variant="body2" color="text.secondary">
              MT{data.taxasAplicadas.toLocaleString()}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default DashboardCards;
