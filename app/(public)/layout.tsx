'use client';

import React from 'react';
import Footer from '@/features/shared/components/footer';
import Header from '@/features/shared/components/header';
import { useGeolocation } from '@/features/location/hooks';

interface PublicLayoutProps {
  children: React.ReactNode;
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
  useGeolocation();

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PublicLayout;