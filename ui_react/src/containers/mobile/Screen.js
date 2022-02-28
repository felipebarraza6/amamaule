import React, { useContext } from 'react'
import { Card, WingBlank, WhiteSpace} from 'antd-mobile'
import '../../assets/css/mobile.css'
import { Button } from 'antd'
import { BrowserRouter , Switch, Route, Link  } from 'react-router-dom'
import Login  from '../../components/web/auth/Login'
import { NavBar as Nav  } from 'antd-mobile'
import Logo from '../../assets/logo/01B.png'
import Slider from '../../assets/slider/img1.jpg'
import {HomeOutlined, LogoutOutlined, FilePdfOutlined, FilePdfFilled} from '@ant-design/icons'
import Services from '../../components/web/Services'
import TrenSectionM from '../../components/mobile/TrenSectionM'
import ProfileUser from '../../containers/web/ProfileUser'
import { AuthContext  } from '../../App'
import RegularTasks from '../../components/web/RegularTasks'
import ListTransmissions from "../../components/web/transmissions/list/ListTransmissions";
import IgFeed from "../../components/web/IgFeed";
import TrenMobile from '../../assets/tren_patners_m.jpg'
import Avisement from '../../assets/img/banner_rondas.jpg'
import Program from "../../assets/PROGRAMA.pdf";

const Screen = () => {
  const {state, dispatch} = useContext(AuthContext) 
  return(
     <div>
          <img src={Logo} style={{width:'80%', margin:'30px', textAlign:'center'}} alt='logo'  />
          <BrowserRouter>
              <Nav mode='dark'  
                  style={{backgroundColor:'#FFBA31'}}
                  leftContent={[
                    <Link to='/'>
                    <HomeOutlined style={{fontSize:'25px',color:'white'}}  />
                    </Link>
                    ]}

                  rightContent={[
                    <>{state && 
                    <>
                      {state.isAuthenticated ? <>
                          <Link to='/profile' style={{color:'white'}}  >
                            @{state.user.username}
                            </Link> 
                            <Button type='link'  
                                onClick={ ()=> {
                                  dispatch({
                                      type:'LOGOUT'
                                    })
                                    window.location.replace('/')
                                }}  >
                                  <LogoutOutlined  style={{color:'white'}} />
                            </Button> </>  
                            : <Login/>  }
                        </>}
                    </>                  
                  ]}
              >
                  {!state.isAuthenticated &&
                  <a href={Program} target="__blank" style={{color:'white'}}>
                        <FilePdfFilled style={{fontSize:'20px', marginRight:'5px'}} />
                            Programa
                    </a>}
              </Nav>

              <Switch>
                <Route exact path='/profile' render={()=><>
                <ProfileUser />
                </>} />
                <Route exact path='/signup'>

                  <TrenSectionM />
                    <div style={{color:'white', backgroundColor:'#61263d', textAlign:'center', padding:'20px'}}>
                    AMA - Vincular para crear 2022
                    </div>
                </Route>
                <Route exact path='/' render={()=><>

                    <img src={Avisement} width={'100%'} />
                    <ListTransmissions is_public={true} />
                  <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                      <Card>
                        <Card.Header
                          title="Vincular para Crear"
                        />
                        <Card.Body>
                        <p style={{textAlign:'justify'}}><b>AMA</b> es el primer encuentro de vinculación online para Artistas Escénicos de la Región del Maule. Durante cuatro jornadas, las y los artistas tendrán la oportunidad de reunirse junto a actores del mundo público y privado, con el objetivo de reactivar redes a nivel regional para la programación de Artes Escénicas en el Maule y el resto del país.</p>
                        <p style={{textAlign:'justify'}}>
                          <b>AMA, Vincular Para Crear</b>, propone una agenda de reuniones bilaterales y grupales que permitan a programadores y creadores conocerse, abriendo la oportunidad de ver trabajos estrenados, en progreso y proyectos de creación con sello local.


                        </p>
                            <p>
                                Además, esperamos encontrarnos en el marco de conferencias y mesas de conversación en torno a los nuevos desafíos de la gestión cultural y el acceso trabajo artístico. Finalmente, propociaremos instancias de formación que inciten a la educación continua y sirvan de inspiración para todas y todos los participantes.

                            </p>
                        </Card.Body>
                        <Card.Footer content={<Link to='/signup'>

                        </Link>}  />
                      </Card>
                  </WingBlank>
                    <WhiteSpace size="lg" />
                    <Services />

                    <img src={TrenMobile} width={'100%'} />
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


const styles = {
  button: {
    backgroundColor: '#CE3D4B', 
    color:'white', 
    borderColor:'#CE3D4B'
}
}

export default Screen
