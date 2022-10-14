import React from 'react';

import { PageLayout } from '@/components/PageLayout';

import { ErrorContainer } from './styled';

const ERROR_TITLE = '404';

export const Error404 = () => (
  <PageLayout>
    <ErrorContainer>{ERROR_TITLE}</ErrorContainer>
  </PageLayout>
);
