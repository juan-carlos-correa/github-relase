import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import Header from './components/Header/';

ReactDOM.render(
  <Header title="Github Releases"/>,
  document.getElementById('root'));
registerServiceWorker();
