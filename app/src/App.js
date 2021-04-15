import React from 'react';
import {ThemeProvider} from 'react-native-magnus';
import Navigator from './navigator';

import {Colors} from './utils/Theme';
const App = () => {
  return <Navigator />;
};

const theme = {
  colors: {
    ...Colors,
  },
};
export default () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
