import React from 'react';

import { CalculatorComponent } from '@/components/Calculator/function';
import { PageLayout } from '@/components/PageLayout';

export const HomePage = () => (
  <PageLayout>
    <CalculatorComponent />
  </PageLayout>
);
