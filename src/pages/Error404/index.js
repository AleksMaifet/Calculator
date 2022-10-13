import React from 'react';

import { PageLayout } from '@/containers';

import { ErrorContainer } from './styled';

const ERROR_TITLE = '404';

export const Error404 = () => {
  return (
    <PageLayout>
      <ErrorContainer>{ERROR_TITLE}</ErrorContainer>
    </PageLayout>
  );
};
