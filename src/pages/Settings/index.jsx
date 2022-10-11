import React, { useCallback } from 'react';

import { useDispatch } from 'react-redux';

import { Select } from '@/components/Select';
import { themesConfig } from '@/constants';
import { PageLayout } from '@/containers/PageLayout';
import { clearHistory, setTheme } from '@/store/actionCreators';
import { calculatorManager } from '@/utills';

import {
  SettingsButton,
  SettingsContainer,
  SettingsContext,
  SettingsTitle,
} from './styled';

const SETTINGS_TITLE = 'Settings';
const BUTTON_TITLE = 'Clear all history';

export const SettingsPage = () => {
  const dispatch = useDispatch();

  const deleteHistoryHandle = () => {
    calculatorManager.clearHistory();
    dispatch(clearHistory(calculatorManager.history));
  };

  const changeThemeAppHandle = useCallback(
    e => {
      const theme = e.target.value;
      dispatch(setTheme(theme));
    },
    [dispatch],
  );

  return (
    <PageLayout>
      <SettingsContainer>
        <SettingsTitle>{SETTINGS_TITLE}</SettingsTitle>
        <SettingsContext>
          <Select list={themesConfig} onPressHandle={changeThemeAppHandle} />
          <SettingsButton onClick={deleteHistoryHandle}>{BUTTON_TITLE}</SettingsButton>
        </SettingsContext>
      </SettingsContainer>
    </PageLayout>
  );
};
