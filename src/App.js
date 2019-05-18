import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Heroes from './Views/Heroes';

import store from './store';
import { Provider } from 'react-redux';

const App = () => (
  <Provider store={store}>
    <CssBaseline />
    <Heroes />
  </Provider>
);


export default App;
