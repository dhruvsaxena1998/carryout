import React from 'react';
import {ThemeProvider} from 'react-native-magnus';
import Navigator from './navigator';

import Theme from './utils/Theme';
const theme = {
  colors: Theme.Colors,
  fontFamily: Theme.FontFamily,
};

const App = () => {
  return <Navigator />;
};

export default () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
