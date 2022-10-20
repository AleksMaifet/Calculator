import React, { lazy, Suspense, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';

import {
  ERROR_PAGE_ROUTE,
  HOME_PAGE_CLASS_ROUTE,
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '@/constants';
import { loadState } from '@/localStorage';
import { Error404 } from '@/pages';
import { calculatorManager, synchronization } from '@/utills';

const HomePage = lazy(() =>
  import('@/pages').then(({ HomePage }) => ({
    default: HomePage,
  })),
);
const HomeClassPage = lazy(() =>
  import('@/pages').then(({ HomeClassPage }) => ({
    default: HomeClassPage,
  })),
);
const SettingsPage = lazy(() =>
  import('@/pages').then(({ SettingsPage }) => ({
    default: SettingsPage,
  })),
);

export const RoutContainer = () => {
  useEffect(() => {
    synchronization(loadState(), calculatorManager);
  }, []);

  return (
    <Suspense fallback="Loading results...">
      <Routes>
        <Route path={HOME_PAGE_ROUTE} element={<HomePage />} />
        <Route path={HOME_PAGE_CLASS_ROUTE} element={<HomeClassPage />} />
        <Route path={SETTINGS_PAGE_ROUTE} element={<SettingsPage />} />
        <Route path={ERROR_PAGE_ROUTE} element={<Error404 />} />
      </Routes>
    </Suspense>
  );
};
