import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import AppContainer from './components/App/AppContainer';
import store from './redux/index';

ReactDOM.render(
  <React.StrictMode>
    <AppContainer store={store} />
  </React.StrictMode>,
  document.getElementById('root'),
);
