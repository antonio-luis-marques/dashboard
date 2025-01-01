'use client'

import React from 'react'
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import { NAVIGATION, useDemoRouter } from "@/Components/Navigation/Navigation";
import HomeCard from '@/Components/Home/HomeCard';
import Transaction from './transaction/page';
import PaymentRoute from './payment/page';
import Subscription from './subscription/page';
import Catalog from './catalog/page';

export default function AppProviderComponent() {
  const router = useDemoRouter('/dashboard');

  const renderContent = () => {
    switch (router.pathname) {
      case '/dashboard':
        return <HomeCard />;
      case '/transactions':
        return <Transaction />;
      case '/payments':
        return <PaymentRoute />;
      case '/invoices':
        return;
      case '/subscriptions':
        return <Subscription />;
      case '/catalog':
        return <Catalog />
      default:
        return;
    }
  };
  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      branding={{
        title: 'Merchant',
        logo: <React.Fragment />,
      }}
    >
      <DashboardLayout

      >
        <PageContainer
          title=''>
          {renderContent()}
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  )
}