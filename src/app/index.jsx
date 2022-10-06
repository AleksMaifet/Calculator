import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { routes } from '@/app/routes';

export const App = () => {
  return (
    <Routes>
      {routes.map(({ name, id, child }) => {
        return <Route key={id} path={name} element={child} />;
      })}
    </Routes>
  );
};
