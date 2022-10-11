import React, { Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';

import { routes } from '@/app/routes';

export const App = () => {
  return (
    <Suspense fallback="Loading results...">
      <Routes>
        {routes.map(({ name, id, child }) => {
          return <Route key={id} path={name} element={child} />;
        })}
      </Routes>
    </Suspense>
  );
};
