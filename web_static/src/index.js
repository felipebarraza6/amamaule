import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { FloatingWhatsApp } from 'react-floating-whatsapp-button'
import 'react-floating-whatsapp-button/dist/index.css'


const {pathname} = window.location

ReactDOM.render(
  <React.Fragment>
      <App />
  </React.Fragment>,
  document.getElementById('root')
);

