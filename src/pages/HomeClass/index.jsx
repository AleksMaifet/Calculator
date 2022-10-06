import React from 'react';

import CalculatorComponent from '@/containers/Calculator/class';
import { PageLayout } from '@/containers/PageLayout';

export const HomeClassPage = () => {
  return (
    <PageLayout>
      <CalculatorComponent />
    </PageLayout>
  );
};
