'use client'

import { extendTheme, styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaymentIcon from '@mui/icons-material/Payment';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StoreIcon from '@mui/icons-material/Store';
import React from 'react';
import { Navigation, Router } from '@toolpad/core';
import { Dashboard } from '@mui/icons-material';

export const NAVIGATION: Navigation = [
    {
      kind: 'page',
      segment: 'dashboard',
      title: 'Dashboard',
      icon: <Dashboard />,
    },
    {
      kind: 'page',
      segment: 'transactions',
      title: 'Transações',
      icon: <AccountBalanceIcon />,
    },
    {
      kind: 'page',
      segment: 'payments',
      title: 'Pagamento',
      icon: <PaymentIcon />,
    },
    {
      kind: 'page',
      segment: 'invoices',
      title: 'Facturas',
      icon: <ReceiptIcon />,
    },
    {
      kind: 'page',
      segment: 'subscriptions',
      title: 'Assinaturas',
      icon: <SubscriptionsIcon />,
    },
    {
      kind: 'page',
      segment: 'catalog',
      title: 'Catálogo',
      icon: <StoreIcon />,
    },
    {
      kind: 'divider',
    },
    {
      kind: 'header',
      title: 'Outras opções',
    },
  ];


export function useDemoRouter(initialPath: string): Router {
    const [pathname, setPathname] = React.useState(initialPath);
  
    const router = React.useMemo(() => {
      return {
        pathname,
        searchParams: new URLSearchParams(),
        navigate: (path: string | URL) => setPathname(String(path)),
      };
    }, [pathname]);
  
    return router;
  }

  export const demoTheme = extendTheme({
    colorSchemes: { light: true, dark: true },
    colorSchemeSelector: 'class',
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 600,
        lg: 1200,
        xl: 1536,
      },
    },
  });