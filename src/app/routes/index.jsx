import React from 'react';

import { HOME_PAGE_CLASS_ROUTE, HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from '@/constants';
import { HomeClassPage, HomePage, SettingsPage } from '@/pages';

export const routes = [
  {
    id: 'home',
    name: HOME_PAGE_ROUTE,
    child: <HomePage />,
  },
  {
    id: 'homeClass',
    name: HOME_PAGE_CLASS_ROUTE,
    child: <HomeClassPage />,
  },
  {
    id: 'settings',
    name: SETTINGS_PAGE_ROUTE,
    child: <SettingsPage />,
  },
];
