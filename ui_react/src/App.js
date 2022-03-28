import React, { useState, useEffect, useReducer,
                createContext } from 'react'
import api from './api/endpoints'
import { notification } from 'antd'
import { login_reducer } from './reducers/auth'

//Containers
import Home from './containers/web/Home'

export const AuthContext = createContext()
export const SizeWidth = createContext()

function App() {
  
  const initialState = {
    isAuthenticated: false,
    access_token: null,
    user: null    
  }

  
  
  const [state, dispatch] = useReducer(login_reducer, initialState)
  const [size, setSize] = useState()
  
  useEffect(()=>{
  
    const access_token = JSON.parse(localStorage.getItem('access_token' || null ))
    const user = JSON.parse(localStorage.getItem('user' || null))
    
    async function getUserData(user) {
      
      const request = await api.user.profile(user).then((response)=> {
          const user = response.data
          dispatch({
            type: 'LOGIN',
            payload: {
              access_token,
              user
            }
          })
      })
      return request
    }

    setSize(window.innerWidth)

    if(user && access_token){
      if(user.is_verified){
      notification.warning({duration: 10, description: <a href='https://amamaule.cl/profile/myrounds/'>IR A TUS RONDAS</a>,message:'Para concretar o cancelar una reunión, es necesario que hagas click en el botón aceptar o en el botón rechazar, según estimes conveniente..', onClick: ()=> window.location('/profile/myrounds') })
      }
      
      console.log(user)
    getUserData(user.username)
    } 
  }, [])


  return(
    <AuthContext.Provider 
      value = {{
        state,
        dispatch
      }}
    >
      <React.Fragment>
            <Home />  
      </React.Fragment>           
    </AuthContext.Provider>
  )

}


export default App

