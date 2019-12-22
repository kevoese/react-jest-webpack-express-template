import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import './app.scss';

ReactDOM.render(
  <Main />,
  document.getElementById('root') || document.createElement('div')
);

if (module.hot) module.hot.accept();
