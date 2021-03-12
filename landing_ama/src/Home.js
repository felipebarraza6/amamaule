import React, { useEffect, useReducer, createContext} from 'react'
import api from './api/endpoints'
import {login_reducer} from './reducers/auth'
// Antd
import { Layout } from 'antd'
import ProfileUser from './containers/ProfileUser'
// Components
import NavBar from './components/NavBar'
import HeaderLogo from './components/HeaderLogo'
import CarouselBanner from './components/CarouselBanner'
import InfoSection from './components/InfoSection'
import TrenSecion from './components/TrenSection'
import Services from './components/Services'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
export const AuthContext = createContext()
const { Content, Footer } = Layout


const Home = () => {

    const initialState = {
        isAuthenticated: false,
        access_token: null,
        user: null
    }

    const [state, dispatch] = useReducer(login_reducer, initialState)

    useEffect(()=> {
    
        const access_token = JSON.parse(localStorage.getItem('access_token') || null)  
        const user = JSON.parse(localStorage.getItem('user') || null)
    
        async function get_user(user){
            console.log(user)
          const request = await api.user.profile(user).then((response)=> {
              
              const access_token = JSON.parse(localStorage.getItem('access_token') || null)
              const user = response.data 
              dispatch({
                type:'LOGIN',
                payload: {
                    access_token,
                    user
               }
              })
          })
          return request
        }
    
        if(user && access_token){
          get_user(user.username)
        }
      },[])
    

    return(
        <AuthContext.Provider 
            value = {{
                state,
                dispatch
            }}
        >
            <BrowserRouter>  
        <Layout>            
            <HeaderLogo />
                                      
            <NavBar />
            <Content style={styles.content}>
                <Switch>
                    <Route exact path='/' render={()=> <React.Fragment>
                        <CarouselBanner />
                        <InfoSection />
                        <Services />
                    </React.Fragment>} />     
                    <Route exact path='/profile' component={ProfileUser} />                                   
                </Switch>                
            </Content>
            
            <TrenSecion />
            <Footer style={styles.footer}>AMA - Vincular para crear 2021</Footer>
        </Layout>
        </BrowserRouter>
        </AuthContext.Provider>
    )
}


const styles = {
    footer: {
        textAlign:'center',
        backgroundColor: '#61263D',
        color: 'white',                
    },
    content: {        
        marginBottom:'0px'
    }
}


export default Home
