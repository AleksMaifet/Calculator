import React, { lazy, Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';

import { HOME_PAGE_CLASS_ROUTE, HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from '@/constants';

const HomePage = lazy(() =>
  import('@/pages').then(({ HomePage }) => ({ default: HomePage })),
);
const HomeClassPage = lazy(() =>
  import('@/pages').then(({ HomeClassPage }) => ({ default: HomeClassPage })),
);
const SettingsPage = lazy(() =>
  import('@/pages').then(({ SettingsPage }) => ({ default: SettingsPage })),
);

export const RoutContainer = () => {
  return (
    <Suspense fallback="Loading results...">
      <Routes>
        <Route path={HOME_PAGE_ROUTE} element={<HomePage />} />
        <Route path={HOME_PAGE_CLASS_ROUTE} element={<HomeClassPage />} />
        <Route path={SETTINGS_PAGE_ROUTE} element={<SettingsPage />} />
      </Routes>
    </Suspense>
  );
};
