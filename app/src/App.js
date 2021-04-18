import React from 'react';
import {ThemeProvider} from 'react-native-magnus';
import {Provider} from 'react-redux';
import store from '@store/';
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
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);
