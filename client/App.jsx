import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import './styles/index.scss';
import './styles/tailwind.css';
import './index.css';

ReactDOM.render(
  <Main />,
  document.getElementById('root') || document.createElement('div')
);

if (module.hot) module.hot.accept();
