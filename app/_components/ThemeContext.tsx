import React from 'react';

export const ThemeContext = React.createContext({
  isToggled: true,
  handleToggle: () => {},
});
