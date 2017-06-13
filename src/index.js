import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

import SearchContainer from './containers/SearchContainer';

ReactDOM.render(
  <SearchContainer />,
  document.getElementById('root'));

registerServiceWorker();
