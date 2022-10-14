import React from 'react';

import CalculatorComponent from '@/components/Calculator/class';
import { PageLayout } from '@/components/PageLayout';

export const HomePage = () => (
  <PageLayout>
    <CalculatorComponent />
  </PageLayout>
);
