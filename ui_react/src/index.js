import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { FloatingWhatsApp } from 'react-floating-whatsapp-button'
import 'react-floating-whatsapp-button/dist/index.css'



ReactDOM.render(
  <React.Fragment>
    <FloatingWhatsApp 
      headerTitle={'Soporte Web'} 
      zIndex={2} 
      size={70}      
      phone={56933932112}
      popupMessage={'Hola! 🤝 en qué podemos ayudarte? '} 
      backgroundColor='rgb(176, 93, 185)' 
      headerColor='rgb(176, 93, 185)'	/>
    
    <App />
  </React.Fragment>,
  document.getElementById('root')
);

