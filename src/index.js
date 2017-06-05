import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

import Header from './components/Header/';
import ExternalLink from './components/ExternalLink/';
import FormattedDate from './components/FormattedDate/';
import HintMessage from './components/HintMessage/';

ReactDOM.render(
  <div>
    <Header title="Github Releases"/>
    <ExternalLink to="https://www.google.com.mx/">Google</ExternalLink>
    <FormattedDate date="05/10/2017"/>
    <HintMessage>hola</HintMessage>
  </div>,
  document.getElementById('root'));
registerServiceWorker();
