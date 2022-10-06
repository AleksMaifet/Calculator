import React from 'react';

import { PageLayout } from '@/containers';
import { CalculatorComponent } from '@/containers/Calculator/function';

export const HomePage = () => {
  return (
    <PageLayout>
      <CalculatorComponent />
    </PageLayout>
  );
};
