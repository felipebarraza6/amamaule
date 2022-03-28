import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import * as serviceWorker from './services_workers/serviceWorkerRegistration'


ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);

serviceWorker.register()