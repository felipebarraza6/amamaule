import React, { useContext } from 'react'
import { Card, WingBlank, WhiteSpace} from 'antd-mobile'
import '../../assets/css/mobile.css'
import { Button } from 'antd'
import { BrowserRouter , Switch, Route, Link  } from 'react-router-dom'
import Login  from '../../components/web/auth/Login'
import { NavBar as Nav  } from 'antd-mobile'
import Logo from '../../assets/logo/01B.png'
import Slider from '../../assets/slider/img1.jpg'
import { HomeOutlined, LogoutOutlined  } from '@ant-design/icons'
import SignUp from '../../components/web/auth/SignUp'
import Services from '../../components/web/Services'
import TrenSectionM from '../../components/mobile/TrenSectionM'
import ProfileUser from '../../containers/web/ProfileUser'
import { AuthContext  } from '../../App'
import RegularTasks from '../../components/web/RegularTasks'

const Screen = () => {
  const {state, dispatch} = useContext(AuthContext) 
  return(
     <div>
          <img src={Logo} style={{width:'100%'}} alt='logo'  />
          <BrowserRouter>
              <Nav mode='dark'  
                  style={{backgroundColor:'#CE3D4B'}}
                  leftContent={[
                    <Link to='/'>
                    <HomeOutlined style={{fontSize:'25px',color:'white'}}  />
                    </Link>
                    ]}
                  rightContent={[
                    <>{state && 
                    <>
                      {state.isAuthenticated ? <>
                          <Link to='/profile' style={{color:'white'}}  >@{state.user.username}</Link> <Button type='link'  onClick={ ()=> dispatch({type:'LOGOUT'})}  ><LogoutOutlined  style={{color:'white'}} /></Button> </>  : <Login/>  }
                                          </>
                    }</>                  
                  ]}
              > 
              </Nav>
              <Switch>
                <Route exact path='/profile' render={()=><>
                <ProfileUser />
                </>} />
                <Route exact path='/' render={()=><>
                  <img src={Slider} style={{width:'100%'}}  />
                  <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                      <Card>
                        <Card.Header
                          title="Vincular para Crear"
                        />
                        <Card.Body>
                        <p style={{textAlign:'justify'}}>AMA es el primer encuentro de vinculación online de Artistas Escénicos del Maule, Impulsado por el Teatro Regional del Maule y la Seremi de las Culturas, las Artes y el Patrimonio de la Región del Maule.</p>
                        <p style={{textAlign:'justify'}}>
                          Inscríbete y participa en nuestras conferencias, mesas de conversación, talleres y rondas de vinculación con programadores nacionales. Además, tendrás acceso exclusivo a nuestros showcases y visionados durante esta edición.

                        </p>
                        </Card.Body>
                        <Card.Footer content={<SignUp />}  />
                      </Card>
                  </WingBlank>
                    <WhiteSpace size="lg" />
                    <Services />
                    <RegularTasks />                   
                    <TrenSectionM />
                    <div style={{color:'white', backgroundColor:'#61263d', textAlign:'center', padding:'20px'}}>
                    AMA - Vincular para crear 2021
                    </div>
                </>}  />
              </Switch>
          </BrowserRouter>
        

     </div>
  )
  
}


export default Screen
