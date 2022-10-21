import React from 'react';

import { PageLayout } from '@/components/PageLayout';
import { ERROR_TITLE_404 } from '@/constants';

import { ErrorContainer } from './styled';

export const Error404 = () => (
  <PageLayout>
    <ErrorContainer>{ERROR_TITLE_404}</ErrorContainer>
  </PageLayout>
);
