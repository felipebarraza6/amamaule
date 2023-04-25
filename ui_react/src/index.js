import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { FloatingWhatsApp } from 'react-floating-whatsapp-button'
import 'react-floating-whatsapp-button/dist/index.css'


const {pathname} = window.location



ReactDOM.render(
  <React.Fragment>    
    <App />
    {pathname!=='/profile/support/' && 
    <FloatingWhatsApp 
      zIndex={2} 
      size={70}      
      autoOpenTimeout={10}
      phone={56933932112}
      popupMessage={'Hola! 🤝 en qué podemos ayudarte? '} 
      backgroundColor='rgb(176, 93, 185)' 
      headerColor='rgb(176, 93, 185)'	/>
    }
  </React.Fragment>,
  document.getElementById('root')
);

