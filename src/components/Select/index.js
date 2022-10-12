import React, { memo } from 'react';

import PropTypes from 'prop-types';

import { OptionChangeTheme, OptionSelectTheme } from './styled';

export const Select = memo(({ list, onPressHandle, currentTheme }) => {
  return (
    <OptionSelectTheme onChange={onPressHandle} value={currentTheme}>
      {list.map(({ id, value, label }) => (
        <OptionChangeTheme key={id} value={value}>
          {label}
        </OptionChangeTheme>
      ))}
    </OptionSelectTheme>
  );
});

Select.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onPressHandle: PropTypes.func.isRequired,
  currentTheme: PropTypes.string.isRequired,
};
