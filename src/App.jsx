import React from 'react';
import { Provider } from 'react-redux';
import store from './configureStore';

import { Content } from './containers';
import './styles/style.sass';

const App = () => (
  <Provider store={store}>
    <Content />
  </Provider>
)

export default App;
