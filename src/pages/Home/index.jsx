import React from 'react';

import { CalculatorComponent, PageLayout } from '@/containers';

export const HomePage = () => {
  return (
    <div>
      <PageLayout>
        <CalculatorComponent />
      </PageLayout>
    </div>
  );
};
