import React from 'react';
import { Card, CardContent, Typography, Grid, List, ListItem, ListItemText, ListItemIcon, Divider } from '@mui/material';
import { ShoppingBag, TrendingUp, DollarSign } from 'lucide-react'; // Ícones do Lucide
import RecentTransactions from '../Transaction/RecentTransactions';
import { transactions } from '@/utils/ListTransactions';
import RecentNotifications from '../Notification/RecentNotifications';
import { notifications } from '@/utils/Notification';

const DashboardNotifications = () => {

  return (
    <Grid container spacing={3}>
      {/* Card para Transações Recentes */}
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Transações Recentes
            </Typography>
            <RecentTransactions transactions={transactions} />
          </CardContent>
        </Card>
      </Grid>

      {/* Card para Notificações de Eventos Importantes */}
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Notificações
            </Typography>
            <RecentNotifications notifications={notifications} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default DashboardNotifications;
