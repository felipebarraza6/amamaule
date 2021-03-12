import React, { useState, useEffect } from 'react'

import Home from './Home'


function App() {

  const [size, setSize] = useState()

  useEffect(()=>{
    setSize(window.innerWidth)
  }, [])


  return(
    <React.Fragment>
       {size < 600 ? 'Version Mobile': <Home />  }
    </React.Fragment>
  )

}


export default App

