import React from 'react';
import { Provider } from 'react-redux';
import { store } from './configureStore';

import { Routing } from './containers';
import './styles/style.sass';

const App = () => (
  <Provider store={store}>
      <Routing />
  </Provider>
)

export default App;
