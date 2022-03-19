import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { FloatingWhatsApp } from 'react-floating-whatsapp-button'
import 'react-floating-whatsapp-button/dist/index.css'



ReactDOM.render(
  <React.Fragment>
    <div style={{backgroundColor:'red', position:'absolute'}}>
    <FloatingWhatsApp 
      headerTitle={'Soporte Web'} 
      zIndex={1} 
      size={70}
      phone={56933932112}
      popupMessage={'Hola! 🤝 en qué podemos ayudarte? '} 
      backgroundColor='rgb(176, 93, 185)' 
      headerColor='rgb(176, 93, 185)'	/>
    </div>
    
    <App />
  </React.Fragment>,
  document.getElementById('root')
);

