import React from 'react';

import { useDispatch } from 'react-redux';

import { PageLayout } from '@/containers/PageLayout';
import {
  SettingsButton,
  SettingsContainer,
  SettingsTitle,
} from './styled';
import { clearHistory } from '@/store/actionCreators';
import { calculatorManager } from '@/utills';

const SETTINGS_TITLE = 'Settings';
const BUTTON_TITLE = 'Clear all history';

export const SettingsPage = () => {
  const dispatch = useDispatch();

  const deleteHistoryHandle = () => {
    calculatorManager.clearHistory();
    dispatch(clearHistory(calculatorManager.history));
  };

  return (
    <div>
      <PageLayout>
        <SettingsContainer>
          <SettingsTitle>{SETTINGS_TITLE}</SettingsTitle>
          <SettingsButton onClick={deleteHistoryHandle}>{BUTTON_TITLE}</SettingsButton>
        </SettingsContainer>
      </PageLayout>
    </div>
  );
};
